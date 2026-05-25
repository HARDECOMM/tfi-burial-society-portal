import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  CheckCircle, 
  MessageCircle, 
  Clock 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppRedirect = () => {
    const textMsg = "Hello TFI Burial Society, I would like to get more information about your funeral cover and family protection plans.";
    const encodedText = encodeURIComponent(textMsg);
    window.open(`https://wa.me/27110000000?text=${encodedText}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <footer className="bg-brand-blue-dark text-slate-300 border-t border-slate-800" id="footer">
        
        {/* Upper informational area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Column 1: Company Profile & Description */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="flex items-center space-x-2">
                <div className="bg-brand-green/20 p-2 rounded-md">
                  <ShieldCheck className="h-5 w-5 text-brand-green" />
                </div>
                <span className="text-white font-bold font-display tracking-tight text-lg">
                  TFI Burial Society (PTY) Ltd
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                As a prominent name in South Africa, TFI Burial Society (PTY) Ltd helps families honor their loved ones with premium-quality funeral cover and Dignified Family Protection. We aim to ease financial burdens in times of sorrow with speed, empathy, and absolute administrative clarity.
              </p>
              
              {/* Trust highlights */}
              <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-green shrink-0" />
                  <span>24-Hour Claim Processing</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-green shrink-0" />
                  <span>No Medical Examinations</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-green shrink-0" />
                  <span>Casket &amp; Repatriation Shield</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-green shrink-0" />
                  <span>Immediate Cash Benefits</span>
                </div>
              </div>

              {/* Social Media Placeholders */}
              <div className="pt-4 space-y-2">
                <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block">
                  Follow Our Community
                </span>
                <div className="flex space-x-3.5">
                  <a href="#facebook" className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="#twitter" className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                  <a href="#instagram" className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </a>
                  <a href="#linkedin" className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-700 hover:border-blue-700 transition-all" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Navigation */}
            <div className="md:col-span-3 space-y-4 text-left">
              <h3 className="text-white font-semibold font-display text-sm tracking-wider uppercase">
                Quick Navigation
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                    <span>Home &amp; Welcome</span>
                  </Link>
                </li>
                <li>
                  <Link to="/plans" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                    <span>Our Burial Plans &amp; Benefits</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                    <span>Contact &amp; Claim Submissions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                    <span>Request Callback Consultation</span>
                  </Link>
                </li>
              </ul>

              {/* Business Hours Segment */}
              <div className="pt-4 space-y-2">
                <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block">
                  Support Operating Hours
                </span>
                <div className="space-y-1 text-xs text-slate-400 bg-slate-900/40 p-3 rounded-lg border border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-brand-green shrink-0" />
                    <span className="font-semibold text-slate-300">Mon – Fri: 08:00 – 17:00</span>
                  </div>
                  <div className="flex items-center gap-1.5 pl-5">
                    <span className="font-semibold text-slate-300">Saturday: 08:00 – 13:00</span>
                  </div>
                  <p className="text-[9px] text-slate-500 pl-5">Closed on South African Public Holidays</p>
                </div>
              </div>
            </div>

            {/* Column 3: Contact & Support Address Segment */}
            <div className="md:col-span-4 space-y-4 text-left">
              <h3 className="text-white font-semibold font-display text-sm tracking-wider uppercase">
                Registered Contact Channels
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4.5 w-4.5 text-brand-green mt-0.5 shrink-0" />
                  <span className="text-slate-400 leading-relaxed">
                    Corner House, 77 Commissioner Street, Johannesburg CBD, Gauteng, 2001, South Africa
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4.5 w-4.5 text-brand-green shrink-0" />
                  <span className="text-slate-400 font-mono">011 000 0000 / +27 11 000 0001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4.5 w-4.5 text-brand-green shrink-0" />
                  <a href="mailto:info@tfiburial.co.za" className="text-brand-blue-light hover:underline font-mono">
                    info@tfiburial.co.za
                  </a>
                </li>
              </ul>

              {/* Co-Underwriting Badges */}
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 text-xs flex items-center gap-3">
                <Award className="h-6 w-6 text-brand-green shrink-0" />
                <div>
                  <p className="text-[9px] text-slate-500 uppercase font-mono tracking-widest font-bold">
                    Accredited Solutions
                  </p>
                  <p className="text-white font-medium">
                    Corporate Underwriter: Old Mutual &amp; RMA
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Underwriter Regulatory Board details */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="flex items-start gap-2.5 bg-slate-900/30 p-3.5 rounded-xl border border-slate-800/60">
              <ShieldCheck className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
              <p className="text-slate-400 text-[11px] leading-relaxed text-justify">
                <strong>Rand Mutual Assurance (RMA):</strong> Underwritten safely by Rand Mutual Assurance Company Limited (RMA), an authorized financial provider under license FSP-4611, ensuring robust protection of collective industrial society units.
              </p>
            </div>
            <div className="flex items-start gap-2.5 bg-slate-900/30 p-3.5 rounded-xl border border-slate-800/60">
              <ShieldCheck className="h-5 w-5 text-brand-blue-light shrink-0 mt-0.5" />
              <p className="text-slate-400 text-[11px] leading-relaxed text-justify">
                <strong>Old Mutual Registry:</strong> Underwriter coverage backed by Old Mutual Alternative Risk Transfer Limited (OMART), a licensed life insurer and approved advisor under registry FSP-1173.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer exactly as input specified */}
        <div className="bg-slate-950 text-[11px] text-slate-500 py-8 px-4 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            
            <div className="border-l-4 border-brand-green pl-4 py-2 bg-slate-900/20 text-justify rounded-r">
              <p className="leading-relaxed text-slate-450 font-medium">
                <strong>LEGAL DISCLAIMER:</strong> TFI Brokers (Pty) Ltd is a juristic representative operating under House of Administration (Pty) Ltd, an authorised Financial Services Provider (FSP No. 50841). Terms &amp; Conditions Apply.
              </p>
            </div>

            <p className="leading-relaxed text-justify text-slate-500">
              TFI Burial Society (PTY) Ltd operates in strict guidelines with the South African Financial Advisory and Intermediary Services (FAIS) Act, Protection of Personal Information (POPI) Act, and Financial Sector Conduct Authority guidelines. Payout claims are processed within a standard target of 24–48 hours post regulatory certificate registry validations. Standard waiting criteria apply: accidental injuries active immediately on initial payment, 6-month wait period requested on natural illnesses.
            </p>

            <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] border-t border-slate-900 text-slate-600">
              <p>
                &copy; {currentYear} TFI Burial Society (PTY) Ltd. Registered Desk. SA FSP Partnership Network.
              </p>
              <div className="flex space-x-4">
                <span className="hover:text-slate-400 cursor-pointer">Privacy Protection</span>
                <span className="hover:text-slate-400 cursor-pointer">Regulatory Policies</span>
                <span className="hover:text-slate-400 cursor-pointer">Terms &amp; Conditions</span>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}
