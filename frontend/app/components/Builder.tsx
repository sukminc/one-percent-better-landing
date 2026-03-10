import { Github, Linkedin, Cpu, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    label: "AI-Assisted Development",
    desc: "Designed and built end-to-end using Claude — from architecture decisions to test coverage.",
  },
  {
    icon: TrendingUp,
    label: "Real Profit Motive",
    desc: "Not a side project. Built to generate a personal edge at the table and eventually as a product.",
  },
];

export default function Builder() {
  return (
    <section className="py-32 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-mono text-[#007AFF] tracking-widest uppercase">
            The Builder
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Built with AI.{" "}
            <span className="text-[#007AFF]">Shipped for profit.</span>
          </h2>
          <p className="text-[#666] max-w-xl text-base leading-relaxed mt-4">
            This platform is a live portfolio project — using AI as a force
            multiplier to build real software, faster, with real intent to
            monetize.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Profile card */}
          <div className="border border-[#2a2a2a] rounded-lg p-8 bg-black flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full border-2 border-[#007AFF] flex items-center justify-center mb-6">
                <span className="text-[#007AFF] font-bold font-mono text-sm">SY</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">Sukmin Yoon</h3>
              <p className="text-sm text-[#666] mb-6 leading-relaxed">
                Using AI to build tools I actually want to use — and turning
                them into products worth paying for. onepercentbetter.poker is
                the first in that series.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/sukminyoon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#999] border border-[#2a2a2a] rounded-md px-4 py-2.5 hover:border-[#007AFF] hover:text-white transition-colors"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a
                href="https://github.com/sukminc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#999] border border-[#2a2a2a] rounded-md px-4 py-2.5 hover:border-[#007AFF] hover:text-white transition-colors"
              >
                <Github size={14} />
                GitHub
              </a>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="flex flex-col gap-6">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.label}
                  className="border border-[#2a2a2a] rounded-lg p-6 bg-black flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-md bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#007AFF]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">{h.label}</div>
                    <div className="text-sm text-[#666] leading-relaxed">{h.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GitHub callout */}
        <a
          href="https://github.com/sukminc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between border border-[#2a2a2a] rounded-lg px-8 py-5 hover:border-[#007AFF]/40 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <Github size={18} className="text-[#555] group-hover:text-[#007AFF] transition-colors" />
            <span className="text-sm text-[#666] group-hover:text-white transition-colors font-mono">
              github.com/sukminc — follow the build in public
            </span>
          </div>
          <span className="text-xs text-[#444] group-hover:text-[#007AFF] transition-colors font-mono">
            view →
          </span>
        </a>
      </div>
    </section>
  );
}
