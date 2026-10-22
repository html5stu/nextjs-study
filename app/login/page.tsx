"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "登录失败");
        return;
      }
      router.push("/");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#2a1650] to-[#1a0b2e] px-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#24113f]/80 p-8 backdrop-blur"
      >
        <h1 className="font-serif text-2xl font-semibold text-[#f3ecff]">登录</h1>
        <p className="mt-1 text-sm text-[#cfc0e8]">欢迎回来，紫爵酒庄</p>

        <label className="mt-6 block text-sm text-[#cfc0e8]">邮箱</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-white/10 bg-[#1a0b2e] px-3 py-2.5 text-white outline-none focus:border-[#d4a24e]"
        />

        <label className="mt-4 block text-sm text-[#cfc0e8]">密码</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-white/10 bg-[#1a0b2e] px-3 py-2.5 text-white outline-none focus:border-[#d4a24e]"
        />

        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-gradient-to-r from-[#6d28d9] to-[#8b5cf6] py-3 font-medium text-white transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "登录中…" : "登录"}
        </button>

        <p className="mt-4 text-center text-sm text-[#cfc0e8]">
          还没有账号？{" "}
          <a href="/register" className="text-[#d4a24e] hover:underline">
            去注册
          </a>
        </p>
      </form>
    </main>
  );
}
