"use client";

import { ArrowUpRight } from "lucide-react";

const BMAC_URL = "https://buymeacoffee.com/chris.yoon";
const SUPPORT_AMOUNTS = [10, 25, 50];

const TIERS = [
  {
    label: "Build",
    amount: 200,
    desc: "Early access to all tools at launch. Your name in the credits.",
    url: "https://buy.stripe.com/5kQ7sMaP496ggKe4s41wY04",
  },
  {
    label: "Accelerate",
    amount: 500,
    desc: "Above + direct feedback channel + priority feature requests.",
    url: "https://buy.stripe.com/6oU5kEaP45U451w9Mo1wY05",
  },
];

function handleFund(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function FundingCTA() {
  return (
    <section id="fund" className="py-24 px-6 border-t border-[#232329]">
      <div className="max-w-5xl mx-auto">

        <div className="mb-10">
          <p className="text-xs text-[#8A8B97] mb-3">What Gets Built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F8F8] tracking-tight">
            Fund the edge.{" "}
            <span className="text-[#4B4C58]">Shape what ships.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {/* Support + Build + Accelerate — 3 col */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {/* Support tier — BMAC */}
            <button
              onClick={() => handleFund(BMAC_URL)}
              className="flex flex-col rounded-2xl p-5 bg-[#161618] border border-[#232329] hover:border-[#36363F] transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-[#F7F8F8]">Support</span>
                <span className="text-xs text-[#4B4C58]">☕</span>
              </div>
              <p className="text-xs text-[#4B4C58] group-hover:text-[#8A8B97] transition-colors leading-relaxed mb-4">
                Buy me a coffee. Every bit compounds.
              </p>
              <div className="flex gap-1.5 mt-auto">
                {SUPPORT_AMOUNTS.map((amt) => (
                  <span
                    key={amt}
                    className="text-[10px] font-mono text-[#5E5CE6] border border-[#5E5CE6]/30 rounded-md px-1.5 py-0.5"
                  >
                    ${amt}
                  </span>
                ))}
              </div>
            </button>

            {/* Build + Accelerate */}
            {TIERS.map((tier) => (
              <button
                key={tier.label}
                onClick={() => handleFund(tier.url)}
                className="flex flex-col rounded-2xl p-5 bg-[#161618] border border-[#232329] hover:border-[#36363F] transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[#F7F8F8]">{tier.label}</span>
                  <span className="text-xs text-[#5E5CE6] font-mono">${tier.amount}</span>
                </div>
                <p className="text-xs text-[#4B4C58] group-hover:text-[#8A8B97] transition-colors leading-relaxed">
                  {tier.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Hero tier — Partner */}
          <button
            onClick={() => handleFund("https://buy.stripe.com/6oUeVe1eueqA79E7Eg1wY06")}
            className="w-full rounded-2xl border border-amber-500/40 bg-amber-500/5 hover:bg-amber-500/8 hover:border-amber-400/60 transition-all cursor-pointer px-6 py-5 text-left group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-base font-semibold text-amber-400">Partner · $3,000</span>
                  <span className="text-[10px] text-amber-500/70 border border-amber-500/30 rounded-full px-2 py-0.5 tracking-wide">
                    Advisor + Shareholder
                  </span>
                </div>
                <p className="text-sm text-[#8A8B97] leading-relaxed max-w-xl">
                  You&apos;re not a backer — you&apos;re in the cap table. Direct line to product decisions,
                  equity stake in what gets built, and your name in the product when we launch.
                </p>
                <p className="text-xs text-amber-500/60 mt-3 group-hover:text-amber-400/80 transition-colors">
                  Limited seats. One conversation before we commit. →
                </p>
              </div>
              <ArrowUpRight size={16} className="text-amber-500/40 group-hover:text-amber-400 transition-colors shrink-0 mt-1" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
