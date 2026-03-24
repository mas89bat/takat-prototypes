import { Phone, Calendar } from "lucide-react";

interface TakatStripProps {
  whatsappNumber?: string;
  calendlyUrl?: string;
}

export default function TakatStrip({ whatsappNumber, calendlyUrl }: TakatStripProps) {
  return (
    <div className="bg-navy border-t border-white/10 py-3">
      <div className="container flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <span className="text-white/40 text-xs" style={{ fontFamily: "var(--font-body)" }}>
          Get in touch:
        </span>
        {whatsappNumber && (
          <a
            href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-[#25D366] text-xs transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Phone size={14} />
            WhatsApp
          </a>
        )}
        {calendlyUrl && (
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-teal text-xs transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Calendar size={14} />
            Book a Call
          </a>
        )}
      </div>
    </div>
  );
}
