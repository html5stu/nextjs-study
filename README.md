# 紫爵酒庄 · 红酒品鉴官网 (nextjs-study)

一个基于 [Next.js](https://nextjs.org)（App Router）+ TypeScript + Tailwind CSS 打造的红酒介绍官网，深紫色为主色调、金色点缀，响应式适配桌面与移动端。

## 技术栈

- **Next.js 16**（App Router，静态预渲染）
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **next/font**（Inter + Playfair Display）

## 页面内容

- 主视觉 Hero：品牌标语 + 红酒高脚杯图
- 品牌故事：酒庄数据概览
- 酒款陈列：7 款经典红葡萄酒卡片
- 品鉴之道：观色 / 闻香 / 品味 / 回味四步
- 庄园特色：产区、陈酿、窖藏
- 联系品鉴 + 页脚

## 本地开发

```bash
npm install
npm run dev      # http://localhost:3000
```

## 生产构建

```bash
npm run build
npm run start
```

## 数据库与登录（Supabase + Prisma）

- 数据库：Supabase Postgres，通过 Prisma ORM 访问
- 模型：`User`（邮箱密码登录）、`Product`（通用商品）
- 认证：bcrypt 密码哈希 + JWT httpOnly 会话 cookie（7 天）
- 接口：`POST /api/auth/register`、`POST /api/auth/login`、`POST /api/auth/logout`、`GET /api/auth/me`、`GET /api/products`
- 页面：`/login`、`/register`、`/products`

环境变量（见 `.env.example`，本地复制为 `.env`）：
- `DATABASE_URL`：连接池连接串
- `DIRECT_URL`：迁移用连接串
- `SESSION_SECRET`：会话签名密钥

数据库命令：
```bash
npm run db:migrate    # prisma migrate deploy（部署迁移）
npm run db:seed       # 写入示例商品
npx prisma studio     # 可视化查看表
```

> 密码含特殊字符时须 URL 编码（如 `?` → `%3F`、`$` → `%24`）。

## 部署

已部署至 Vercel（https://nextjs-study-mu-red.vercel.app），由 GitHub 仓库 `html5stu/nextjs-study` 关联自动构建，push 到 main 即自动部署。
