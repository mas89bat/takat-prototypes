import { useState, useEffect } from "react";

export default function TakatBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-4 right-4 z-40">
      <a
        href="https://www.takat.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-navy text-xs font-medium px-3 py-1.5 rounded-full shadow-lg border border-border/50 hover:bg-white transition-all duration-300"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
        Powered by takat.ai
      </a>
    </div>
  );
}
