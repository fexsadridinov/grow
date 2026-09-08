import { roles, type Role } from "@/data/knowledge";
import { isValidEmail } from "@/lib/utils";

export type EarlyAccessPayload = {
  name: string;
  email: string;
  organization: string;
  role: Role;
  country?: string;
  intent?: string;
};

export type FormErrorCode =
  | "name"
  | "email"
  | "organization"
  | "role"
  | "generic";

export type EarlyAccessResult =
  | { ok: true }
  | { ok: false; error: FormErrorCode };

export function isRole(value: string): value is Role {
  return (roles as readonly string[]).includes(value);
}

export function validateEarlyAccess(
  payload: EarlyAccessPayload,
): EarlyAccessResult {
  if (payload.name.trim().length < 2) {
    return { ok: false, error: "name" };
  }
  if (!isValidEmail(payload.email)) {
    return { ok: false, error: "email" };
  }
  if (payload.organization.trim().length < 2) {
    return { ok: false, error: "organization" };
  }
  if (!isRole(payload.role)) {
    return { ok: false, error: "role" };
  }
  return { ok: true };
}

export async function submitEarlyAccess(
  payload: EarlyAccessPayload,
): Promise<EarlyAccessResult> {
  const validity = validateEarlyAccess(payload);
  if (!validity.ok) {
    return validity;
  }

  const response = await fetch("/api/early-access", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as
      | { error?: FormErrorCode }
      | null;
    return { ok: false, error: body?.error ?? "generic" };
  }

  return { ok: true };
}
