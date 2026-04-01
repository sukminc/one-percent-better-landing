import { ExternalLink } from "lucide-react";

export default function PokerStory() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left — The problem */}
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#2d6a47]">
              The problem
            </p>
            <h2 className="mt-5 text-[2rem] font-semibold leading-[1.1] tracking-[-0.04em] text-[#111111] sm:text-[2.5rem]">
              The tools I needed<br />didn't exist.<br />So I built one.
            </h2>

            <div className="mt-8 space-y-4">
              <div className="border-t border-[#c8ddd4] pt-5">
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#2d6a47]">AI tools</p>
                <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                  Session reviews forget everything between sessions. Next time at the table — same mistakes, no memory, no growth.
                </p>
              </div>
              <div className="border-t border-[#c8ddd4] pt-5">
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#2d6a47]">Solvers</p>
                <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                  Expensive, complex, and built around optimal ranges — not around understanding your own tendencies and blind spots.
                </p>
              </div>
              <div className="border-t border-[#c8ddd4] pt-5">
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#2d6a47]">Friends</p>
                <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                  Asking for advice means sharing your edge with someone you'll play against. Information stays inside.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm leading-7 text-[#2d6a47] italic">
              &ldquo;I play seriously. I want to improve. I needed something that actually remembers me.&rdquo;
            </p>
          </div>

          {/* Right — The build */}
          <div className="flex flex-col">
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#2d6a47]">
              opb-poker
            </p>
            <h3 className="mt-5 text-[2rem] font-semibold leading-[1.1] tracking-[-0.04em] text-[#111111] sm:text-[2.5rem]">
              A backend that knows your patterns.
            </h3>

            <div className="mt-8 space-y-3 text-sm leading-7 text-[#5f5a52]">
              <p>Three-layer data architecture: raw session packets ingested and deduplicated, normalized into canonical truth, derived interpretation built on top — each layer separate, inspectable, and independently testable.</p>
              <p>Entity-centric PostgreSQL schema — player, session, tournament, hand, pattern, and intervention as first-class entities. Cumulative state across sessions, not stateless one-off review.</p>
              <p>TDD-first: output contracts defined before implementation. Pytest regression suite covers ingestion through runtime serving. Playwright E2E on the consumer surface. Operator QA review gates before anything ships.</p>
            </div>

            <p className="mt-8 border-l-2 border-[#aacfbe] pl-4 text-sm leading-7 text-[#2d6a47] italic">
              &ldquo;I started wanting to build for everyone. Then I realized: I am the audience. If I can&rsquo;t satisfy myself first, I can&rsquo;t satisfy anyone like me.&rdquo;
            </p>

            <div className="mt-10">
              <a
                href="https://onepercentbetter.poker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#1a3a2e] bg-[#1a3a2e] px-5 py-3 text-sm font-medium text-[#f2faf6] transition-colors hover:bg-[#24523a]"
              >
                onepercentbetter.poker
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
