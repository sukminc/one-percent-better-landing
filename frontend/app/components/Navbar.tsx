"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-sm border-b border-[#111]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border border-[#007AFF] flex items-center justify-center">
            <span className="text-[#007AFF] font-bold text-[10px] font-mono">1%</span>
          </div>
          <span className="text-sm text-[#555] font-mono">onepercentbetter.poker</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="text-xs font-mono text-[#555] hover:text-white transition-colors tracking-widest uppercase"
          >
            Projects
          </a>
          <Link
            href="/about"
            className="text-xs font-mono text-[#555] hover:text-white transition-colors tracking-widest uppercase"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
