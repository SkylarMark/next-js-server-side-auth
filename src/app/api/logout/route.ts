import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = NextResponse.json({});

  response.cookies.delete("token");

  return response;
}
