import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Boutique — Fiches BTS Diététique | NutriVie',
  description: 'Fiches de révision et annales corrigées pour le BTS Diététique. Téléchargement PDF immédiat après paiement sécurisé par Stripe.',
};

const products = [
  {
    id: 'fiches-biochimie',
    titre: 'Fiches Biochimie & Nutrition',
    description: 'Glucides, lipides, protéines, vitamines, minéraux. Tout le métabolisme en fiches claires avec schémas explicatifs.',
    details: ['12 fiches détaillées', 'Schémas bilan inclus', 'Tableau récapitulatif', 'Compatible épreuves E1 et E2'],
    prix: 9,
    badge: 'Bestseller',
    badgeColor: '#4A6741',
    categorie: 'Fiches de révision',
    pages: '28 pages PDF',
    stripe_link: '#paiement-biochimie',
  },
  {
    id: 'fiches-clinique',
    titre: 'Fiches Diététique Clinique',
    description: 'Pathologies nutritionnelles, régimes thérapeutiques, enquêtes alimentaires. L'essentiel pour les épreuves pratiques.',
    details: ['15 fiches par pathologie', 'Fiches régimes spécifiques', 'Protocoles de bilan', 'Compatible épreuve E3'],
    prix: 11,
    badge: 'Populaire',
    badgeColor: '#6B8F71',
    categorie: 'Fiches de révision',
    pages: '35 pages PDF',
    stripe_link: '#paiement-clinique',
  },
  {
    id: 'fiches-techno',
    titre: 'Fiches Technologie Culinaire',
    description: 'Techniques culinaires, analyse sensorielle, étiquetage alimentaire. Toutes les notions pour l'épreuve pratique.',
    details: ['10 fiches techniques', 'Fiches textures modifiées', 'Calculs de rations', 'Fiches réglementaires'],
    prix: 9,
    badge: null,
    badgeColor: '',
    categorie: 'Fiches de révision',
    pages: '24 pages PDF',
    stripe_link: '#paiement-techno',
  },
  {
    id: 'pack-fiches-complet',
    titre: 'Pack Fiches Complet',
    description: 'Les 3 packs de fiches réunis : Biochimie, Clinique et Technologie Culinaire. Économisez 8€ vs à l'unité.',
    details: ['37 fiches au total', '87 pages de contenu', 'Accès à vie', 'Mises à jour incluses'],
    prix: 21,
    badge: 'Meilleur prix',
    badgeColor: '#C4956A',
    categorie: 'Pack',
    pages: '87 pages PDF',
    stripe_link: '#paiement-pack-fiches',
  },
  {
    id: 'annales-2022-2023',
    titre: 'Annales BTS 2022–2023',
    description: 'Sujets officiels des sessions 2022 et 2023 avec corrigés détaillés et conseils de présentation pour chaque épreuve.',
    details: ['4 épreuves complètes', 'Corrigés détaillés', 'Grilles de notation', 'Conseils du jury'],
    prix: 12,
    badge: 'Nouveau',
    badgeColor: '#4A6741',
    categorie: 'Annales',
    pages: '64 pages PDF',
    stripe_link: '#paiement-annales-2223',
  },
  {
    id: 'annales-2019-2021',
    titre: 'Annales BTS 2019–2021',
    description: 'Sujets des sessions 2019, 2020 et 2021 avec corrigés et méthodologie. Idéal pour varier les entraînements.',
    details: ['6 épreuves complètes', 'Corrigés détaillés', 'Analyse des tendances', 'Méthodologie incluse'],
    prix: 14,
    badge: null,
    badgeColor: '',
    categorie: 'Annales',
    pages: '90 pages PDF',
    stripe_link: '#paiement-annales-1921',
  },
  {
    id: 'pack-ultimate',
    titre: 'Pack Ultimate BTS',
    description: 'Tout pour réussir : toutes les fiches + toutes les annales + guide méthodologique exclusif. L'offre la plus complète.',
    details: ['37 fiches de révision', 'Annales 2019–2023', 'Guide méthodologique', 'Support par e-mail inclus'],
    prix: 39,
    badge: '⭐ Recommandé',
    badgeColor: '#C4956A',
    categorie: 'Pack',
    pages: '250+ pages PDF',
    stripe_link: '#paiement-ultimate',
  },
];

const categories = ['Tous', 'Fiches de révision', 'Annales', 'Pack'];

export default function BoutiquePage() {
  return (
    <div style={{ backgroundColor: '#FAF7F2' }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(160deg,#F0F7F1 0%,#FAF7F2 60%,#FDF4EC 100%)', paddingTop: '7rem', paddingBottom: '3rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(107,143,113,0.12)', color: '#4A6741', padding: '6px 16px', borderRadius: '50px', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Boutique
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair),Georgia,serif', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: '#2D3748', marginBottom: '1rem' }}>
            Ressources BTS Diététique
          </h1>
          <p style={{ color: '#718096', fontSize: '1.0625rem', lineHeight: 1.75 }}>
            Fiches de révision et annales corrigées créées par Éléonore Tartonne, diététicienne et ancienne major de promotion. Téléchargement PDF immédiat après paiement.
          </p>

          {/* Garanties */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {[
              { icon: '🔒', label: 'Paiement sécurisé Stripe' },
              { icon: '⚡', label: 'Téléchargement immédiat' },
              { icon: '✉️', label: 'PDF par e-mail aussi' },
            ].map((g) => (
              <span key={g.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'white', padding: '8px 14px', borderRadius: '50px', fontSize: '13px', color: '#718096', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <span aria-hidden="true">{g.icon}</span>{g.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Produits */}
      <section style={{ maxWidth: '72rem', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.5rem' }}>
          {products.map((p) => (
            <article key={p.id} style={{ background: 'white', borderRadius: '20px', boxShadow: '0 2px 20px rgba(107,143,113,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', border: p.badge === '⭐ Recommandé' ? '2px solid #C4956A' : '1px solid #E2E8E0' }}>
              {p.badge && (
                <div style={{ background: p.badgeColor, color: 'white', padding: '6px 0', textAlign: 'center', fontSize: '13px', fontWeight: 600 }}>
                  {p.badge}
                </div>
              )}
              <div style={{ padding: '1.75rem', flexGrow: 1 }}>
                <span style={{ display: 'inline-block', background: 'rgba(107,143,113,0.1)', color: '#4A6741', padding: '3px 10px', borderRadius: '50px', fontSize: '12px', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {p.categorie}
                </span>
                <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#2D3748', marginBottom: '0.625rem' }}>{p.titre}</h2>
                <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.7, marginBottom: '1.25rem' }}>{p.description}</p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {p.details.map((d) => (
                    <li key={d} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#4A5568' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="8" fill="#6B8F71" fillOpacity="0.12"/>
                        <path d="M5 8l2 2 4-4" stroke="#4A6741" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>

                <p style={{ fontSize: '12px', color: '#A0AEC0', marginBottom: '0.5rem' }}>{p.pages}</p>
              </div>

              <div style={{ padding: '0 1.75rem 1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#4A6741', fontFamily: 'var(--font-playfair),Georgia,serif' }}>
                  {p.prix}€
                </span>
                <a
                  href={p.stripe_link}
                  style={{ background: 'linear-gradient(135deg,#6B8F71,#4A6741)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  aria-label={`Acheter ${p.titre} — ${p.prix}€`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 3h2l2 7h6l2-5H6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="13" r="1" fill="white"/>
                    <circle cx="13" cy="13" r="1" fill="white"/>
                  </svg>
                  Acheter
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Info paiement */}
        <div style={{ marginTop: '3rem', background: 'white', borderRadius: '20px', padding: '2rem', boxShadow: '0 2px 20px rgba(107,143,113,0.06)', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <rect width="40" height="40" rx="10" fill="#6B8F71" fillOpacity="0.1"/>
              <path d="M10 16h20v12a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V16zm0 0V14a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H10z" stroke="#4A6741" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M14 22h4" stroke="#4A6741" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div>
              <p style={{ fontWeight: 700, color: '#2D3748', fontSize: '14px', margin: 0 }}>Paiement sécurisé par Stripe</p>
              <p style={{ color: '#718096', fontSize: '13px', margin: 0 }}>CB, Apple Pay, Google Pay — chiffrement SSL</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <rect width="40" height="40" rx="10" fill="#6B8F71" fillOpacity="0.1"/>
              <path d="M20 12v8l5 3" stroke="#4A6741" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="20" cy="20" r="9" stroke="#4A6741" strokeWidth="1.5"/>
            </svg>
            <div>
              <p style={{ fontWeight: 700, color: '#2D3748', fontSize: '14px', margin: 0 }}>Accès instantané</p>
              <p style={{ color: '#718096', fontSize: '13px', margin: 0 }}>PDF téléchargeable en quelques secondes</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <rect width="40" height="40" rx="10" fill="#6B8F71" fillOpacity="0.1"/>
              <path d="M14 20h12M14 24h8" stroke="#4A6741" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M10 14h20v16H10z" stroke="#4A6741" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <div>
              <p style={{ fontWeight: 700, color: '#2D3748', fontSize: '14px', margin: 0 }}>Des questions ?</p>
              <p style={{ color: '#718096', fontSize: '13px', margin: 0 }}>
                <Link href="/contact" style={{ color: '#4A6741' }}>Contactez Éléonore</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
