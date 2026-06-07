import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import {
  getPortfolio,
  addPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
} from "@/lib/data";

export async function GET() {
  const data = await getPortfolio();
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未授权" }, { status: 401 });
  }

  const body = await request.json();
  const item = await addPortfolioItem(body);
  return NextResponse.json(item, { status: 201 });
}

export async function PUT(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未授权" }, { status: 401 });
  }

  const { id, ...updates } = await request.json();
  const item = await updatePortfolioItem(id, updates);
  if (!item) {
    return NextResponse.json({ error: "作品不存在" }, { status: 404 });
  }
  return NextResponse.json(item);
}

export async function DELETE(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未授权" }, { status: 401 });
  }

  const { id } = await request.json();
  const success = await deletePortfolioItem(id);
  if (!success) {
    return NextResponse.json({ error: "作品不存在" }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
