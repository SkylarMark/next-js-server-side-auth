import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

const SECRET = "SOMETHING";

export async function POST(request: Request) {
  const token = sign({ organizationId: "prayag" }, SECRET);

  const response = NextResponse.json({ token });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: true,
  });

  return response;
}
