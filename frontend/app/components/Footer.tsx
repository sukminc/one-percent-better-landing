import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border border-[#007AFF] flex items-center justify-center">
            <span className="text-[#007AFF] font-bold text-[10px] font-mono">1%</span>
          </div>
          <span className="text-sm text-[#555] font-mono">
            onepercentbetter.poker
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/in/sukminyoon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#444] hover:text-[#007AFF] transition-colors font-mono"
          >
            <Linkedin size={13} />
            sukminyoon
          </a>
          <a
            href="https://github.com/sukminc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#444] hover:text-[#007AFF] transition-colors font-mono"
          >
            <Github size={13} />
            sukminc
          </a>
          <p className="text-xs text-[#333] font-mono">
            GTO Defends. We Exploit. &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
