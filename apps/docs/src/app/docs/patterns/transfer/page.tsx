"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  RefreshCw,
  X,
} from "lucide-react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  IconButton,
  Input,
  Select,
  type SelectOption,
  Separator,
  Switch,
} from "@moody-ds/ui";

type Step = "form" | "review" | "success";

type Account = {
  value: string;
  label: string;
  description: string;
  holder: string;
};

const accounts: Account[] = [
  {
    value: "checking",
    label: "Checking ··2502",
    description: "$987.85",
    holder: "Moody's",
  },
  {
    value: "savings",
    label: "Savings ··5679",
    description: "$1,000.00",
    holder: "Moody's",
  },
  {
    value: "usd",
    label: "USD account ··3001",
    description: "Business Checking — Wise",
    holder: "Moody's",
  },
];

const toSelectOptions = (list: Account[]): SelectOption[] =>
  list.map((a) => ({
    value: a.value,
    label: a.label,
    description: a.description,
    leading: <Avatar alt={a.label} size="sm" />,
  }));

export default function TransferFlowPage() {
  const [step, setStep] = useState<Step>("form");
  const [amount, setAmount] = useState("");
  const [fromId, setFromId] = useState<string | undefined>();
  const [toId, setToId] = useState<string | undefined>();
  const [details, setDetails] = useState(false);

  const from = accounts.find((a) => a.value === fromId);
  const to = accounts.find((a) => a.value === toId);

  const numericAmount = Number.parseFloat(amount);
  const canProceed =
    Number.isFinite(numericAmount) &&
    numericAmount > 0 &&
    !!from &&
    !!to &&
    from.value !== to.value;

  const reset = () => {
    setStep("form");
    setAmount("");
    setFromId(undefined);
    setToId(undefined);
    setDetails(false);
  };

  return (
    <div className="space-y-4">
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Patterns</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Transfer flow
        </h1>
        <p className="text-lg text-muted-foreground">
          A money-transfer flow composed entirely from design-system primitives.
          Toggle the theme at the top-right to verify every screen reads
          correctly in both light and dark.
        </p>
      </header>

      <div
        className={
          step === "success"
            ? "relative rounded-xl border border-border bg-muted p-8"
            : "relative rounded-xl border border-border bg-background p-8"
        }
      >
        {step !== "success" && (
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              {step === "form" ? "Transfer funds" : "Review transfer"}
            </h2>
            <IconButton aria-label="Close" onClick={reset}>
              <X />
            </IconButton>
          </div>
        )}

        {step === "form" && (
          <FormStep
            amount={amount}
            setAmount={setAmount}
            fromId={fromId}
            setFromId={setFromId}
            toId={toId}
            setToId={setToId}
            details={details}
            setDetails={setDetails}
            canProceed={canProceed}
            onNext={() => setStep("review")}
          />
        )}

        {step === "review" && from && to && (
          <ReviewStep
            amount={numericAmount}
            from={from}
            to={to}
            onBack={() => setStep("form")}
            onConfirm={() => setStep("success")}
          />
        )}

        {step === "success" && from && to && (
          <SuccessStep
            amount={numericAmount}
            from={from}
            to={to}
            onAgain={reset}
          />
        )}

        <div className="pointer-events-none absolute bottom-6 right-6">
          <IconButton
            aria-label="Help"
            variant="secondary"
            className="pointer-events-auto rounded-full"
          >
            <HelpCircle />
          </IconButton>
        </div>
      </div>

      <Card interactive>
        <CardBody className="flex items-center justify-between">
          <span className="flex items-center gap-3 text-sm font-medium text-foreground">
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <RefreshCw className="size-4" aria-hidden="true" />
            </span>
            Auto transfer rule
          </span>
          <ChevronRight
            className="size-4 text-muted-foreground"
            aria-hidden="true"
          />
        </CardBody>
      </Card>
    </div>
  );
}

function FormStep({
  amount,
  setAmount,
  fromId,
  setFromId,
  toId,
  setToId,
  details,
  setDetails,
  canProceed,
  onNext,
}: {
  amount: string;
  setAmount: (v: string) => void;
  fromId: string | undefined;
  setFromId: (v: string) => void;
  toId: string | undefined;
  setToId: (v: string) => void;
  details: boolean;
  setDetails: (v: boolean) => void;
  canProceed: boolean;
  onNext: () => void;
}) {
  const toOptions = toSelectOptions(
    accounts.filter((a) => a.value !== fromId),
  );
  const fromOptions = toSelectOptions(
    accounts.filter((a) => a.value !== toId),
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>One-time transfer</CardTitle>
      </CardHeader>
      <CardBody className="space-y-5">
        <Field id="amount" label="Amount">
          <Input
            id="amount"
            leading="$"
            placeholder="0.00"
            inputMode="decimal"
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(e.target.value)
            }
          />
        </Field>

        <Field id="from" label="Transfer from">
          <Select
            id="from"
            options={fromOptions}
            value={fromId}
            onValueChange={setFromId}
            placeholder="Select an account"
            aria-label="Transfer from"
          />
        </Field>

        <Field
          id="to"
          label="Transfer to"
          hint={
            fromId && toId
              ? "The money should arrive within minutes"
              : undefined
          }
        >
          <Select
            id="to"
            options={toOptions}
            value={toId}
            onValueChange={setToId}
            placeholder="Select an account"
            aria-label="Transfer to"
          />
        </Field>

        <label className="flex items-center gap-2 text-sm text-foreground">
          <Switch
            checked={details}
            onCheckedChange={setDetails}
            aria-label="Add more details"
          />
          <span>Add more details</span>
        </label>
      </CardBody>
      <CardFooter className="justify-end gap-2">
        <Button variant="secondary" disabled>
          Back
        </Button>
        <Button disabled={!canProceed} onClick={onNext}>
          Next
          <ChevronRight className="ml-1 size-4" aria-hidden="true" />
        </Button>
      </CardFooter>
    </Card>
  );
}

function ReviewStep({
  amount,
  from,
  to,
  onBack,
  onConfirm,
}: {
  amount: number;
  from: Account;
  to: Account;
  onBack: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <p className="text-sm text-muted-foreground">
          Transfer from{" "}
          <span className="font-medium text-foreground">{from.label}</span> to{" "}
          <span className="font-medium text-foreground">{to.label}</span>
        </p>
        <p className="text-5xl font-semibold tracking-tight text-foreground">
          {formatCurrency(amount)}
        </p>
        <p className="text-sm text-muted-foreground">
          This transfer will initiate today.
        </p>
      </div>

      <Separator />

      <dl className="grid grid-cols-[120px_1fr] gap-x-6 gap-y-5 text-sm">
        <dt className="text-muted-foreground">From</dt>
        <dd className="space-y-0.5">
          <div className="font-medium text-foreground">{from.holder}</div>
          <div className="text-muted-foreground">{from.label}</div>
        </dd>
        <dt className="text-muted-foreground">To</dt>
        <dd className="space-y-0.5">
          <div className="font-medium text-foreground">{to.holder}</div>
          <div className="text-muted-foreground">{to.label}</div>
        </dd>
      </dl>

      <div className="flex items-center justify-center gap-2">
        <Button variant="secondary" onClick={onBack}>
          <ChevronLeft className="mr-1 size-4" aria-hidden="true" />
          Back
        </Button>
        <Button onClick={onConfirm}>Transfer</Button>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        By clicking &ldquo;Transfer,&rdquo; I authorize Moody&apos;s to initiate
        the transaction detailed above.
      </p>
    </div>
  );
}

function SuccessStep({
  amount,
  from,
  to,
  onAgain,
}: {
  amount: number;
  from: Account;
  to: Account;
  onAgain: () => void;
}) {
  return (
    <div className="space-y-8 py-8 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          Your transfer is on the way
        </h2>
        <p className="text-sm text-muted-foreground">
          The money should arrive within minutes.
        </p>
      </div>

      <Card className="mx-auto max-w-md">
        <CardBody className="space-y-1 text-left">
          <p className="text-xs text-muted-foreground">
            Transfer from{" "}
            <span className="font-medium text-foreground">{from.label}</span> to{" "}
            <span className="font-medium text-foreground">{to.label}</span>
          </p>
          <p className="text-3xl font-semibold tracking-tight text-foreground">
            {formatCurrency(amount)}
          </p>
        </CardBody>
      </Card>

      <div className="flex items-center justify-center gap-3">
        <Button variant="secondary" onClick={onAgain}>
          Make Another Transfer
        </Button>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  hint,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

function formatCurrency(n: number) {
  if (!Number.isFinite(n)) return "$0.00";
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
