import Image from "next/image";

/* ---------- 数据 ---------- */
const wines = [
  {
    img: "/images/wine-1.jpg",
    name: "赤霞珠干红",
    en: "Cabernet Sauvignon",
    region: "法国 · 波尔多",
    year: 2019,
    note: "黑醋栗与雪松气息，单宁紧致，陈年潜力极佳。",
    tag: "经典之王",
  },
  {
    img: "/images/wine-2.jpg",
    name: "梅洛",
    en: "Merlot",
    region: "意大利 · 托斯卡纳",
    year: 2020,
    note: "丝绒般的口感，黑莓与可可的圆润余韵。",
    tag: "柔美圆润",
  },
  {
    img: "/images/wine-3.jpg",
    name: "黑皮诺",
    en: "Pinot Noir",
    region: "法国 · 勃艮第",
    year: 2018,
    note: "红樱桃与紫罗兰花香，酒体轻盈而优雅。",
    tag: "细腻优雅",
  },
  {
    img: "/images/wine-4.jpg",
    name: "西拉",
    en: "Syrah",
    region: "澳大利亚 · 巴罗萨",
    year: 2019,
    note: "浓郁的黑胡椒与烟熏感，饱满而富有力量。",
    tag: "热情奔放",
  },
  {
    img: "/images/wine-5.jpg",
    name: "马尔贝克",
    en: "Malbec",
    region: "阿根廷 · 门多萨",
    year: 2020,
    note: "深邃的紫罗兰色，李子与泥土的丰厚层次。",
    tag: "醇厚浓郁",
  },
  {
    img: "/images/wine-6.jpg",
    name: "歌海娜",
    en: "Grenache",
    region: "西班牙 · 里奥哈",
    year: 2017,
    note: "红色浆果与香料，温暖阳光般的甘美。",
    tag: "阳光果香",
  },
  {
    img: "/images/wine-7.jpg",
    name: "珍藏特酿",
    en: "Reserve Blend",
    region: "智利 · 迈坡谷",
    year: 2016,
    note: "酿酒师致敬之作，多重品种的平衡交响。",
    tag: "限量珍藏",
  },
];

const steps = [
  {
    no: "01",
    title: "观色",
    desc: "倾斜酒杯，观察酒液的色泽与边缘，从紫红到砖红的渐变诉说它的年龄。",
  },
  {
    no: "02",
    title: "闻香",
    desc: "轻摇酒杯唤醒香气，捕捉果香、花香与橡木桶带来的层层气息。",
  },
  {
    no: "03",
    title: "品味",
    desc: "小口含于口中，让酒液覆盖味蕾，感受单宁、酸度与余韵的平衡。",
  },
  {
    no: "04",
    title: "回味",
    desc: "缓缓咽下，体会悠长的余味，好的红酒会留下令人难忘的尾韵。",
  },
];

const features = [
  {
    icon: "🍇",
    title: "全球精选产区",
    desc: "从波尔多到迈坡谷，足迹遍及世界各大经典葡萄酒产区。",
  },
  {
    icon: "⏳",
    title: "橡木桶陈酿",
    desc: "法式与美式橡木桶中耐心陈酿，赋予酒液圆润与复杂度。",
  },
  {
    icon: "🌡️",
    title: "恒温窖藏",
    desc: "恒温恒湿的专业酒窖，确保每一瓶酒以最佳状态抵达您的酒杯。",
  },
];

/* ---------- 页面 ---------- */
export default function Home() {
  return (
    <>
      {/* 导航栏 */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#1a0b2e]/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-serif text-2xl font-semibold tracking-wide">
            <span className="text-[#d4a24e]">◆</span> 紫爵酒庄
          </a>
          <div className="hidden items-center gap-8 text-sm text-[#cfc0e8] md:flex">
            <a href="#story" className="transition hover:text-[#d4a24e]">品牌故事</a>
            <a href="#wines" className="transition hover:text-[#d4a24e]">酒款陈列</a>
            <a href="#taste" className="transition hover:text-[#d4a24e]">品鉴之道</a>
            <a href="#features" className="transition hover:text-[#d4a24e]">庄园特色</a>
            <a href="/products" className="transition hover:text-[#d4a24e]">在售商品</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="rounded-full border border-[#d4a24e]/60 px-5 py-2 text-sm text-[#d4a24e] transition hover:bg-[#d4a24e] hover:text-[#1a0b2e]"
            >
              登录
            </a>
            <a
              href="#contact"
              className="hidden rounded-full bg-gradient-to-r from-[#6d28d9] to-[#8b5cf6] px-5 py-2 text-sm text-white transition hover:opacity-90 sm:inline-block"
            >
              联系品鉴
            </a>
          </div>
        </nav>
      </header>

      {/* 主视觉 */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(ellipse at 20% 30%, #3b1d6e 0%, #2a1650 45%, #1a0b2e 100%)",
          }}
        />
        <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-[#6d28d9]/30 blur-3xl" />
        <div className="absolute -left-24 bottom-24 h-80 w-80 rounded-full bg-[#d4a24e]/15 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pt-24 pb-16 md:grid-cols-2">
          <div>
            <p className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#d4a24e]">
              <span className="h-px w-10 bg-[#d4a24e]" /> Est. 1986
            </p>
            <h1 className="font-serif text-5xl leading-tight font-semibold md:text-6xl">
              一杯红酒
              <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-[#d4a24e] via-[#e8c586] to-[#b98a3a]">
                一段时光
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-[#cfc0e8]">
              紫爵酒庄邀您踏上红葡萄酒的品鉴之旅。从葡萄园的第一缕阳光，
              到杯中那一抹深邃的紫红，每一滴都承载着风土与匠心的故事。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#wines"
                className="rounded-full bg-gradient-to-r from-[#6d28d9] to-[#8b5cf6] px-8 py-3.5 font-medium text-white shadow-lg shadow-[#6d28d9]/30 transition hover:opacity-90"
              >
                浏览酒款
              </a>
              <a
                href="#story"
                className="rounded-full border border-white/20 px-8 py-3.5 text-[#e6dcff] transition hover:border-[#d4a24e] hover:text-[#d4a24e]"
              >
                了解我们
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-72 md:w-[26rem]">
            <div className="absolute inset-0 -rotate-6 rounded-full bg-gradient-to-br from-[#6d28d9]/50 to-[#d4a24e]/30 blur-2xl" />
            <div className="relative rotate-3 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src="/images/hero-wine.jpg"
                alt="紫爵酒庄经典红葡萄酒"
                width={600}
                height={876}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-8 rounded-2xl border border-white/10 bg-[#24113f]/90 px-6 py-4 backdrop-blur">
              <p className="font-serif text-3xl font-semibold text-[#e8c586]">30+</p>
              <p className="text-sm text-[#cfc0e8]">年酿造传承</p>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌故事 */}
      <section id="story" className="relative py-24">
        <div className="gold-underline mb-20 mx-auto w-2/3 max-w-4xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl font-semibold leading-tight">
              从葡萄园
              <span className="block text-[#d4a24e]">到你的酒杯</span>
            </h2>
            <div className="gold-underline mt-6 w-24" />
            <p className="mt-6 leading-8 text-[#cfc0e8]">
              紫爵酒庄创立于 1986 年，扎根于全球海拔最高的葡萄园之一。我们相信，
              最好的红酒源于对自然的敬畏与对时间的耐心。
            </p>
            <p className="mt-4 leading-8 text-[#cfc0e8]">
              每一粒葡萄都在清晨的雾气与午后的阳光中慢慢成熟，经过手工采摘、
              温和压榨与多年橡木桶陈酿，最终凝练为杯中那一抹深邃的紫红。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "120", unit: "公顷", label: "自有葡萄园" },
              { num: "7", unit: "款", label: "经典酒款" },
              { num: "18", unit: "个月", label: "橡木桶陈酿" },
              { num: "60+", unit: "国", label: "畅销全球" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#2a1650]/80 to-[#1a0b2e] p-6 transition hover:border-[#d4a24e]/40"
              >
                <p className="font-serif text-4xl font-semibold text-[#e8c586]">
                  {s.num}
                  <span className="ml-1 text-lg text-[#cfc0e8]">{s.unit}</span>
                </p>
                <p className="mt-2 text-[#cfc0e8]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 酒款陈列 */}
      <section id="wines" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d4a24e]">
              The Collection
            </p>
            <h2 className="font-serif text-4xl font-semibold">我们的酒款</h2>
            <div className="gold-underline mx-auto mt-6 w-24" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {wines.map((w) => (
              <div
                key={w.name}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#2a1650]/70 to-[#1a0b2e] transition hover:-translate-y-1 hover:border-[#d4a24e]/40 hover:shadow-xl hover:shadow-black/40"
              >
                <div className="relative aspect-square overflow-hidden bg-black/20">
                  <Image
                    src={w.img}
                    alt={w.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#1a0b2e]/80 px-3 py-1 text-xs text-[#e8c586] backdrop-blur">
                    {w.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-xl font-semibold">{w.name}</h3>
                    <span className="text-sm text-[#d4a24e]">{w.year}</span>
                  </div>
                  <p className="mt-0.5 text-sm italic text-[#9d8bc0]">{w.en}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#cfc0e8]">
                    {w.region}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#cfc0e8]">{w.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 品鉴之道 */}
      <section id="taste" className="relative py-24">
        <div className="absolute inset-0 bg-[#150823]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d4a24e]">
              How to Taste
            </p>
            <h2 className="font-serif text-4xl font-semibold">品鉴之道</h2>
            <div className="gold-underline mx-auto mt-6 w-24" />
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.no}
                className="relative rounded-2xl border border-white/10 bg-[#1e0f36] p-6 transition hover:border-[#d4a24e]/40"
              >
                <span className="font-serif text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#6d28d9] to-[#d4a24e]">
                  {s.no}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#cfc0e8]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 庄园特色 */}
      <section id="features" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d4a24e]">
              Our Craft
            </p>
            <h2 className="font-serif text-4xl font-semibold">庄园特色</h2>
            <div className="gold-underline mx-auto mt-6 w-24" />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#2a1650]/70 to-[#1a0b2e] p-8 text-center transition hover:border-[#d4a24e]/40"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6d28d9]/25 text-3xl">
                  {f.icon}
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold">{f.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#cfc0e8]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系品鉴 */}
      <section id="contact" className="relative py-24">
        <div className="gold-underline mx-auto mb-16 w-2/3 max-w-4xl" />
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-[#3b1d6e]/80 to-[#1a0b2e] px-8 py-14 text-center">
          <h2 className="font-serif text-4xl font-semibold">
            预约一场<span className="text-[#d4a24e]">紫爵品鉴</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#cfc0e8]">
            无论是私人晚宴、商务宴请，还是单纯想为今晚选一瓶好酒，
            我们的品酒师都乐于为您服务。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@zijue-wine.com"
              className="rounded-full bg-gradient-to-r from-[#6d28d9] to-[#8b5cf6] px-8 py-3.5 font-medium text-white shadow-lg shadow-[#6d28d9]/30 transition hover:opacity-90"
            >
              发送邮件
            </a>
            <a
              href="#"
              className="rounded-full border border-white/20 px-8 py-3.5 text-[#e6dcff] transition hover:border-[#d4a24e] hover:text-[#d4a24e]"
            >
              电话 400-888-1986
            </a>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-white/10 bg-[#150823] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="flex items-center gap-2 font-serif text-lg font-semibold">
            <span className="text-[#d4a24e]">◆</span> 紫爵酒庄
          </p>
          <p className="text-sm text-[#9d8bc0]">
            © 2026 紫爵酒庄 · 用心酿造每一滴优雅
          </p>
          <p className="text-sm text-[#9d8bc0]">饮酒需适量 · 孕妇与未成年人不宜饮酒</p>
        </div>
      </footer>
    </>
  );
}
