import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  SendHorizontal, 
  ShieldCheck, 
  MessageSquare,
  Building2,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function Contact() {
  const location = useLocation();

  // Pick up pre-selected plan name from plans navigation state
  const routeState = location.state || {};
  const initialPlan = routeState.selectedPlanName || '';

  // State management
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    selectedPlan: initialPlan,
    ageRange: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');

  // Handle inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error dynamically when typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Safe validation
  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().split(' ').length < 2) {
      errors.fullName = 'Please enter both your first name and surname';
    }

    // SA layout phone check
    const cleanPhone = formData.phoneNumber.replace(/[\s-()]/g, '');
    const phoneRegex = /^(?:\+27|0)[6-8][0-9]{8}$/;
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!phoneRegex.test(cleanPhone)) {
      errors.phoneNumber = 'Enter a valid South African cell number (e.g. 082 123 4567)';
    }

    if (!formData.selectedPlan) {
      errors.selectedPlan = 'Please select a policy plan option';
    }

    if (!formData.ageRange) {
      errors.ageRange = 'Please select an age bracket option';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const randomId = Math.floor(100000 + Math.random() * 900000);
      setQuoteReference(`TFI-QUO-${randomId}`);
      setIsSubmitted(true);
      window.scrollTo({ top: 320, behavior: 'smooth' });
    }
  };

  // Helper list of plans congruent with plans directory page
  const planOptions = [
    { label: '-- Select a Burial Plan Option --', value: '' },
    { label: 'Core: Single Member Policy (R15,000 cover)', value: 'Single Member Policy' },
    { label: 'Core: Member & Children Policy (R15,000 cover)', value: 'Member & Children Policy' },
    { label: 'Core: Member & Spouse Policy (R20,000 cover)', value: 'Member & Spouse Policy' },
    { label: 'Core: Family Shield Policy (R20,000 cover)', value: 'Family Shield Policy' },
    { label: 'Extended: Member + 5 Family Protector', value: 'Member + 5 Family Protector' },
    { label: 'Extended: Member + 7 Extended Guardian', value: 'Member + 7 Extended Guardian' },
    { label: 'Extended: Member + 9 Dynasty Coverage', value: 'Member + 9 Dynasty Coverage' },
    { label: 'Extended: Member + 13 Ultimate Society Cover', value: 'Member + 13 Ultimate Society Cover' },
    { label: 'Special: Grocery Plan Support', value: 'Grocery Plan Support' },
    { label: 'Special: After Tears Plan', value: 'After Tears Plan' },
    { label: 'Special: Inkomo (Beast) Plan', value: 'Inkomo (Beast) Plan' },
    { label: 'Special: Tombstone Installation Plan', value: 'Tombstone Installation Plan' },
    { label: 'Special: Dignify Liquid Cash Plan', value: 'Dignify Liquid Cash Plan' }
  ];

  // WhatsApp click handler
  const handleWhatsAppRedirect = () => {
    const textMsg = `Hello TFI Burial Society, my name is ${formData.fullName || 'Customer'}. I would like to get a custom quote for the ${formData.selectedPlan || 'Funeral Plan'}.`;
    const encodedText = encodeURIComponent(textMsg);
    // Standard WhatsApp API URL with placeholder SA country code phone number +27 11 000 0000
    window.open(`https://wa.me/27110000000?text=${encodedText}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-12 pb-16" id="contact-and-quote-page">
      
      {/* PROFESSIONAL TITLE STAGE */}
      <section className="bg-gradient-to-br from-brand-blue-dark via-slate-900 to-brand-blue-dark text-white py-14 px-4 sm:px-6 lg:px-8 text-center border-b border-brand-green/10 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green text-xs font-semibold py-1.5 px-3.5 rounded-full border border-brand-green/20">
            <ShieldCheck className="h-4.5 w-4.5" />
            <span className="font-mono text-[10px] uppercase tracking-wider">Licensed Financial Services FSP Placeholder</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            Contact &amp; Quick Quote Consultation
          </h1>
          <p className="text-slate-350 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Get an instant official premium projection. Fill out our simplified diagnostic form below, or chat safely on WhatsApp for real-time accredited funeral society guidance.
          </p>
        </div>
      </section>

      {/* CORE BENTO GRID SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT PANEL: QUICK QUOTE FORM (COL SPAN 7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-md p-6 sm:p-10 space-y-6" id="quote-form-container">
            
            {isSubmitted ? (
              /* INTERACTIVE SUBMISSION CONFIRMATION */
              <div className="text-center py-6 space-y-6 animate-fadeIn" id="quote-success-panel">
                <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto ring-4 ring-emerald-50">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-extrabold text-brand-green tracking-widest uppercase">
                    Form Processed Successfully
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 font-display">
                    Thank You, {formData.fullName.split(' ')[0]}!
                  </h2>
                  <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                    We have received your premium calculation request. A certified TFI society underwriter consultant will contact you on <strong>{formData.phoneNumber}</strong> shortly to activate your official policy prospectus.
                  </p>
                </div>

                {/* Simulated quote summary visual */}
                <div className="bg-slate-50 border border-slate-100/95 p-5 rounded-2xl max-w-md mx-auto text-left space-y-3.5 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-2.5">
                    <span className="text-slate-400 font-medium font-mono">Registry Reference</span>
                    <span className="font-mono font-bold text-brand-blue">{quoteReference}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-slate-650">
                      <span>Selected Cover Plan:</span>
                      <span className="font-semibold text-slate-900">{formData.selectedPlan}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-650">
                      <span>Registered Age Band:</span>
                      <span className="font-semibold text-slate-900">{formData.ageRange}</span>
                    </div>

                    {formData.message && (
                      <div className="pt-2 border-t border-slate-100 text-[11px]">
                        <span className="block text-slate-400 font-medium mb-1">Your Special Note:</span>
                        <p className="text-slate-500 italic bg-white p-2.5 rounded-lg border border-slate-100">
                          "{formData.message}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-2.5 px-5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Confirm on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: '', phoneNumber: '', selectedPlan: '', ageRange: '', message: '' });
                    }}
                    className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-5 rounded-xl text-xs transition-all cursor-pointer"
                  >
                    Request Another Plan Quote
                  </button>
                </div>
              </div>
            ) : (
              /* REALISTIC REACT INPUT FORM */
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold font-display text-slate-950">
                    Get a Quote Instantly
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your details below. This generates an automated estimation reference for our accredited consultants under strict FSP compliance guidelines.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* FULL NAME */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="fullName" className="text-xs font-bold text-slate-700 uppercase tracking-widest block">
                      Full Name &amp; Surname <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Sipho Nkosi"
                      className={`w-full py-2.5 px-4 rounded-xl bg-slate-50 border text-slate-800 text-xs sm:text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all ${
                        formErrors.fullName ? 'border-amber-500 ring-2 ring-amber-500/10' : 'border-slate-200'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-[11px] text-amber-600 flex items-center gap-1 font-medium mt-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{formErrors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* PHONE NUMBER */}
                  <div className="space-y-1.5">
                    <label htmlFor="phoneNumber" className="text-xs font-bold text-slate-700 uppercase tracking-widest block">
                      South African Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="e.g. 083 456 7890"
                      className={`w-full py-2.5 px-4 rounded-xl bg-slate-50 border text-slate-800 text-xs sm:text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all ${
                        formErrors.phoneNumber ? 'border-amber-500 ring-2 ring-amber-500/10' : 'border-slate-200'
                      }`}
                    />
                    {formErrors.phoneNumber && (
                      <p className="text-[11px] text-amber-600 flex items-center gap-1 font-medium mt-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{formErrors.phoneNumber}</span>
                      </p>
                    )}
                  </div>

                  {/* AGE RANGE SELECT */}
                  <div className="space-y-1.5">
                    <label htmlFor="ageRange" className="text-xs font-bold text-slate-700 uppercase tracking-widest block">
                      Main Insured Age Bracket <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="ageRange"
                      name="ageRange"
                      value={formData.ageRange}
                      onChange={handleChange}
                      className={`w-full py-2.5 px-4 rounded-xl bg-slate-50 border text-slate-800 text-xs sm:text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all ${
                        formErrors.ageRange ? 'border-amber-500 ring-2 ring-amber-500/10' : 'border-slate-200'
                      }`}
                    >
                      <option value="">-- Choose Age Range --</option>
                      <option value="Ages 18 - 65">Ages 18 - 65 (Standard Member)</option>
                      <option value="Ages 66 - 75">Ages 66 - 75 (Senior Member)</option>
                      <option value="Ages 76 - 85">Ages 76 - 85 (Extended Senior)</option>
                      <option value="Ages 1 - 17">Dependent Child (Under Age 18)</option>
                    </select>
                    {formErrors.ageRange && (
                      <p className="text-[11px] text-amber-600 flex items-center gap-1 font-medium mt-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{formErrors.ageRange}</span>
                      </p>
                    )}
                  </div>

                  {/* PLAN SELECT BOX */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="selectedPlan" className="text-xs font-bold text-slate-700 uppercase tracking-widest block">
                      Select Funeral Policy Plan <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="selectedPlan"
                      name="selectedPlan"
                      value={formData.selectedPlan}
                      onChange={handleChange}
                      className={`w-full py-2.5 px-4 rounded-xl bg-slate-50 border text-slate-800 text-xs sm:text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all ${
                        formErrors.selectedPlan ? 'border-amber-500 ring-2 ring-amber-500/10' : 'border-slate-200'
                      }`}
                    >
                      {planOptions.map((opt, i) => (
                        <option key={i} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {formErrors.selectedPlan && (
                      <p className="text-[11px] text-amber-600 flex items-center gap-1 font-medium mt-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{formErrors.selectedPlan}</span>
                      </p>
                    )}
                  </div>

                  {/* ADDITIONAL MESSAGE */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-widest block">
                      Custom Message or Special Requests <span className="text-slate-400">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Please let me know if we can bundle tombstone unveilings under this quote..."
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    />
                  </div>
                </div>

                {/* DOUBLE ACTION FORM CONTROLS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <button
                    type="submit"
                    className="w-full bg-brand-blue hover:bg-slate-900 text-white font-extrabold py-3 px-5 rounded-xl text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-blue-500/10"
                    id="btn-request-quote-form"
                  >
                    <SendHorizontal className="h-4 w-4" />
                    <span>Request Quote Callback</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-extrabold py-3 px-5 rounded-xl text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    id="btn-whatsapp-quote-form"
                  >
                    <MessageSquare className="h-4 w-4 font-bold" />
                    <span>WhatsApp Quote Chat</span>
                  </button>
                </div>

                <div className="text-center">
                  <span className="text-[10px] text-slate-400 font-mono tracking-wider font-semibold">
                    POPI ACT COMPLIANT SECURITY ASSURED ● WE RESPECT YOUR DATA
                  </span>
                </div>
              </form>
            )}

          </div>

          {/* RIGHT PANEL: CONTACT INFORMATION DETAILS (COL SPAN 5) */}
          <div className="lg:col-span-5 space-y-6">

            {/* CARD 1: DIRECT CHANNELS */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-6 sm:p-8 space-y-6" id="contact-channels-card">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-mono font-bold tracking-wider text-brand-blue uppercase bg-brand-blue/5 py-1 px-2.5 rounded">
                  FSP Support Centre
                </span>
                <h3 className="text-xl font-bold font-display text-slate-950 mt-2">
                  Contact Information
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Have urgent questions? Reach out to our physical offices or write to our support desk.
                </p>
              </div>

              {/* LIST ITEMS */}
              <div className="space-y-4">
                
                {/* TIMINGS / HOURS */}
                <div className="flex gap-3.5 items-start">
                  <div className="h-9 w-9 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center shrink-0 mt-0.5 border border-brand-blue/10">
                    <Clock className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-left space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Business Hours</h4>
                    <p className="text-xs text-slate-600 font-semibold">Monday – Friday: 08:00 – 17:00</p>
                    <p className="text-xs text-slate-600 font-semibold">Saturday: 08:00 – 13:00</p>
                    <p className="text-[10px] text-slate-400">Excluding Public Holidays in South Africa</p>
                  </div>
                </div>

                {/* EMALAHLENI / JOZI LOCATION */}
                <div className="flex gap-3.5 items-start">
                  <div className="h-9 w-9 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center shrink-0 mt-0.5 border border-brand-blue/10">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-left space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Physical Head Office</h4>
                    <p className="text-xs text-slate-600 font-semibold">Corner House, 77 Commissioner Street</p>
                    <p className="text-xs text-slate-500">Johannesburg CBD, Gauteng, 2001</p>
                    <p className="text-[10px] text-slate-400">South Africa</p>
                  </div>
                </div>

                {/* EMAIL CARDS */}
                <div className="flex gap-3.5 items-start">
                  <div className="h-9 w-9 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center shrink-0 mt-0.5 border border-brand-blue/10">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-left space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Email Support Channels</h4>
                    <a href="mailto:info@tfiburial.co.za" className="text-xs text-brand-blue font-bold hover:underline block">
                      info@tfiburial.co.za
                    </a>
                    <a href="mailto:quotes@tfiburial.co.za" className="text-[11px] text-slate-500 hover:text-brand-blue block">
                      quotes@tfiburial.co.za
                    </a>
                  </div>
                </div>

                {/* PHONE NUMBERS */}
                <div className="flex gap-3.5 items-start">
                  <div className="h-9 w-9 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center shrink-0 mt-0.5 border border-brand-blue/10">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-left space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Telephone Switchboard</h4>
                    <p className="text-xs text-slate-600 font-semibold">011 000 0000</p>
                    <p className="text-[11px] text-slate-500">Advisory: +27 11 000 0001</p>
                  </div>
                </div>

              </div>

              {/* FRIENDLY SUPPORT BANNER */}
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-xs text-slate-600 leading-relaxed text-left space-y-1">
                <span className="font-bold text-slate-800 block">Respectful Companion Support</span>
                <p>
                  We understand that arranging funeral benefits can feel overwhelming. Our consultants treat every query with absolute confidentiality, dignity, and cultural respect.
                </p>
              </div>

            </div>

            {/* CARD 2: WHATSAPP DIRECT CHAT HERO BLOCK */}
            <div className="bg-gradient-to-br from-[#25D366]/15 to-[#25D366]/5 rounded-2xl border border-[#25D366]/30 shadow-sm p-6 space-y-4 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 -tr-y-4 -tr-x-4 text-[#25D366]/10 font-bold text-9xl leading-none select-none pointer-events-none transition-transform group-hover:scale-115">
                WA
              </div>

              <div className="space-y-1 relative z-10">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#128C7E] uppercase bg-[#25D366]/10 px-2 py-0.5 rounded">
                  Instant Support Message
                </span>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  Prefer Direct WhatsApp Chat?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Skip the website form entirely. Click the button below to initiate an immediate secure conversation with our central office advisor on WhatsApp.
                </p>
              </div>

              <button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-[#25D366]/10 cursor-pointer relative z-10 hover:-translate-y-0.5"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Launch Direct WhatsApp Chat</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </button>
            </div>

            {/* CARD 3: SECURITY & UNDERWRITING TRUST SHIELD */}
            <div className="bg-slate-950 text-white rounded-2xl p-6 border border-slate-905 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-brand-green" />
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-brand-green">
                  Accredited Underwriting
                </h4>
              </div>
              <p className="text-[11px] text-slate-450 leading-relaxed text-justify">
                TFI Burial Society is underwritten by Old Mutual Alternative Risk Transfer Limited (OMART) and Rand Mutual Assurance (RMA). Both are licensed life insurance providers. All claims are verified safely in compliance with POPI Act regulations to confirm the payout protection of your registered family unit.
              </p>
              <div className="pt-2 border-t border-slate-800 text-[10px] text-zinc-500 font-mono tracking-wider text-center sm:text-left">
                FINANCIAL ACCREDITED ID: FSP-45892
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER CORPORATE HIGHLIGHT ON CONTACT PAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-slate-900 font-extrabold font-display text-base flex items-center justify-center sm:justify-start gap-1.5">
              <Building2 className="h-5 w-5 text-brand-blue" />
              <span>Looking for Claim Guidelines?</span>
            </h4>
            <p className="text-xs text-slate-500 max-w-xl">
              We process funeral society claims within 24–48 hours upon submission of BI-1663 Home Affairs death forms and certified ID certificates. Contact our claims unit instantly.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <a
              href="mailto:claims@tfiburial.co.za"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <span>Email Claims Department</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
