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

## 部署

已部署至 Vercel，由 GitHub 仓库 `html5stu/nextjs-study` 关联自动构建。
