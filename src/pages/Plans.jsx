import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Users,
  UserCheck,
  Award,
  DollarSign,
  Heart,
  Beef,
  Flame,
  Milestone
} from 'lucide-react';

export default function Plans() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all'); // 'all', 'core', 'extended', 'special'

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleSelectPlan = (planName, payoutValue, priceValue) => {
    navigate('/contact', {
      state: {
        selectedPlanName: planName,
        selectedCoverAmount: payoutValue,
        estimatedPremium: priceValue
      }
    });
  };

  // Group 1: Core Funeral Plans
  const corePlans = [
    {
      id: 'single-member',
      name: 'Single Member Policy',
      category: 'Core Plan',
      payout: 'R 15,000',
      payoutNum: 15000,
      badge: 'Highly Popular',
      audience: 'Accredited option for individual heads of household',
      pricing: [
        { age: 'Ages 18 - 64', cost: 45 },
        { age: 'Ages 65 - 74', cost: 110 },
        { age: 'Ages 76 - 84', cost: 165 }
      ],
      features: [
        'Main Member eligibility (No medical paperwork required)',
        'Instant Cover for death by accidental causes',
        '6-Month waiting period for death by natural causes',
        'R5,000 complimentary body repatriation benefit included'
      ],
      icon: <UserCheck className="h-5 w-5 text-brand-blue" />
    },
    {
      id: 'member-children',
      name: 'Member & Children Policy',
      category: 'Core Plan',
      payout: 'R 15,000',
      payoutNum: 15000,
      audience: 'Perfect protection for single parents with dependents',
      pricing: [
        { age: 'Ages 18 - 64', cost: 65 },
        { age: 'Ages 65 - 74', cost: 125 },
        { age: 'Ages 76 - 84', cost: 185 }
      ],
      features: [
        'Covers Main Member + up to 5 dependent children under age 21',
        'R15,000 Main Member limit | R7,500 cover per child',
        'Accidental deaths covered immediately from first premium',
        '6-Month waiting period for death by natural illness'
      ],
      icon: <Heart className="h-5 w-5 text-rose-500" />
    },
    {
      id: 'member-spouse',
      name: 'Member & Spouse Policy',
      category: 'Core Plan',
      payout: 'R 20,000',
      payoutNum: 20000,
      audience: 'Tailored protection for married couples and life partners',
      pricing: [
        { age: 'Ages 18 - 64', cost: 85 },
        { age: 'Ages 65 - 74', cost: 160 },
        { age: 'Ages 76 - 84', cost: 240 }
      ],
      features: [
        'Full policy cover of R20,000 for each life partner',
        'Accidental death fully covered from day one',
        'Simple standard health declarations - zero health exams required',
        'Fast 24-48 Hour claims settlement upon documentation submission'
      ],
      icon: <Users className="h-5 w-5 text-indigo-500" />
    },
    {
      id: 'family-plan',
      name: 'Family Shield Policy',
      category: 'Core Plan',
      payout: 'R 20,000',
      payoutNum: 20000,
      badge: 'Best Family Value',
      audience: 'Comprehensive standard coverage for the nuclear family unit',
      pricing: [
        { age: 'Ages 18 - 64', cost: 115 },
        { age: 'Ages 65 - 74', cost: 195 },
        { age: 'Ages 76 - 84', cost: 295 }
      ],
      features: [
        'Covers Main Member + registered Spouse + up to 5 dependent children',
        'Full R20,000 coverage per parent | R10,000 coverage per child',
        'R1,500 immediate grocery airtime helper allowance included gratis',
        'Complimentary repatriation logistics included'
      ],
      icon: <Award className="h-5 w-5 text-brand-green" />
    }
  ];

  // Group 2: Extended Family Plans
  const extendedPlans = [
    {
      id: 'member-plus-5',
      name: 'Member + 5 Family Protector',
      category: 'Extended Family',
      payout: 'R 10,000 / member',
      payoutNum: 10000,
      audience: 'Security designed for the support of direct home dependants',
      pricing: [
        { age: 'Ages 1 - 64', cost: 140 },
        { age: 'Ages 65 - 74', cost: 190 },
        { age: 'Ages 76 - 84', cost: 280 }
      ],
      features: [
        'Covers Main Member + up to 5 extended relatives',
        'R10,000 claim payout processed independently per member',
        'Accidental events active immediately from first payment',
        'Underwritten and secure with no medical exams required'
      ],
      icon: <Users className="h-5 w-5 text-teal-600" />
    },
    {
      id: 'member-plus-7',
      name: 'Member + 7 Extended Guardian',
      category: 'Extended Family',
      payout: 'R 10,000 / member',
      payoutNum: 10000,
      badge: 'Popular Choice',
      audience: 'Covers larger standard domestic circles affordably',
      pricing: [
        { age: 'Ages 1 - 64', cost: 180 },
        { age: 'Ages 65 - 74', cost: 240 },
        { age: 'Ages 76 - 84', cost: 340 }
      ],
      features: [
        'Covers Main Member + up to 7 extended relatives side-by-side',
        'Full R10,000 payout guarantee across all registered members',
        'Standard 6-month natural death waiting criteria applies',
        'Reliable body dispatch back home within South Africa borders'
      ],
      icon: <Users className="h-5 w-5 text-amber-600" />
    },
    {
      id: 'member-plus-9',
      name: 'Member + 9 Dynasty Coverage',
      category: 'Extended Family',
      payout: 'R 10,000 / member',
      payoutNum: 10000,
      audience: 'Designed to protect grandparental generations with comfort',
      pricing: [
        { age: 'Ages 1 - 64', cost: 220 },
        { age: 'Ages 65 - 74', cost: 290 },
        { age: 'Ages 76 - 84', cost: 410 }
      ],
      features: [
        'Covers Main Member + up to 9 extended generational relatives',
        'High flexibility - easily replace members during premium updates',
        'Accidental occurrences active instantly on payment validation',
        'Convenient monthly payments available via local retail terminals'
      ],
      icon: <Users className="h-5 w-5 text-purple-600" />
    },
    {
      id: 'member-plus-13',
      name: 'Member + 13 Ultimate Society Cover',
      category: 'Extended Family',
      payout: 'R 10,000 / member',
      payoutNum: 10000,
      badge: 'Max Protection',
      audience: 'Ultimate broad-scale support for extensive co-operatives',
      pricing: [
        { age: 'Ages 1 - 64', cost: 295 },
        { age: 'Ages 65 - 74', cost: 390 },
        { age: 'Ages 76 - 84', cost: 550 }
      ],
      features: [
        'Covers Main Member + up to 13 extended family relations',
        'Maximized budget efficiency - averaging only R22 per covered individual',
        'Full digital receipting plus electronic claim document dispatch',
        'Underwritten by RMA and Old Mutual Alternative Risk'
      ],
      icon: <Users className="h-5 w-5 text-indigo-600" />
    }
  ];

  // Group 3: Special Benefit Plans
  const specialPlans = [
    {
      id: 'grocery-plan',
      name: 'Grocery Plan Support',
      category: 'Special Benefit',
      payout: 'R 5,000 Cash',
      payoutNum: 5000,
      audience: 'Immediate relief cash for grocery catering on receipt of death notification',
      pricing: [
        { age: 'Ages 18 - 64', cost: 20 },
        { age: 'Ages 65 - 74', cost: 40 },
        { age: 'Ages 76 - 84', cost: 60 }
      ],
      features: [
        'R5,000 lump sum processed in less than 24 hours',
        'Designed to meet high immediate food and beverage expenses',
        'Standalone benefit or easy add-on rider on core policies',
        'Natural causes covered after standard 6-month wait period'
      ],
      icon: <Sparkles className="h-5 w-5 text-pink-500" />
    },
    {
      id: 'after-tears-plan',
      name: 'After Tears Plan',
      category: 'Special Benefit',
      payout: 'R 10,000 Cash',
      payoutNum: 10000,
      badge: 'Highly Requested',
      audience: 'Dedicated cash payout for marquee tents, transport, and hosting',
      pricing: [
        { age: 'Ages 18 - 64', cost: 30 },
        { age: 'Ages 65 - 74', cost: 55 },
        { age: 'Ages 76 - 84', cost: 80 }
      ],
      features: [
        'R10,000 additional hosting assistance',
        'Direct bank EFT transfer to nominated representative',
        'Assists family in hosting a respectful memorial and gathering',
        'Easy digital submission on our customer portal'
      ],
      icon: <Flame className="h-5 w-5 text-orange-500" />
    },
    {
      id: 'inkomo-plan',
      name: 'Inkomo (Beast) Plan',
      category: 'Special Benefit',
      payout: 'R 15,000 Cash',
      payoutNum: 15000,
      audience: 'Traditional coverage assistance matching the value of a live cow',
      pricing: [
        { age: 'Ages 18 - 64', cost: 45 },
        { age: 'Ages 65 - 74', cost: 85 },
        { age: 'Ages 76 - 84', cost: 120 }
      ],
      features: [
        'R15,000 direct payout to honor cultural ceremony requirements',
        'Highly respected standalone cultural rider in South Africa',
        'No physical delivery delays - cash transfer is instant upon claim authorization',
        'Protects livestock budgets from soaring retail prices'
      ],
      icon: <Beef className="h-5 w-5 text-amber-700" />
    },
    {
      id: 'tombstone-plan',
      name: 'Tombstone Installation Plan',
      category: 'Special Benefit',
      payout: 'R 10,000 Cash',
      payoutNum: 10000,
      audience: 'Assistance for high stone erection and unveiling ceremonial expenses',
      pricing: [
        { age: 'Ages 18 - 64', cost: 35 },
        { age: 'Ages 65 - 74', cost: 65 },
        { age: 'Ages 76 - 84', cost: 95 }
      ],
      features: [
        'R10,000 dedicated benefit paid directly to the family representative',
        'Can be claimed within 12 months post funeral date of register',
        'Permits families to schedule respectful unveilings on custom dates',
        'Helps preserve family savings on long-term monumental tributes'
      ],
      icon: <Milestone className="h-5 w-5 text-slate-500" />
    },
    {
      id: 'cash-plan',
      name: 'Dignify Liquid Cash Plan',
      category: 'Special Benefit',
      payout: 'R 15,000 Cash',
      payoutNum: 15000,
      badge: 'Pure Liquidity',
      audience: 'Direct tax-free cash support to manage immediate administrative costs',
      pricing: [
        { age: 'Ages 18 - 64', cost: 40 },
        { age: 'Ages 65 - 74', cost: 75 },
        { age: 'Ages 76 - 84', cost: 110 }
      ],
      features: [
        'R15k liquid payout to handle municipal plots, caskets, or transport',
        'Payout completed with zero usage restriction whatsoever',
        'Requires only Home Affairs death certification registry parameters',
        'Helps avoid standard high interest credit borrows under emergencies'
      ],
      icon: <DollarSign className="h-5 w-5 text-emerald-600" />
    }
  ];

  const faqs = [
    {
      q: "What is a waiting period and how is it calculated?",
      a: "A waiting period is a standard safety measure for insurance underwriting in South Africa. Dignify Funeral Solutions policy structures apply a 6-month waiting period for death resulting from natural causes (e.g., medical illness). Accidental death has no waiting periods and is covered from your first verified payment."
    },
    {
      q: "Can I add extended family members to my core funeral policy?",
      a: "Our plans are pre-grouped for maximum savings. To cover extended family, we highly recommend selecting one of our specialized 'Member Plus' plans (such as Member +5 or +7), as they provide significantly higher discount limits than adding members individually."
    },
    {
      q: "Where can I make monthly premium payments?",
      a: "We support automated debit orders, secure digital cellular payment links, direct EFT bank deposits, and cash options at South African retail cashpoints. You can pay at Shoprite, Checkers, Pick n Pay, Boxer, or USave physical branches using your standard policy reference code."
    },
    {
      q: "What benefits require verified Home Affairs forms?",
      a: "All payout benefits (including cash benefits, core coverage, and special grocery plans) require standard South African death notifications (BI-1663 forms), certified death certificates, and the nominated beneficiary's identification paperwork."
    }
  ];

  // Helper renderer for unified, premium card styles
  const renderPlanCard = (plan) => {
    return (
      <div 
        key={plan.id}
        className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 relative group"
        id={`plan-card-${plan.id}`}
      >
        {plan.badge && (
          <div className="absolute top-4 right-4 bg-brand-green text-brand-blue-dark text-[10px] font-mono font-bold uppercase py-1 px-3 rounded-full shadow-sm z-10">
            {plan.badge}
          </div>
        )}

        {/* Top visual accent stripe */}
        <div className="h-1.5 bg-gradient-to-r from-brand-blue to-teal-500 w-full" />

        <div className="p-6 space-y-5">
          {/* Card Category & Title */}
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold tracking-wider text-brand-blue uppercase bg-brand-blue/5 py-1 px-2.5 rounded-md">
              {plan.icon}
              <span>{plan.category}</span>
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-display pt-1">
              {plan.name}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed text-justify">
              {plan.audience}
            </p>
          </div>

          {/* Core Payout representation */}
          <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium font-sans">Payout Amount</span>
            <span className="text-lg font-extrabold text-brand-green font-display">
              {plan.payout}
            </span>
          </div>

          {/* Responsive Price Summary Grid - Show multiple ages where applicable */}
          <div className="space-y-2 border-t border-slate-100/80 pt-4">
            <p className="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-400">
              Pricing Options by Age Band
            </p>
            <div className="space-y-2">
              {plan.pricing.map((rate, rateIdx) => (
                <div 
                  key={rateIdx} 
                  className="flex items-center justify-between bg-slate-50/40 px-3 py-2 rounded-lg border border-slate-100/60"
                >
                  <span className="text-xs text-slate-600 font-medium">{rate.age}</span>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-slate-900 font-display">R {rate.cost}</span>
                    <span className="text-[10px] text-slate-400 font-sans ml-1">/pm</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* bullet points of core advantages */}
          <ul className="space-y-2.5 pt-2 border-t border-slate-100">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-xs">
                <CheckCircle2 className="h-4 w-4 text-brand-green shrink-0 mt-0.5" />
                <span className="text-slate-650 leading-relaxed text-justify">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Get quote operational selector */}
        <div className="bg-slate-50/80 border-t border-slate-100 p-5">
          <button
            onClick={() => handleSelectPlan(plan.name, plan.payoutNum, plan.pricing[0].cost)}
            className="w-full bg-brand-blue hover:bg-slate-900 text-white font-bold py-3 px-4 rounded-xl text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:shadow"
            id={`quote-btn-${plan.id}`}
          >
            <span>Get Official Quote</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-16 pb-16" id="plans-page">
      
      {/* 1. PROFESSIONAL HERO HEADER BANNER */}
      <section className="bg-gradient-to-br from-brand-blue-dark via-slate-900 to-brand-blue-dark text-white py-14 px-4 sm:px-6 lg:px-8 text-center border-b border-brand-green/10 relative">
        <div className="absolute right-0 top-0 -mt-20 -mr-20 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 -mb-20 -ml-20 w-80 h-80 bg-brand-blue-light/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green text-xs font-semibold py-1 px-3.5 rounded-full border border-brand-green/20">
            <ShieldCheck className="h-4.5 w-4.5" />
            <span className="font-mono text-[10px] uppercase tracking-wider">Joint Corporate Underwriters: Old Mutual &amp; RMA</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            Our Funeral Burial Society Policies
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Safeguard your family's future with dignity. Explore structured, peer-reviewed plans built cleanly with regulatory POPI Act safety guidelines and fast claims processing.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY TABS SELECTOR / FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-5">
          <div className="text-center">
            <span className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-widest block">
              Flexible Filter Directory
            </span>
            <h2 className="text-lg font-bold text-slate-800 font-sans mt-1">
              Browse Plans by Category
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/60 max-w-3xl w-full">
            {[
              { id: 'all', label: 'All Policy Plans' },
              { id: 'core', label: '1. Core Plans' },
              { id: 'extended', label: '2. Extended Family' },
              { id: 'special', label: '3. Special Benefits' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`py-2 px-5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                  activeCategory === tab.id
                    ? 'bg-brand-blue text-white shadow-md font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GROUPED PLANS LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16" id="plans-card-directory">
        
        {/* GROUP 1: CORE FUNERAL PLANS */}
        {(activeCategory === 'all' || activeCategory === 'core') && (
          <div className="space-y-6" id="section-core-plans">
            <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-[9px] font-mono tracking-widest uppercase font-bold text-slate-400 block">Section 01</span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2 mt-0.5">
                  <ShieldCheck className="h-5.5 w-5.5 text-brand-blue" />
                  <span>Core Funeral &amp; Family Plans</span>
                </h3>
              </div>
              <p className="text-xs text-slate-500 max-w-md sm:text-right">
                Standard, reliable protection for individual members, spouses, and children ages 18-84 under Old Mutual registries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {corePlans.map(renderPlanCard)}
            </div>
          </div>
        )}

        {/* GROUP 2: EXTENDED FAMILY PLANS */}
        {(activeCategory === 'all' || activeCategory === 'extended') && (
          <div className="space-y-6 pt-6" id="section-extended-plans">
            <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-[9px] font-mono tracking-widest uppercase font-bold text-slate-400 block">Section 02</span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2 mt-0.5">
                  <Users className="h-5.5 w-5.5 text-brand-blue" />
                  <span>Extended Family Protection Plans</span>
                </h3>
              </div>
              <p className="text-xs text-slate-500 max-w-md sm:text-right">
                Extended family options to seamlessly cover parents, in-laws, grandparents, and siblings up to age 84 with great corporate rates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {extendedPlans.map(renderPlanCard)}
            </div>
          </div>
        )}

        {/* GROUP 3: SPECIAL BENEFIT PLANS */}
        {(activeCategory === 'all' || activeCategory === 'special') && (
          <div className="space-y-6 pt-6" id="section-special-plans">
            <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-[9px] font-mono tracking-widest uppercase font-bold text-slate-400 block">Section 03</span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2 mt-0.5">
                  <Sparkles className="h-5.5 w-5.5 text-brand-blue" />
                  <span>Special Safeguards, Beast (Inkomo) &amp; Benefit Plans</span>
                </h3>
              </div>
              <p className="text-xs text-slate-500 max-w-md sm:text-right">
                Dedicated supplementary cash payments to support grocery, After Tears hospitality, unveiling events, and the traditional beast burial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {specialPlans.map(renderPlanCard)}
            </div>
          </div>
        )}

      </section>

      {/* 4. DESIGNATIVE COMPLIANCE STATS BOX */}
      <section className="bg-slate-50 py-12 border-y border-slate-250/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-brand-blue font-display">24-48 Hours</p>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-sans">Payout Speed Goal</h4>
              <p className="text-[11px] text-slate-500">Accelerated validation post certificated paperwork registry</p>
            </div>
            <div className="space-y-1 border-t sm:border-t-0 sm:border-x border-slate-200 pt-6 sm:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold text-brand-blue font-display">No Exams</p>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-sans">Medical Assessment</h4>
              <p className="text-[11px] text-slate-500">Only basic health status declarations requested</p>
            </div>
            <div className="space-y-1 border-t sm:border-t-0 pt-6 sm:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold text-brand-blue font-display">R 40,000</p>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-sans">Maximum Cover Limit</h4>
              <p className="text-[11px] text-slate-500">Sufficiently protect dependents with multi-underwriter guarantees</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="plans-faq-block">
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <HelpCircle className="h-7 w-7 text-brand-blue mx-auto" />
            <h2 className="text-2xl font-bold font-display text-slate-900">
              Frequently Asked Policy Questions
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Answers to critical questions regarding South Africa underwriting rules, waiting policies, and debit orders.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-150 shadow-sm overflow-hidden">
            {faqs.map((faq, idx) => (
              <div key={idx} className="transition-all" id={`faq-item-${idx}`}>
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-6 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-slate-800 text-sm sm:text-base">
                    {faq.q}
                  </span>
                  {activeFaq === idx ? (
                    <ChevronUp className="h-4 w-4 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-slate-500 leading-relaxed text-justify animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONCISE BESPOKE CTA CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-blue-dark text-white rounded-2xl p-6 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-brand-green font-bold text-sm tracking-wider uppercase font-display">
              Have Specific Co-operative Society Needs?
            </h4>
            <p className="text-xs text-slate-400 max-w-xl">
              We provide tailored group rates for churches, community burial societies, corporate employee groups, and traditional authorities. Reach out and secure custom advisory support.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="w-full md:w-auto bg-brand-green hover:bg-emerald-500 text-brand-blue-dark font-bold py-2.5 px-6 rounded-lg text-xs tracking-wider uppercase transition cursor-pointer shrink-0"
          >
            Custom Quote Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
