"use client";

import { motion } from "framer-motion";
import { Database, Code2, Cloud, Brain, Eye, Layers } from "lucide-react";

const skillGroups = [
  {
    icon: Database,
    label: "Data Engineering",
    sub: "Airflow · BigQuery · Redshift",
    items: [
      { name: "Apache Airflow",           proof: "DAGs, Sensors, XComs — 15+ prod pipelines" },
      { name: "ETL/ELT Pipeline Design",  proof: "Fail-fast DQ gates, self-validating" },
      { name: "Data Lakehouse",           proof: "Star schema, medallion architecture" },
      { name: "Data Observability",       proof: "Volume anomaly detection, alerting" },
      { name: "Schema Drift Handling",    proof: "Automated detection, pipeline contracts" },
    ],
  },
  {
    icon: Code2,
    label: "Languages & Libraries",
    sub: "Python · SQL · TypeScript",
    items: [
      { name: "Python",       proof: "Pandas, NumPy, SQLAlchemy, FastAPI, Pydantic, Pytest" },
      { name: "SQL",          proof: "Window functions, CTEs, regex validation" },
      { name: "TypeScript",   proof: "Strict mode, React/Next.js, generics" },
      { name: "FastAPI",      proof: "REST API design, dependency injection" },
      { name: "Pytest",       proof: "Unit, integration, regression suites" },
    ],
  },
  {
    icon: Cloud,
    label: "Cloud & Infrastructure",
    sub: "GCP · AWS · Docker",
    items: [
      { name: "GCP (BigQuery, GCS)",      proof: "Production pipelines, legacy migration" },
      { name: "AWS (S3, Redshift, Glue)", proof: "Nightly ingestion, transformation" },
      { name: "PostgreSQL / SQLite",      proof: "Schema design, Alembic migrations" },
      { name: "Docker",                   proof: "Containerized services, Compose stacks" },
      { name: "GitHub Actions / Jenkins", proof: "CI/CD, regression DAG validation" },
    ],
  },
  {
    icon: Brain,
    label: "AI / Agentic Systems",
    sub: "Claude API · LangChain · OpenAI SDK",
    items: [
      { name: "Agentic Orchestration",    proof: "Claude API, OpenAI Agent SDK — active builds" },
      { name: "LLM Pipeline Integration", proof: "Deviation signals → AI recommendation loops" },
      { name: "REST API Orchestration",   proof: "Service-layer design for agentic workflows" },
      { name: "LangChain",               proof: "Actively studying & building" },
    ],
  },
  {
    icon: Eye,
    label: "Observability & Tools",
    sub: "DataDog · Pydantic · Stripe",
    items: [
      { name: "DataDog",               proof: "Pipeline monitoring, alerting dashboards" },
      { name: "Pydantic Contracts",    proof: "Enforce schema at pipeline boundaries" },
      { name: "Alembic Migrations",    proof: "Version-controlled DB schema evolution" },
      { name: "Git",                   proof: "Trunk-based dev, PR-gated CI" },
      { name: "Stripe API",            proof: "Payment flows in ActionKeeper" },
    ],
  },
  {
    icon: Layers,
    label: "Frontend",
    sub: "Next.js · Tailwind · Framer Motion",
    items: [
      { name: "React / Next.js",   proof: "App Router, SSR/SSG, dynamic routing" },
      { name: "Tailwind CSS",      proof: "v4, dark themes, bento grid layouts" },
      { name: "Framer Motion",     proof: "3D flips, layout animations, gestures" },
      { name: "TypeScript",        proof: "Strict mode, generics, discriminated unions" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.06 } },
};

function SkillRow({ name, proof }: { name: string; proof: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-start justify-between gap-4 py-2.5 border-b border-[#111] last:border-0 group"
    >
      <span className="text-xs font-mono text-white group-hover:text-[#007AFF] transition-colors shrink-0">
        {name}
      </span>
      <span className="text-[10px] text-[#444] text-right leading-relaxed max-w-[160px]">
        {proof}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-4xl mx-auto">

        <div className="mb-12">
          <span className="text-xs font-mono text-[#007AFF] tracking-widest uppercase">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight text-white">
            Production-grade by default.{" "}
            <span className="text-[#333]">Full-stack by choice.</span>
          </h2>
          <p className="text-[#444] mt-3 text-sm max-w-xl">
            10+ years across data engineering, QA automation, and AI systems — now building the full stack end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.label}
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="border border-[#1a1a1a] rounded-xl p-5 bg-black hover:border-[#2a2a2a] transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-md bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#007AFF]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white font-mono">{group.label}</p>
                    <p className="text-[10px] text-[#444]">{group.sub}</p>
                  </div>
                </div>
                {group.items.map((s) => (
                  <SkillRow key={s.name} name={s.name} proof={s.proof} />
                ))}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
