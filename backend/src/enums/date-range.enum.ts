export enum DateRangeEnum {
  TODAY = "today",
  LAST_7_DAYS = "7days",
  THIS_WEEK = "thisWeek",
  LAST_WEEK = "lastWeek",
  LAST_30_DAYS = "30days",
  LAST_MONTH = "lastMonth",
  LAST_3_MONTHS = "last3Months",
  LAST_YEAR = "lastYear",
  THIS_MONTH = "thisMonth",
  THIS_YEAR = "thisYear",
  ALL_TIME = "allTime",
  CUSTOM = "custom",
}

export type DateRangePreset = `${DateRangeEnum}`;