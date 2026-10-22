import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// 获取商品列表（公开读取）
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ products });
  } catch (e) {
    console.error("products error", e);
    return NextResponse.json({ error: "读取商品失败" }, { status: 500 });
  }
}
