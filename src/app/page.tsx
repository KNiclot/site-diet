'use client';
import Link from 'next/link';

const stats = [
  { value: '500+', label: 'Étudiants aidés' },
  { value: '98%', label: 'Taux de réussite' },
  { value: '30+', label: 'Fiches de révision' },
  { value: '10 ans', label: "d'expérience" },
];

const products = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="10" fill="#6B8F71" fillOpacity="0.12"/>
        <path d="M10 8h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2zm2 4v2h8v-2H12zm0 4v2h6v-2H12z" fill="#4A6741"/>
      </svg>
    ),
    title: 'Fiches de révision BTS',
    description: 'Toutes les matières du BTS Diététique condensées en fiches claires et structurées. Idéales pour réviser efficacement.',
    price: 'À partir de 9€',
    href: '/boutique',
    badge: 'Bestseller',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="10" fill="#C4956A" fillOpacity="0.12"/>
        <path d="M16 6l2.4 7.2H26l-6.2 4.6 2.4 7.2L16 20.4l-6.2 3.4 2.4-7.2L6 13.2h7.6L16 6z" fill="#C4956A"/>
      </svg>
    ),
    title: 'Annales BTS Diététique',
    description: "Sujets des années précédentes avec corrigés détaillés. Entraînez-vous dans les conditions réelles de l'examen.",
    price: 'À partir de 12€',
    href: '/boutique',
    badge: 'Nouveau',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="10" fill="#6B8F71" fillOpacity="0.12"/>
        <path d="M16 8a8 8 0 1 0 0 16A8 8 0 0 0 16 8zm1 8.41V20h-2v-4h2v.59zM16 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#4A6741"/>
      </svg>
    ),
    title: 'Pack Complet',
    description: 'Fiches + Annales + Conseils méthodologiques pour maximiser vos chances de réussite au BTS.',
    price: 'À partir de 29€',
    href: '/boutique',
    badge: 'Meilleur prix',
  },
];

const testimonials = [
  { name: 'Camille R.', role: 'Étudiante BTS 2e année', text: "Les fiches d'Éléonore sont incroyables ! Tout est clair, bien structuré. J'ai réussi mon BTS grâce à ces révisions.", note: 5 },
  { name: 'Théo M.', role: 'Diplômé BTS Diététique', text: "Les annales avec corrigés m'ont vraiment permis de comprendre ce qu'on attend de nous. Je recommande à 100%.", note: 5 },
  { name: 'Lucie D.', role: 'Étudiante BTS 1re année', text: "J'aurais adoré avoir ces fiches dès le début ! La qualité du contenu est professionnelle et pédagogique.", note: 5 },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#F6AD55" aria-hidden="true">
          <path d="M8 1l1.8 5.4H15L10.6 9.8l1.8 5.2L8 12.4 3.6 15l1.8-5.2L1 6.4h5.2L8 1z"/>
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#FAF7F2' }}>
      {/* Hero */}
      <section
        style={{ background: 'linear-gradient(160deg, #F0F7F1 0%, #FAF7F2 50%, #FDF4EC 100%)', paddingTop: '7rem', paddingBottom: '5rem' }}
        aria-labelledby="hero-heading"
      >
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}
          className="lg:grid-cols-2">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(107,143,113,0.12)', color: '#4A6741', padding: '6px 16px', borderRadius: '50px', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1l1.2 3.6H12L9 7l1.2 3.6L7 8.8 3.8 10.6 5 7 2 4.6h3.8L7 1z" fill="#4A6741"/></svg>
              BTS Diététique — Ressources officielles
            </div>
            <h1 id="hero-heading" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2, color: '#2D3748', marginBottom: '1.25rem' }}>
              Réussissez votre BTS<br />
              <span style={{ color: '#4A6741' }}>Diététique</span> avec confiance
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#718096', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '520px' }}>
              Fiches de révision claires et annales corrigées, créées par <strong style={{ color: '#2D3748' }}>Éléonore Tartonne</strong>, diététicienne diplômée. Des ressources pensées par une professionnelle, pour les futurs professionnels.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                href="/boutique"
                style={{ background: 'linear-gradient(135deg,#6B8F71,#4A6741)', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: 600, fontSize: '16px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'opacity 200ms' }}
              >
                Découvrir la boutique
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 9h12M10 5l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link
                href="/presentation"
                style={{ background: 'transparent', color: '#4A6741', padding: '13px 28px', borderRadius: '50px', fontWeight: 600, fontSize: '16px', border: '2px solid #6B8F71', textDecoration: 'none', transition: 'all 200ms' }}
              >
                Qui est Éléonore ?
              </Link>
            </div>
          </div>

          {/* Visual card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ background: 'white', borderRadius: '24px', boxShadow: '0 8px 40px rgba(107,143,113,0.12)', padding: '2rem', maxWidth: '400px', width: '100%' }}>
              <div style={{ background: 'linear-gradient(135deg,#F0F7F1,#FDF4EC)', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg,#6B8F71,#4A6741)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <path d="M18 8a10 10 0 1 0 0 20A10 10 0 0 0 18 8zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14a8 8 0 0 1-6.4-3.2C12 20.8 14.9 20 18 20s6 .8 6.4 2.8A8 8 0 0 1 18 26z" fill="white"/>
                  </svg>
                </div>
                <p style={{ fontWeight: 700, color: '#2D3748', marginBottom: '4px' }}>Éléonore Tartonne</p>
                <p style={{ fontSize: '14px', color: '#6B8F71' }}>Diététicienne diplômée d'État</p>
              </div>
              {[
                { label: 'Fiches disponibles', value: '30+', color: '#6B8F71' },
                { label: 'Annales corrigées', value: '5 ans', color: '#C4956A' },
                { label: 'Étudiants satisfaits', value: '98%', color: '#4A6741' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #E2E8E0' }}>
                  <span style={{ fontSize: '14px', color: '#718096' }}>{item.label}</span>
                  <span style={{ fontWeight: 700, color: item.color }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Chiffres clés" style={{ background: 'white', borderBottom: '1px solid #E2E8E0' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '3rem 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}
          className="sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#4A6741', fontFamily: 'var(--font-playfair),Georgia,serif' }}>{s.value}</p>
              <p style={{ fontSize: '14px', color: '#718096', marginTop: '4px' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products preview */}
      <section style={{ maxWidth: '72rem', margin: '0 auto', padding: '5rem 1.5rem' }} aria-labelledby="produits-heading">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(107,143,113,0.12)', color: '#4A6741', padding: '6px 16px', borderRadius: '50px', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Boutique
          </div>
          <h2 id="produits-heading" style={{ fontFamily: 'var(--font-playfair),Georgia,serif', fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 700, color: '#2D3748', marginBottom: '1rem' }}>
            Mes ressources pour le BTS
          </h2>
          <p style={{ color: '#718096', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
            Des outils créés avec soin, basés sur le programme officiel du BTS Diététique.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1.5rem' }}>
          {products.map((p) => (
            <div key={p.title} style={{ background: 'white', borderRadius: '20px', boxShadow: '0 2px 20px rgba(107,143,113,0.08)', padding: '2rem', position: 'relative', transition: 'transform 200ms, box-shadow 200ms' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(107,143,113,0.14)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 20px rgba(107,143,113,0.08)'; }}
            >
              <span style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: '#4A6741', color: 'white', padding: '3px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>{p.badge}</span>
              <div style={{ marginBottom: '1rem' }}>{p.icon}</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#2D3748', marginBottom: '0.75rem' }}>{p.title}</h3>
              <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: '#4A6741', fontSize: '1.125rem' }}>{p.price}</span>
                <Link href={p.href} style={{ background: 'linear-gradient(135deg,#6B8F71,#4A6741)', color: 'white', padding: '10px 20px', borderRadius: '50px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                  Voir
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/boutique" style={{ background: 'transparent', color: '#4A6741', padding: '13px 32px', borderRadius: '50px', fontWeight: 600, fontSize: '16px', border: '2px solid #6B8F71', textDecoration: 'none' }}>
            Voir tous les produits →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: 'white', padding: '5rem 0' }} aria-labelledby="temoignages-heading">
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 id="temoignages-heading" style={{ fontFamily: 'var(--font-playfair),Georgia,serif', fontSize: 'clamp(1.75rem,4vw,2.25rem)', fontWeight: 700, color: '#2D3748', marginBottom: '0.75rem' }}>
              Ce qu'ils en disent
            </h2>
            <p style={{ color: '#718096' }}>Des centaines d'étudiants ont déjà fait confiance à Éléonore</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
            {testimonials.map((t) => (
              <blockquote key={t.name} style={{ background: '#FAF7F2', borderRadius: '16px', padding: '1.75rem', border: '1px solid #E2E8E0' }}>
                <Stars count={t.note} />
                <p style={{ color: '#4A5568', lineHeight: 1.7, margin: '1rem 0', fontStyle: 'italic' }}>"{t.text}"</p>
                <footer>
                  <p style={{ fontWeight: 700, color: '#2D3748', fontSize: '14px' }}>{t.name}</p>
                  <p style={{ color: '#718096', fontSize: '13px' }}>{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: 'linear-gradient(135deg,#4A6741,#6B8F71)', padding: '4rem 1.5rem', textAlign: 'center' }} aria-labelledby="cta-heading">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 id="cta-heading" style={{ fontFamily: 'var(--font-playfair),Georgia,serif', fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
            Prêt(e) à réussir votre BTS ?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', fontSize: '1.0625rem', lineHeight: 1.75 }}>
            Téléchargez vos fiches de révision et annales dès aujourd'hui. Paiement sécurisé, accès immédiat.
          </p>
          <Link href="/boutique" style={{ background: 'white', color: '#4A6741', padding: '14px 36px', borderRadius: '50px', fontWeight: 700, fontSize: '16px', textDecoration: 'none', display: 'inline-block' }}>
            Accéder à la boutique
          </Link>
        </div>
      </section>
    </div>
  );
}
