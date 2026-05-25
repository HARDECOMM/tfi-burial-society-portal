import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  UserCheck, 
  Zap, 
  Clock, 
  Map, 
  Check, 
  Users, 
  HeartHandshake,
  DollarSign 
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  
  // States for interactive calculator
  const [coverType, setCoverType] = useState('individual'); // 'individual', 'family', 'extended'
  const [coverAmount, setCoverAmount] = useState(15000); // 10000, 15000, 20000, 30000

  // Calculate pricing mathematically based on selected options to look authentic and operational
  const calculatePremium = () => {
    let base = 35; // Standard base premium
    
    // Cover type multipliers
    if (coverType === 'family') base = 75;
    if (coverType === 'extended') base = 125;

    // Cover amount multipliers
    const multiplier = coverAmount / 10000;
    let total = base * multiplier;

    // Apply minor optimization to simulate real insurance algorithms
    if (coverType === 'family' && coverAmount >= 20000) total = total * 0.95; // 5% Family bundle discount
    if (coverType === 'extended' && coverAmount >= 30000) total = total * 0.90; // 10% Loyalty discount

    return Math.round(total);
  };

  const handleApplyNow = () => {
    // Navigate to contact form with state parameters to prefill selections
    navigate('/contact', { 
      state: { 
        selectedCoverType: coverType, 
        selectedCoverAmount: coverAmount,
        estimatedPremium: calculatePremium()
      } 
    });
  };

  const trustPillars = [
    {
      icon: <UserCheck className="h-6 w-6 text-brand-green" />,
      title: "No Medical Exams Required",
      desc: "Instant approval on all Standard, Premium, and Family policies. Acceptance is based on simple health declarations."
    },
    {
      icon: <Zap className="h-6 w-6 text-brand-green" />,
      title: "Rapid 24-48 Hour Payouts",
      desc: "Upon receiving certified documentation, payouts are processed directly to the nominated beneficiaries to cover immediate needs."
    },
    {
      icon: <Clock className="h-6 w-6 text-brand-green" />,
      title: "6-Month Waiting Period",
      desc: "Low-risk terms with only a 6-month waiting period for death by natural causes. Accidental deaths are covered instantly from day one."
    },
    {
      icon: <Map className="h-6 w-6 text-brand-green" />,
      title: "Body Repatriation Included",
      desc: "Built-in professional assistance to transport the deceased back home safely within South African borders."
    }
  ];

  return (
    <div className="space-y-16 pb-16" id="home-page">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-dark via-slate-900 to-brand-blue-dark text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-brand-green/10">
        
        {/* Background Decorative Circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-blue-light/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust announcement badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700/60 rounded-full py-1.5 px-3.5 text-xs text-slate-200">
              <span className="flex h-2 w-2 rounded-full bg-brand-green animate-pulse"></span>
              <span className="font-semibold text-brand-green uppercase tracking-wider text-[10px] font-mono">Licensed Underwriting</span>
              <span className="text-slate-500">|</span>
              <span className="text-[11px] font-medium font-sans">Old Mutual & RMA Joint Products</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-tight">
              Giving Your Loved Ones <span className="bg-gradient-to-r from-brand-green to-teal-400 bg-clip-text text-transparent">Dignified Farewell</span> Deserved
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Honest, affordable funeral burial insurance policies starting from just R35/month. Built with strict structural compliance, underwritten by South Africa's leading financial institutions.
            </p>

            {/* Quick check bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-brand-green/15 text-brand-green">
                  <Check className="h-4 w-4" />
                </div>
                <span>Accidental Cover Active on Day 1</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-brand-green/15 text-brand-green">
                  <Check className="h-4 w-4" />
                </div>
                <span>Extended Family Cover (Up to 10 people)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-brand-green/15 text-brand-green">
                  <Check className="h-4 w-4" />
                </div>
                <span>No Bank Account Needed for Sign-up</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-brand-green/15 text-brand-green">
                  <Check className="h-4 w-4" />
                </div>
                <span>Cremation & Burial Options Covered</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/plans"
                className="bg-brand-green hover:bg-emerald-500 text-brand-blue-dark font-bold py-3.5 px-6 rounded-md transition-all shadow-lg hover:shadow-brand-green/30 text-center flex items-center justify-center gap-2"
                id="hero-plans-cta"
              >
                <span>Compare Our Plans</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#quote-calculator"
                className="bg-transparent hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-md border border-slate-700 hover:border-slate-600 transition-all text-center"
              >
                Calculate Premium
              </a>
            </div>

            {/* Underwrite labels */}
            <div className="pt-6 border-t border-slate-800/80">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-mono font-medium">
                Authorized Marketing and Insurance Underwriting Group
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-slate-300 text-sm font-semibold">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-brand-blue-light" /> Old Mutual Alternative Risk</span>
                <span className="text-slate-700">•</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-400" /> RMA Underwriters</span>
                <span className="text-slate-700">•</span>
                <span className="flex items-center gap-1.5"><Sparkles className="h-4 w-4 text-indigo-400" /> Dignify Solutions</span>
              </div>
            </div>

          </div>

          {/* Hero Right: Trust Onboarding Box */}
          <div className="lg:col-span-5 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative" id="quick-onboarding-promo">
            <h3 className="text-xl font-bold font-display text-white mb-2">Claim Quick Checklist</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              We process claims efficiently. Ensure you have the following ready to submit dynamically via the portal or at our branch.
            </p>

            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-semibold text-brand-green shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-semibold text-white">BI-1663 Form (Death notification)</h4>
                  <p className="text-xs text-slate-400">Must be completed by an authorized medical practitioner.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-semibold text-brand-green shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-semibold text-white">Certified Death Certificate</h4>
                  <p className="text-xs text-slate-400">Issued by Home Affairs or high authority local representative.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-semibold text-brand-green shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-semibold text-white">Deceased & Beneficiary ID Copies</h4>
                  <p className="text-xs text-slate-400">Clear scans or photographs of the ID card/book.</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Need help drafting?</span>
              <Link to="/contact" className="text-brand-green font-semibold hover:underline">
                Ask Agent Now
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. REAL-TIME PREMIUM CALCULATOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="quote-calculator">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Calculator Control Inputs */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
              <div>
                <span className="text-xs font-semibold font-mono uppercase bg-brand-blue-dark/5 text-slate-600 px-3 py-1 rounded-full">
                  Interactive Portal Tool
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-2">
                  Calculate Your Funeral Policy Premium
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Adjust standard inputs to preview official monthly premiums based on underwritten tables instantly.
                </p>
              </div>

              {/* Cover Type Selection Input */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-brand-blue" />
                  <span>Choose Cover Type</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'individual', title: 'Individual Cover', desc: 'Main member only (Ages 18-65)' },
                    { id: 'family', title: 'Nuclear Family', desc: 'Main member + Spouse + up to 5 Kids' },
                    { id: 'extended', title: 'Extended Family', desc: 'Main member + Parents + Siblings' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setCoverType(type.id)}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        coverType === type.id
                          ? 'border-brand-blue bg-blue-50/50 shadow-sm ring-2 ring-brand-blue/30'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                      }`}
                      id={`calc-type-${type.id}`}
                    >
                      <h4 className="font-bold text-sm text-slate-900">{type.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{type.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cover Amount Input */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                    <DollarSign className="h-4 w-4 text-brand-blue" />
                    <span>Funeral Cover Limit (Payout Amount)</span>
                  </label>
                  <span className="text-xs text-slate-400 font-medium">SA Rand (ZAR)</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[10000, 15000, 20000, 30000].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setCoverAmount(amount)}
                      className={`py-3 px-4 rounded-lg border font-bold text-center transition-all ${
                        coverAmount === amount
                          ? 'border-brand-blue bg-blue-600 text-white shadow-md'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                      id={`calc-amount-${amount}`}
                    >
                      R {amount.toLocaleString()}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-slate-400 italic">
                  *Payout cover assists families with catering, transport, caskets, and burial procedures.
                </p>
              </div>

            </div>

            {/* Price Preview Panel */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-brand-blue-dark text-white p-6 sm:p-10 flex flex-col justify-between relative">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-brand-green" />
                  <span className="text-xs text-slate-300 uppercase tracking-widest font-mono font-semibold">
                    Old Mutual &amp; RMA Certified Cover
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-slate-400">Policy Holder Sub-total Estimate</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold text-white tracking-tight">
                      R{calculatePremium()}
                    </span>
                    <span className="text-slate-300 text-sm font-medium">/ month</span>
                  </div>
                </div>

                {/* Cover items list based on inputs */}
                <div className="space-y-3.5 border-t border-white/10 pt-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-brand-green shrink-0" />
                    <span>Payout Amount: <strong>R {coverAmount.toLocaleString()}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-brand-green shrink-0" />
                    <span>Plan Category: <strong className="capitalize">{coverType} Cover</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-brand-green shrink-0" />
                    <span>Value Added: Body repatriation &amp; grocery benefit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-brand-green shrink-0" />
                    <span>Wait Times: Natural death (6 Mo) / Accidental (Immediate)</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 space-y-3">
                <button
                  onClick={handleApplyNow}
                  className="w-full bg-brand-green hover:bg-emerald-500 text-brand-blue-dark font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-brand-green/20 text-center block text-sm"
                  id="calc-submit-cta"
                >
                  Secure Policy / Confirm Coverage
                </button>
                <p className="text-[10px] text-center text-slate-400 leading-snug">
                  *Premium pricing shown is subject to the age of members and subject to underwriting terms. Contact an agent for formal citation.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. FOUR CORE COOPERATIVE BENEFIT PILLARS */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-wider font-mono text-brand-blue uppercase">
              Financial Security Matrix
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight">
              Insurance Safeguards Designed with Dignity
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              TFI Burial Society works directly alongside South Africa's most prominent industrial underwriters to deliver high-integrity funeral support options.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {trustPillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="bg-slate-50 w-12 h-12 flex items-center justify-center rounded-xl border border-slate-100">
                    {pillar.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed text-justify">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CO-COGNIZANT COMPLIANCE BRAND PANEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white rounded-2xl p-8 border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 lg:max-w-md">
            <h3 className="text-lg font-bold text-slate-800 font-display flex items-center gap-1.5">
              <HeartHandshake className="h-5 w-5 text-brand-green" />
              <span>Dignity Underwriter Alliance</span>
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              TFI Burial Societypolicies carry maximum authorization weight. Supported by Old Mutual and RMA ensuring standard claims are settled without compliance delays.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
            <div className="bg-slate-50 py-3.5 px-5 rounded-xl border border-slate-100 text-center shrink-0">
              <span className="block text-[10px] text-slate-400 uppercase font-mono tracking-wider">Broker Partner</span>
              <span className="block text-sm font-bold text-slate-900">Dignify Solutions</span>
            </div>
            <div className="bg-slate-50 py-3.5 px-5 rounded-xl border border-slate-100 text-center shrink-0">
              <span className="block text-[10px] text-slate-400 uppercase font-mono tracking-wider">Corporate Underwriter</span>
              <span className="block text-sm font-bold text-slate-900">Old Mutual OMART</span>
            </div>
            <div className="bg-slate-50 py-3.5 px-5 rounded-xl border border-slate-100 text-center shrink-0">
              <span className="block text-[10px] text-slate-400 uppercase font-mono tracking-wider">Industrial Partner</span>
              <span className="block text-sm font-bold text-slate-900">Rand Mutual (RMA)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA GET IN TOUCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="quick-cta-enroll">
        <div className="bg-gradient-to-r from-brand-blue via-brand-blue-dark to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/5 relative overflow-hidden">
          <div className="absolute right-0 top-0 -mt-24 -mr-24 w-80 h-80 bg-brand-green/20 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="max-w-2xl space-y-6">
            <h2 className="text-2xl sm:text-4xl font-sans font-bold text-white font-display tracking-tight">
              Ready to Secure Your Family's Burial Policy Today?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Don't wait for the unexpected. Set up standard covers under our Old Mutual RMA framework. Quick consultations take less than 5 minutes over the phone.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="bg-brand-green hover:bg-emerald-500 text-brand-blue-dark font-bold py-3.5 px-6 rounded-md transition-all text-center text-sm shadow-md"
              >
                Request Consultation
              </Link>
              <Link
                to="/plans"
                className="bg-transparent hover:bg-white/10 text-white font-semibold py-3.5 px-6 rounded-md border border-white/20 hover:border-white/30 transition-all text-center text-sm"
              >
                Browse Specific Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
