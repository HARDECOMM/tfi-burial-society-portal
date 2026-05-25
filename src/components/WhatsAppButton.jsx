import React from 'react';

/**
 * Reusable floating WhatsApp chat widget.
 * Styled with traditional WhatsApp colors, smooth hover animations,
 * and high accessibility.
 */
export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/0000000000';

  return (
    <div className="fixed bottom-6 right-6 z-50 print:hidden" id="floating-whatsapp-widget">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-emerald-500/20 hover:bg-[#20ba56] transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-400 focus:ring-offset-2 relative border border-emerald-400/25"
        aria-label="Chat with us on WhatsApp"
        id="btn-floating-whatsapp-link"
      >
        {/* Glowing surrounding wave pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping opacity-75 -z-10 group-hover:animate-none group-hover:opacity-0 transition-opacity pointer-events-none"></span>
        
        {/* Smooth pulsing border */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-pulse -z-10 pointer-events-none"></span>

        {/* Clean Vector WhatsApp logo (inline SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 filter drop-shadow-sm"
          aria-hidden="true"
        >
          <path d="M12.012 2c-5.506 0-9.97 4.463-9.97 9.969 0 1.933.551 3.737 1.503 5.275L2 22l4.908-1.288c1.47.8 3.14 1.258 4.912 1.258 5.506 0 10-4.463 10-9.969s-4.494-9.969-10-9.969zm0 1.594c4.613 0 8.356 3.743 8.356 8.375s-3.743 8.375-8.356 8.375c-1.637 0-3.15-.472-4.428-1.281l-.319-.203-2.922.766.781-2.844-.222-.353a8.312 8.312 0 0 1-1.29-4.459c0-4.632 3.743-8.375 8.356-8.375zm-3.66 4.394c-.162 0-.325.044-.456.125-.131.081-.253.206-.328.344-.144.269-.453.984-.453 1.906s.672 1.838.766 1.969c.094.131 1.3 1.987 3.166 2.794.444.194.791.309 1.059.394.453.144.866.122 1.194.075.366-.053 1.125-.459 1.284-.906.159-.447.159-.831.113-.913-.047-.081-.172-.125-.366-.225-.194-.1-.144-.075-1.125-.559-.112-.056-.194-.084-.278.044-.084.128-.328.412-.403.5-.075.088-.15.1-.344 0a4.346 4.346 0 0 1-1.281-.791 4.796 4.796 0 0 1-.888-1.1c-.113-.194-.012-.3.088-.397.088-.088.194-.225.29-.338.094-.112.125-.194.188-.325.062-.131.031-.25-.013-.35-.044-.1-.403-.975-.553-1.334-.147-.356-.297-.306-.406-.312z" />
        </svg>

        {/* Hover label tooltip banner */}
        <span className="absolute right-16 scale-90 translate-x-2 bg-slate-900 border border-slate-800 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-xl shadow-2xl opacity-0 group-hover:scale-100 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
          WhatsApp Live Chat
        </span>
      </a>
    </div>
  );
}
