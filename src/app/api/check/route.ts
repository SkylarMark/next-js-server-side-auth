import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ CODE: "TOKEN_EXPIRED" }, { status: 401 });
}
