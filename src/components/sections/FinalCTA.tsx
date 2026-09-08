"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { brand } from "@/config/brand";
import { roles, type Role } from "@/data/knowledge";
import {
  submitEarlyAccess,
  type EarlyAccessPayload,
  type FormErrorCode,
} from "@/lib/early-access";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const emptyForm: EarlyAccessPayload = {
  name: "",
  email: "",
  organization: "",
  role: "agronomist",
  country: "",
  intent: "",
};

export function FinalCTA() {
  const t = useTranslations();
  const [form, setForm] = useState<EarlyAccessPayload>(emptyForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorCode, setErrorCode] = useState<FormErrorCode | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorCode(null);
    const result = await submitEarlyAccess(form);
    if (!result.ok) {
      setStatus("error");
      setErrorCode(result.error);
      return;
    }
    setStatus("success");
    setForm(emptyForm);
  }

  return (
    <Section id="early-access">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="tech-label text-olive">{t("finalCta.eyebrow")}</p>
          <h2 className="mt-5 max-w-[20ch] text-[2.1rem] leading-[1.12] tracking-[-0.04em] sm:text-4xl lg:text-[2.75rem]">
            {t("finalCta.title")}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-7 text-ink/70">
            {t("finalCta.body")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/#early-access-form">{t("cta.requestAccess")}</Button>
            <Button href={`mailto:${brand.contactEmail}`} variant="secondary">
              {t("cta.partner")}
            </Button>
          </div>
          <p className="mt-6 text-sm text-ink/50">
            {t("finalCta.inquiries", { email: brand.contactEmail })}
          </p>
        </div>

        <form
          id="early-access-form"
          onSubmit={onSubmit}
          className="rounded-xl border border-ink/10 bg-paper p-5 sm:p-7"
          noValidate
        >
          <Field label={t("forms.name")} htmlFor="name">
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              className={inputClass}
            />
          </Field>
          <Field label={t("forms.email")} htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({ ...current, email: event.target.value }))
              }
              className={inputClass}
            />
          </Field>
          <Field label={t("forms.organization")} htmlFor="organization">
            <input
              id="organization"
              name="organization"
              autoComplete="organization"
              required
              value={form.organization}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  organization: event.target.value,
                }))
              }
              className={inputClass}
            />
          </Field>
          <Field label={t("forms.role")} htmlFor="role">
            <select
              id="role"
              name="role"
              required
              value={form.role}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  role: event.target.value as Role,
                }))
              }
              className={inputClass}
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {t(`forms.roles.${role}`)}
                </option>
              ))}
            </select>
          </Field>
          <Field
            label={t("forms.country")}
            htmlFor="country"
            optional={t("common.optional")}
          >
            <input
              id="country"
              name="country"
              autoComplete="country-name"
              value={form.country}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  country: event.target.value,
                }))
              }
              className={inputClass}
            />
          </Field>
          <Field
            label={t("forms.intent")}
            htmlFor="intent"
            optional={t("common.optional")}
          >
            <textarea
              id="intent"
              name="intent"
              rows={4}
              value={form.intent}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  intent: event.target.value,
                }))
              }
              className={cn(inputClass, "min-h-[120px] resize-y py-3")}
            />
          </Field>

          <Button
            type="submit"
            className="mt-2 w-full"
            disabled={status === "submitting"}
          >
            {status === "submitting"
              ? t("cta.submitting")
              : t("cta.requestAccess")}
          </Button>
          {status === "success" ? (
            <p className="mt-4 text-sm text-forest" role="status">
              {t("forms.success")}
            </p>
          ) : null}
          {status === "error" && errorCode ? (
            <p className="mt-4 text-sm text-alert" role="status">
              {t(`forms.errors.${errorCode}`)}
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}

const inputClass =
  "mt-2 h-12 w-full min-w-0 rounded-md border border-ink/15 bg-canvas px-3 text-[15px] text-ink outline-none transition-colors focus:border-forest";

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <label htmlFor={htmlFor} className="text-sm text-ink/80">
        {label}
        {optional ? <span className="ml-2 text-ink/40">{optional}</span> : null}
      </label>
      {children}
    </div>
  );
}
