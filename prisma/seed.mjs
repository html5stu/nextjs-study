// 商品表示例数据种子脚本：node prisma/seed.mjs
import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const prisma = new PrismaClient();

const products = [
  {
    name: "赤霞珠干红 2019",
    description: "黑醋栗与雪松气息，单宁紧致，陈年潜力极佳。",
    price: 399.0,
    category: "经典干红",
    stock: 120,
    image: "/images/wine-1.jpg",
  },
  {
    name: "梅洛 2020",
    description: "丝绒般的口感，黑莓与可可的圆润余韵。",
    price: 359.0,
    category: "柔美干红",
    stock: 80,
    image: "/images/wine-2.jpg",
  },
  {
    name: "黑皮诺 2018",
    description: "红樱桃与紫罗兰花香，酒体轻盈而优雅。",
    price: 499.0,
    category: "优雅干红",
    stock: 60,
    image: "/images/wine-3.jpg",
  },
  {
    name: "珍藏特酿 2016",
    description: "酿酒师致敬之作，多重品种的平衡交响。",
    price: 899.0,
    category: "限量珍藏",
    stock: 30,
    image: "/images/wine-7.jpg",
  },
];

async function main() {
  const created = [];
  for (const p of products) {
    const existing = await prisma.product.findFirst({ where: { name: p.name } });
    if (existing) continue;
    created.push(await prisma.product.create({ data: p }));
  }
  console.log(`已写入 ${created.length} 条商品（其余已存在跳过）`);
  const count = await prisma.product.count();
  console.log(`当前商品表共 ${count} 条`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
