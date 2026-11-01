"use client";

import { useState } from "react";
import {
  Sparkles, Wand2, Download, ShoppingBag, Image as ImageIcon,
  Palette, Star, ArrowRight, Layers, ShieldCheck, Zap
} from "lucide-react";

const styles = [
  { name: "Cartoon", icon: "🎨", description: "Bold illustrated characters" },
  { name: "Kawaii", icon: "🌸", description: "Cute and colorful designs" },
  { name: "3D", icon: "🧊", description: "Glossy dimensional art" },
  { name: "Minimal", icon: "◈", description: "Clean modern artwork" },
  { name: "Vintage", icon: "🪩", description: "Retro-inspired stickers" },
  { name: "Anime", icon: "✨", description: "Expressive anime artwork" }
];

const examples = [
  { emoji: "🐸", name: "Cool Frog", tag: "Cartoon", color: "from-emerald-500/20 to-green-900/40" },
  { emoji: "🍓", name: "Sweet Strawberry", tag: "Kawaii", color: "from-pink-500/20 to-red-900/40" },
  { emoji: "🚀", name: "Space Explorer", tag: "3D", color: "from-blue-500/20 to-indigo-900/40" },
  { emoji: "🍄", name: "Forest Mushroom", tag: "Vintage", color: "from-orange-500/20 to-amber-900/40" }
];

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Cartoon");
  const [activeTab, setActiveTab] = useState("Create");
  const [notice, setNotice] = useState("");

  function generate() {
    if (!prompt.trim()) {
      setNotice("Describe the sticker you want to create first.");
      return;
    }
    setNotice("Your prompt is ready. AI image generation will be connected in the next setup step.");
  }

  return (
    <main className="min-h-screen bg-[#09090f] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#09090f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-xl shadow-lg shadow-violet-500/20">✦</div>
            <div>
              <div className="text-lg font-black tracking-tight">STICKER<span className="text-violet-400">-101</span></div>
              <div className="text-[10px] font-semibold uppercase tracking-[.22em] text-gray-500">Your creative sticker studio</div>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-gray-400 md:flex">
            {["Create", "Explore", "My Stickers", "Order Prints"].map((item) => (
              <button key={item} onClick={() => { setActiveTab(item); setNotice(item + " section is coming soon."); }} className={`transition hover:text-white ${activeTab === item ? "text-white" : ""}`}>{item}</button>
            ))}
          </nav>
          <button onClick={() => setNotice("Account registration and sign-in are coming next.")} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold transition hover:border-violet-400 hover:bg-violet-500/10">Sign in</button>
        </div>
      </header>

      <section className="relative overflow-hidden px-5 pb-16 pt-20 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-2 text-xs font-bold tracking-wide text-violet-200">
            <Sparkles size={14} /> YOUR IDEAS. YOUR STICKERS.
          </div>
          <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-7xl">
            Make something<br /><span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">sticker-worthy.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            Turn your imagination into custom sticker art. Create a design, save your favorites, and get ready to make it real.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 lg:grid-cols-[1.05fr_.95fr]">
        <div className="rounded-3xl border border-white/10 bg-[#11111b] p-6 shadow-2xl shadow-black/20 sm:p-8">
          <div className="mb-7 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold"><Wand2 className="text-violet-400" size={21} /> Create your sticker</div>
              <p className="mt-1 text-sm text-gray-500">Start with a description and choose a style.</p>
            </div>
            <span className="rounded-lg bg-violet-500/10 px-3 py-1.5 text-xs font-bold text-violet-300">AI STUDIO</span>
          </div>

          <label className="mb-3 block text-sm font-semibold text-gray-300">Describe your idea</label>
          <textarea value={prompt} onChange={(e) => { setPrompt(e.target.value); setNotice(""); }} placeholder="Example: A happy little ghost drinking coffee, wearing purple sneakers, bold white outline..." className="min-h-32 w-full resize-y rounded-2xl border border-white/10 bg-[#09090f] p-4 text-sm leading-6 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-400" />
          <div className="mt-2 text-right text-xs text-gray-600">{prompt.length}/500</div>

          <div className="mb-3 mt-7 text-sm font-semibold text-gray-300">Choose your style</div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {styles.map((item) => (
              <button key={item.name} onClick={() => setStyle(item.name)} className={`rounded-2xl border p-3 text-left transition ${style === item.name ? "border-violet-400 bg-violet-500/10 ring-1 ring-violet-400/30" : "border-white/10 bg-[#09090f] hover:border-white/25"}`}>
                <div className="text-2xl">{item.icon}</div>
                <div className="mt-2 text-sm font-bold">{item.name}</div>
                <div className="mt-1 text-[11px] text-gray-500">{item.description}</div>
              </button>
            ))}
          </div>

          <button onClick={generate} className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 font-bold shadow-lg shadow-violet-900/30 transition hover:brightness-110 active:scale-[.99]">
            <Sparkles size={18} /> Generate my sticker
          </button>
          {notice && <p role="status" className="mt-4 rounded-xl border border-violet-400/20 bg-violet-500/10 p-3 text-sm text-violet-200">{notice}</p>}
          <p className="mt-4 text-center text-xs text-gray-600">AI generation will be activated after the image service is connected.</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative flex min-h-[390px] flex-1 flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#11111b] p-8">
            <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#a78bfa 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
            <div className="relative flex h-56 w-56 items-center justify-center rounded-[2.5rem] border border-dashed border-violet-400/30 bg-violet-500/5">
              <div className="text-center">
                <div className="text-7xl">✦</div>
                <div className="mt-3 text-sm font-semibold text-gray-300">Your next creation</div>
                <div className="mt-1 text-xs text-gray-600">Preview appears here</div>
              </div>
            </div>
            <div className="relative mt-8 text-center">
              <div className="font-bold">Ready when you are</div>
              <p className="mt-1 text-sm text-gray-500">Your sticker canvas is waiting.</p>
            </div>
            <div className="relative mt-6 flex gap-3">
              <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-gray-400"><Download size={13} /> PNG export</span>
              <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-gray-400"><Layers size={13} /> Transparent</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[{ icon: ShieldCheck, title: "Your designs", sub: "Private library" }, { icon: Zap, title: "High quality", sub: "Print-ready goal" }, { icon: ShoppingBag, title: "Real stickers", sub: "Print ordering" }].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-[#11111b] p-3 text-center">
                <item.icon className="mx-auto text-violet-400" size={19} />
                <div className="mt-2 text-xs font-bold">{item.title}</div>
                <div className="mt-1 text-[10px] text-gray-500">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d15] px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-violet-400"><Palette size={16} /> Get inspired</div>
              <h2 className="mt-3 text-3xl font-black">Sticker inspiration</h2>
              <p className="mt-2 text-sm text-gray-500">A few ideas to get your creativity rolling.</p>
            </div>
            <button onClick={() => setNotice("Explore gallery is coming soon.")} className="flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white">Explore gallery <ArrowRight size={16} /></button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {examples.map((item) => (
              <div key={item.name} className={`rounded-3xl border border-white/10 bg-gradient-to-br ${item.color} p-5 transition hover:-translate-y-1 hover:border-violet-400/40`}>
                <div className="flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-7xl">{item.emoji}</div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <div className="font-bold">{item.name}</div>
                  <Star size={14} className="shrink-0 text-violet-300" />
                </div>
                <div className="mt-1 text-xs text-gray-400">{item.tag} style</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-gray-500 sm:flex-row">
          <div><span className="font-black text-white">STICKER<span className="text-violet-400">-101</span></span><p className="mt-2 text-xs">Make your imagination stick.</p></div>
          <div className="flex flex-wrap gap-5"><button onClick={() => setNotice("Terms & Conditions page is coming soon.")}>Terms & Conditions</button><button onClick={() => setNotice("Privacy Policy page is coming soon.")}>Privacy</button><span>© 2026 Sticker-101</span></div>
        </div>
        {notice && <p className="mx-auto mt-5 max-w-7xl text-xs text-violet-300" role="status">{notice}</p>}
      </footer>
    </main>
  );
}
