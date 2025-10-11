import { Separator } from "@/components/ui/separator"

const Billing = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Billing</h3>
        <p className="text-sm text-muted-foreground">
          Manage your subscription and billing information
        </p>
      </div>
      <Separator />

      <div className="w-full">
        {/* Current Plan */}
        {/* Upgrade Options */}
        <div className="mt-0">
          <h1 className="text-lg font-medium mb-2">Support Us</h1>

          <p className="text-base mb-2">
            By supporting us, you’ll unlock premium billing features including:
          </p>

          <ul className="list-disc pl-5 text-base mb-2">
            <li>
              <strong>
                Free Plan: Track income and expenses with all essential tools.
              </strong>
            </li>
            <li>
              <strong>
                Monthly Plan: Unlock premium analytics and priority support for
                just a small fee.
              </strong>
            </li>
            <li>
              <strong>
                Yearly Plan: Save more with discounted yearly pricing and all
                premium benefits included.
              </strong>
            </li>
          </ul>

          <p className="text-base mb-2">
            You can upgrade, switch, or cancel anytime directly from your
            account settings.
          </p>

          <p className="text-base mb-2">
            Your support helps us keep building free, high-quality product for
            the community.
          </p>
          
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Billing
