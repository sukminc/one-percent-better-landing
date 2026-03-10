"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-6">
      <div className="max-w-4xl mx-auto w-full">

        {/* Status pill */}
        <div className="inline-flex items-center gap-2 border border-[#007AFF]/30 bg-[#007AFF]/5 rounded-full px-3 py-1 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-pulse" />
          <span className="text-xs text-[#007AFF] font-mono tracking-widest uppercase">
            Active Build — onepercentbetter.poker
          </span>
        </div>

        {/* Brand headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          GTO Defends.{" "}
          <span className="text-[#007AFF]">We Exploit.</span>
        </h1>

        {/* Product description */}
        <p className="text-lg text-[#555] max-w-2xl leading-relaxed mb-4">
          Quantify opponent deviations from GTO equilibrium and turn them into
          actionable, data-driven edge. Parses GGPoker hand histories, scores
          positional tendencies, and surfaces bb/100 exploit signals — with an
          LLM agent layer in active development.
        </p>

        {/* Byline — name links to LinkedIn */}
        <p className="text-sm text-[#333] mb-12">
          Built by{" "}
          <a
            href="https://linkedin.com/in/sukminyoon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-[#007AFF] transition-colors underline underline-offset-2"
          >
            Chris S. Yoon
          </a>
          {" "}— Senior Data Engineer &amp; AI builder.
        </p>

        {/* Scroll cue */}
        <div className="flex items-center gap-2 text-[#333]">
          <ArrowDown size={14} className="animate-bounce" />
          <span className="text-xs font-mono tracking-widest uppercase">
            See the projects
          </span>
        </div>

      </div>
    </section>
  );
}
