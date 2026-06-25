'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E2E8E0]">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between" role="navigation" aria-label="Navigation principale">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[#4A6741]">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <circle cx="14" cy="14" r="14" fill="#6B8F71" fillOpacity="0.15"/>
            <path d="M14 6C10.686 6 8 8.686 8 12c0 4 6 10 6 10s6-6 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#4A6741"/>
          </svg>
          NutriVie
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { href: '/programme', label: 'Programme' },
            { href: '/recettes', label: 'Recettes' },
            { href: '/suivi', label: 'Mon Suivi' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#718096] hover:text-[#4A6741] font-medium transition-colors duration-200 text-sm"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/programme"
            className="bg-gradient-to-r from-[#6B8F71] to-[#4A6741] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-[#A8C5A0] focus-visible:outline-offset-2"
          >
            Commencer
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#F0F7F1] transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="#4A6741" strokeWidth="2" strokeLinecap="round"/>
            ) : (
              <>
                <path d="M3 6h16M3 11h16M3 16h16" stroke="#4A6741" strokeWidth="2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-[#E2E8E0] px-4 py-4 flex flex-col gap-4">
          {[
            { href: '/programme', label: 'Programme' },
            { href: '/recettes', label: 'Recettes' },
            { href: '/suivi', label: 'Mon Suivi' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#2D3748] font-medium py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/programme"
            className="bg-gradient-to-r from-[#6B8F71] to-[#4A6741] text-white px-5 py-3 rounded-full text-sm font-semibold text-center"
            onClick={() => setOpen(false)}
          >
            Commencer gratuitement
          </Link>
        </div>
      )}
    </header>
  );
}
