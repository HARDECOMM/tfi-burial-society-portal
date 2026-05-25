import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Shield, Phone, FileText } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Plans', path: '/plans' },
    { name: 'Contact & Claims', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-blue-dark text-white shadow-lg border-b border-white/10" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Branding */}
          <Link to="/" className="flex items-center space-x-3 group" id="nav-logo">
            <div className="bg-gradient-to-br from-brand-green to-teal-500 p-2.5 rounded-lg shadow-md group-hover:scale-105 transition-transform">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="block text-lg font-bold tracking-tight text-white leading-tight font-display">
                TFI BURIAL SOCIETY
              </span>
              <span className="block text-xs text-slate-300 font-medium tracking-wide flex items-center gap-1">
                <span>Policy Portal</span>
                <span className="w-1 h-1 bg-brand-green rounded-full"></span>
                <span className="text-[10px] text-brand-green">Underwritten</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors py-2 px-1 relative ${
                      isActive
                        ? 'text-brand-green font-semibold'
                        : 'text-slate-200 hover:text-white'
                    }`
                  }
                  id={`nav-link-${link.name.toLowerCase().replace(/[^a-z]/g, '')}`}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-green rounded-full shadow-glow"></span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-3 pl-4 border-l border-white/15">
              <a 
                href="tel:+27110000000" 
                className="hidden lg:flex items-center text-xs text-slate-300 hover:text-white transition-colors gap-1.5 mr-2"
              >
                <Phone className="h-3.5 w-3.5 text-brand-green" />
                <span>011 000 0000</span>
              </a>
              <Link
                to="/contact"
                className="bg-brand-green hover:bg-emerald-500 text-brand-blue-dark font-semibold text-xs py-2.5 px-4 rounded-md transition-all shadow-md hover:shadow-brand-green/20"
                id="nav-cta-btn"
              >
                Get Callback
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-white/10" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-800 text-brand-green border-l-4 border-brand-green'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
                id={`mobile-nav-${link.name.toLowerCase().replace(/[^a-z]/g, '')}`}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 pb-2 border-t border-white/10 px-3">
              <div className="flex items-center gap-2 mb-3 text-slate-300">
                <Phone className="h-4 w-4 text-brand-green" />
                <span className="text-sm">011 000 0000</span>
              </div>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-brand-green hover:bg-emerald-500 text-brand-blue-dark font-semibold py-2.5 px-4 rounded-md transition-all"
                id="mobile-nav-cta"
              >
                Request Free Callback
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
