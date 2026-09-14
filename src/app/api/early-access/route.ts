import { NextResponse } from "next/server";

// Enquiries currently use a visitor-reviewed email draft. Do not accept or log
// personal data until a persistent, consent-aware submission service is connected.
export async function POST() {
  return NextResponse.json({ ok: false, error: "generic" }, { status: 503 });
}
