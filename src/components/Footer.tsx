import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2D3748] text-white py-16 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-bold text-xl text-[#A8C5A0] mb-4">
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <circle cx="14" cy="14" r="14" fill="#6B8F71" fillOpacity="0.3"/>
              <path d="M14 6C10.686 6 8 8.686 8 12c0 4 6 10 6 10s6-6 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#A8C5A0"/>
            </svg>
            NutriVie
          </div>
          <p className="text-[#A0AEC0] text-sm leading-relaxed max-w-xs">
            Votre partenaire santé pour une alimentation équilibrée, des recettes savoureuses et un suivi personnalisé.
          </p>
          <p className="mt-6 text-xs text-[#718096]">© {new Date().getFullYear()} NutriVie. Tous droits réservés.</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#A8C5A0] mb-4">Navigation</h3>
          <ul className="space-y-3 text-sm text-[#A0AEC0]">
            {[
              { href: '/programme', label: 'Programme' },
              { href: '/recettes', label: 'Recettes' },
              { href: '/suivi', label: 'Mon Suivi' },
              { href: '/contact', label: 'Contact' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[#A8C5A0] transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#A8C5A0] mb-4">Légal</h3>
          <ul className="space-y-3 text-sm text-[#A0AEC0]">
            <li><Link href="#" className="hover:text-[#A8C5A0] transition-colors">Mentions légales</Link></li>
            <li><Link href="#" className="hover:text-[#A8C5A0] transition-colors">Confidentialité</Link></li>
            <li><Link href="#" className="hover:text-[#A8C5A0] transition-colors">CGU</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
