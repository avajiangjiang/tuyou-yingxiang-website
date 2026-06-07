import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getPartners, addPartner, deletePartner } from "@/lib/data";

export async function GET() {
  const data = await getPartners();
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未授权" }, { status: 401 });
  }

  const body = await request.json();
  const school = await addPartner(body);
  return NextResponse.json(school, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未授权" }, { status: 401 });
  }

  const { id } = await request.json();
  const success = await deletePartner(id);
  if (!success) {
    return NextResponse.json({ error: "学校不存在" }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
