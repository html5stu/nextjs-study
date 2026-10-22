import Image from "next/image";
import { connection } from "next/server";
import { prisma } from "@/lib/prisma";

export const instant = false; // 阻塞式动态路由（实时读数据库）

export default async function ProductsPage() {
  await connection(); // 按请求动态渲染（读取数据库，不做静态预渲染）

  const products = await prisma.product.findMany({
    orderBy: { createdAt: "asc" },
  });

  return (
    <main className="min-h-screen bg-[#1a0b2e]">
      {/* 顶部导航 */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#1a0b2e]/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 font-serif text-2xl font-semibold">
            <span className="text-[#d4a24e]">◆</span> 紫爵酒庄
          </a>
          <a
            href="/login"
            className="rounded-full border border-[#d4a24e]/60 px-5 py-2 text-sm text-[#d4a24e] transition hover:bg-[#d4a24e] hover:text-[#1a0b2e]"
          >
            登录 / 注册
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-28 pb-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d4a24e]">
            Products · 来自数据库
          </p>
          <h1 className="font-serif text-4xl font-semibold">在售商品</h1>
          <p className="mt-3 text-sm text-[#cfc0e8]">
            以下数据从 Supabase 数据库实时读取（Prisma）
          </p>
        </div>

        {products.length === 0 ? (
          <p className="text-center text-[#cfc0e8]">暂无商品</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div
                key={p.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#2a1650]/70 to-[#1a0b2e]"
              >
                {p.image && (
                  <div className="relative aspect-square overflow-hidden bg-black/20">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-5">
                  <span className="text-xs uppercase tracking-wider text-[#9d8bc0]">
                    {p.category}
                  </span>
                  <h2 className="mt-1 font-serif text-lg font-semibold">{p.name}</h2>
                  <p className="mt-1 line-clamp-2 text-sm text-[#cfc0e8]">
                    {p.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-semibold text-[#d4a24e]">
                      ¥{Number(p.price).toFixed(2)}
                    </span>
                    <span className="text-xs text-[#9d8bc0]">库存 {p.stock}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
