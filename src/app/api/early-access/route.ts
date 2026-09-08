import {
  isRole,
  validateEarlyAccess,
  type EarlyAccessPayload,
} from "@/lib/early-access";

export async function POST(request: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "generic" }, { status: 400 });
  }

  if (!isPayload(body)) {
    return Response.json({ ok: false, error: "generic" }, { status: 400 });
  }

  const validity = validateEarlyAccess(body);
  if (!validity.ok) {
    return Response.json(validity, { status: 400 });
  }

  // Replace this with CRM, email, or database persistence.
  console.info(`[early-access] ${body.email} · ${body.role} · ${body.organization}`);

  return Response.json({ ok: true });
}

function isPayload(value: unknown): value is EarlyAccessPayload {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const record = value as Record<string, unknown>;
  return (
    typeof record.name === "string" &&
    typeof record.email === "string" &&
    typeof record.organization === "string" &&
    typeof record.role === "string" &&
    isRole(record.role)
  );
}
