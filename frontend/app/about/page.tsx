import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0F0F11] text-[#F7F8F8]">
      <div className="max-w-2xl mx-auto px-6 py-24">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#4B4C58] hover:text-[#8A8B97] transition-colors mb-16"
        >
          ← Back
        </Link>

        {/* Status */}
        <div className="inline-flex items-center gap-2 border border-emerald-500/20 bg-emerald-500/5 rounded-full px-3 py-1 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-400">Open to Work — Data / AI Engineering</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Chris S. Yoon</h1>
        <p className="text-[#5E5CE6] text-sm mb-10">Senior Data Engineer · AI Builder · Toronto, ON</p>

        {/* The one paragraph */}
        <div className="border-l-2 border-[#5E5CE6]/30 pl-6 mb-12">
          <p className="text-base text-[#8A8B97] leading-relaxed">
            10 years building production data systems — ETL pipelines, observability frameworks, and DQ-gated architectures
            across fintech, media, and enterprise. Most recently at TheScore / ESPN Bet, where I processed millions of
            daily betting transactions across BigQuery and Redshift and cut pipeline debugging overhead 60% with a Python
            observability layer. Now building{" "}
            <span className="text-[#F7F8F8] font-medium">onepercentbetter</span>
            {" "}— a GTO exploit engine for poker players — and{" "}
            <span className="text-[#F7F8F8] font-medium">ActionKeeper</span>
            {" "}— a tamper-evident staking agreement platform. Stack: Python · FastAPI · Airflow · BigQuery · dbt · Claude API.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://linkedin.com/in/sukminyoon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#5E5CE6] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#7B79F7] transition-colors"
          >
            Connect on LinkedIn <ArrowUpRight size={14} />
          </a>
          <a
            href="mailto:chris.yoon@outlook.com"
            className="inline-flex items-center justify-center gap-2 border border-[#232329] text-[#8A8B97] text-sm px-5 py-2.5 rounded-xl hover:border-[#36363F] hover:text-[#F7F8F8] transition-all"
          >
            chris.yoon@outlook.com
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-[#232329] text-[#8A8B97] text-sm px-5 py-2.5 rounded-xl hover:border-[#36363F] hover:text-[#F7F8F8] transition-all"
          >
            View Projects
          </Link>
        </div>

      </div>
    </main>
  );
}
