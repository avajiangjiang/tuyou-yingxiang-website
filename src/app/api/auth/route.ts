import { NextRequest, NextResponse } from "next/server";
import {
  getAdminPassword,
  createSessionCookie,
  clearSessionCookie,
} from "@/lib/auth";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password !== getAdminPassword()) {
    return NextResponse.json({ error: "密码错误" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(createSessionCookie());
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(clearSessionCookie());
  return response;
}
