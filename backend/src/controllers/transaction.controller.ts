import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middlerware";
import { HTTPSTATUS } from "../config/http.config";
import {
  bulkDeleteTransactionSchema,
  bulkTransactionSchema,
  createTransactionSchema,
  transactionIdSchema,
  updateTransactionSchema,
} from "../validators/transaction.validator";
import {
  bulkDeleteTransactionService,
  bulkTransactionService,
  createTransactionService,
  deleteTransactionService,
  duplicateTransactionService,
  getAllTransactionService,
  getTransactionByIdService,
  updateTransactionService,
} from "../services/transaction.service";
import { TransactionTypeEnum } from "../models/transaction.model";
import { BadRequestException } from "../utils/app-error";
import axios from "axios";
import { genAI, genAIModel } from "../config/google-ai.config";
import { createPartFromBase64, createUserContent } from "@google/genai";
import { receiptPrompt } from "../utils/prompt";

export const createTransactionController = asyncHandler(
  async (req: Request, res: Response) => {
    const body = createTransactionSchema.parse(req.body);
    const userId = req.user?._id;

    const transaction = await createTransactionService(body, userId);

    return res.status(HTTPSTATUS.CREATED).json({
      message: "Transacton created successfully",
      transaction,
    });
  }
);

export const getAllTransactionController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;

    const filters = {
      keyword: req.query.keyword as string | undefined,
      type: req.query.type as keyof typeof TransactionTypeEnum | undefined,
      recurringStatus: req.query.recurringStatus as
        | "RECURRING"
        | "NON_RECURRING"
        | undefined,
    };

    const pagination = {
      pageSize: parseInt(req.query.pageSize as string) || 20,
      pageNumber: parseInt(req.query.pageNumber as string) || 1,
    };

    const result = await getAllTransactionService(userId, filters, pagination);

    return res.status(HTTPSTATUS.OK).json({
      message: "Transaction fetched successfully",
      ...result,
    });
  }
);

export const getTransactionByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;
    const transactionId = transactionIdSchema.parse(req.params.id);

    const transaction = await getTransactionByIdService(userId, transactionId);

    return res.status(HTTPSTATUS.OK).json({
      message: "Transaction fetched successfully",
      transaction,
    });
  }
);

export const duplicateTransactionController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;
    const transactionId = transactionIdSchema.parse(req.params.id);

    const transaction = await duplicateTransactionService(
      userId,
      transactionId
    );

    return res.status(HTTPSTATUS.OK).json({
      message: "Transaction duplicated successfully",
      data: transaction,
    });
  }
);

export const updateTransactionController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;
    const transactionId = transactionIdSchema.parse(req.params.id);
    const body = updateTransactionSchema.parse(req.body);

    await updateTransactionService(userId, transactionId, body);

    return res.status(HTTPSTATUS.OK).json({
      message: "Transaction updated successfully",
    });
  }
);

export const deleteTransactionController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;
    const transactionId = transactionIdSchema.parse(req.params.id);

    await deleteTransactionService(userId, transactionId);

    return res.status(HTTPSTATUS.OK).json({
      message: "Transaction deleted successfully",
    });
  }
);

export const bulkDeleteTransactionController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;
    const { transactionIds } = bulkDeleteTransactionSchema.parse(req.body);

    const result = await bulkDeleteTransactionService(userId, transactionIds);

    return res.status(HTTPSTATUS.OK).json({
      message: "Transaction deleted successfully",
      ...result,
    });
  }
);

export const bulkTransactionController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;
    const { transactions } = bulkTransactionSchema.parse(req.body);

    const result = await bulkTransactionService(userId, transactions);

    return res.status(HTTPSTATUS.OK).json({
      message: "Bulk transaction inserted successfully",
      ...result,
    });
  }
);

export const scanReceiptController = asyncHandler(
  async (req: Request, res: Response) => {
    const file = req?.file;

    const result = await scanReceiptService(file);

    return res.status(HTTPSTATUS.OK).json({
      message: "Reciept scanned successfully",
      data: result,
    });
  }
);

export const scanReceiptService = async (
  file: Express.Multer.File | undefined
) => {
  if (!file) throw new BadRequestException("No file uploaded");

  try {
    if (!file.path) throw new BadRequestException("failed to upload file");

    console.log(file.path);

    const responseData = await axios.get(file.path, {
      responseType: "arraybuffer",
    });
    
    const base64String = Buffer.from(responseData.data).toString("base64");

    if (!base64String) throw new BadRequestException("Could not process file");

    const result = await genAI.models.generateContent({
      model: genAIModel,
      contents: [
        createUserContent([
          receiptPrompt,
          createPartFromBase64(base64String, file.mimetype),
        ]),
      ],
      config: {
        temperature: 0,
        topP: 1,
        responseMimeType: "application/json",
      },
    });

    const response = result.text;
    const cleanedText = response?.replace(/```(?:json)?\n?/g, "").trim();

    if (!cleanedText)
      return {
        error: "Could not read reciept  content",
      };
    
    const data = JSON.parse(cleanedText);

    if (!data.amount || !data.date) {
      return { error: "Reciept missing required information" };
    }

    return {
      title: data.title || "Receipt",
      amount: data.amount,
      date: data.date,
      description: data.description,
      category: data.category,
      paymentMethod: data.paymentMethod,
      type: data.type,
      receiptUrl: file.path,
    };
  } catch (error) {
    return { error: "Reciept scanning  service unavailable" };
  }
};