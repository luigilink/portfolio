import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    connectionString:
      process.env.APPLICATIONINSIGHTS_CONNECTION_STRING ?? null,
  });
}
