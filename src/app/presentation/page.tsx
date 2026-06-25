import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Éléonore Tartonne — Diététicienne | NutriVie',
  description: "Découvrez le parcours d'Éléonore Tartonne, diététicienne diplômée d'État et créatrice de ressources pédagogiques pour le BTS Diététique.",
};

const parcours = [
  { annee: '2013', titre: 'Bac S mention Bien', lieu: 'Lycée Jean Moulin' },
  { annee: '2015', titre: 'BTS Diététique — Major de promotion', lieu: 'Institut de Formation en Diététique' },
  { annee: '2016', titre: 'Licence Pro Nutrition & Santé', lieu: 'Université de Bordeaux' },
  { annee: '2017', titre: 'Installation en cabinet libéral', lieu: 'Lyon' },
  { annee: '2020', titre: 'Création de ressources pédagogiques BTS', lieu: 'NutriVie' },
];

const competences = [
  'Nutrition clinique et thérapeutique',
  'Diététique sportive',
  'Accompagnement perte de poids',
  'Troubles du comportement alimentaire',
  'Pédagogie et création de ressources',
  'Suivi personnalisé en cabinet',
];

const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#6B8F71" fillOpacity="0.12"/>
        <path d="M14 12h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2zm2 4v2h8v-2H16zm0 4v2h6v-2H16z" fill="#4A6741"/>
      </svg>
    ),
    titre: 'Fiches de révision BTS',
    description: "Des fiches synthétiques couvrant l'intégralité du programme BTS Diététique : biochimie, physiologie, diététique clinique, technologie culinaire…",
    lien: '/boutique',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#C4956A" fillOpacity="0.12"/>
        <path d="M20 10l2.4 7.2H30l-6.2 4.6 2.4 7.2L20 25.4l-6.2 3.4 2.4-7.2L10 17.2h7.6L20 10z" fill="#C4956A"/>
      </svg>
    ),
    titre: 'Annales corrigées',
    description: "Sujets des 5 dernières années avec corrigés détaillés et méthodologie. Entraînez-vous dans les conditions de l'examen et comprenez les attentes du jury.",
    lien: '/boutique',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#6B8F71" fillOpacity="0.12"/>
        <path d="M20 14a6 6 0 1 0 0 12A6 6 0 0 0 20 14zm0 10a4 4 0 0 1-3.46-2c.96-.6 2.15-1 3.46-1s2.5.4 3.46 1A4 4 0 0 1 20 24zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="#4A6741"/>
      </svg>
    ),
    titre: 'Accompagnement en cabinet',
    description: 'Consultations individuelles à Lyon : bilan nutritionnel, programme personnalisé, suivi régulier. Pour les patients comme pour les étudiants en BTS.',
    lien: '/contact',
  },
];

export default function PresentationPage() {
  return (
    <div style={{ backgroundColor: '#FAF7F2' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#F0F7F1 0%,#FAF7F2 60%,#FDF4EC 100%)', paddingTop: '7rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="md:grid-cols-2">

          {/* Avatar placeholder */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '280px', height: '320px', borderRadius: '24px', background: 'linear-gradient(145deg,#A8C5A0,#6B8F71)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 60px rgba(107,143,113,0.25)' }}>
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-label="Photo d'Éléonore Tartonne">
                  <circle cx="50" cy="38" r="22" fill="white" fillOpacity="0.9"/>
                  <path d="M14 90c0-19.9 16.1-36 36-36s36 16.1 36 36" fill="white" fillOpacity="0.9"/>
                </svg>
              </div>
              <div style={{ position: 'absolute', bottom: '-1rem', right: '-1rem', background: 'white', borderRadius: '16px', padding: '12px 20px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <p style={{ fontSize: '12px', color: '#718096', margin: 0 }}>Diplômée d'État</p>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#4A6741', margin: 0 }}>Diététicienne ✓</p>
              </div>
            </div>
          </div>

          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(107,143,113,0.12)', color: '#4A6741', padding: '6px 16px', borderRadius: '50px', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Qui suis-je ?
            </div>
            <h1 style={{ fontFamily: 'var(--font-playfair),Georgia,serif', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: '#2D3748', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              Éléonore <span style={{ color: '#4A6741' }}>Tartonne</span>
            </h1>
            <p style={{ fontSize: '1.0625rem', color: '#718096', lineHeight: 1.8, marginBottom: '1rem' }}>
              Diététicienne diplômée d'État, je suis passionnée par la nutrition et l'enseignement depuis plus de 10 ans. Après avoir été <strong style={{ color: '#2D3748' }}>major de promotion</strong> de mon BTS Diététique, j'ai souhaité aider les futurs professionnels à réussir leurs études.
            </p>
            <p style={{ fontSize: '1.0625rem', color: '#718096', lineHeight: 1.8, marginBottom: '2rem' }}>
              J'exerce en <strong style={{ color: '#2D3748' }}>cabinet libéral à Lyon</strong> et je crée des ressources pédagogiques de qualité pour les étudiants en BTS Diététique : fiches de révision, annales corrigées et conseils méthodologiques.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/boutique" style={{ background: 'linear-gradient(135deg,#6B8F71,#4A6741)', color: 'white', padding: '13px 28px', borderRadius: '50px', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>
                Voir la boutique
              </Link>
              <Link href="/contact" style={{ background: 'transparent', color: '#4A6741', padding: '12px 24px', borderRadius: '50px', fontWeight: 600, fontSize: '15px', border: '2px solid #6B8F71', textDecoration: 'none' }}>
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section style={{ maxWidth: '72rem', margin: '0 auto', padding: '5rem 1.5rem' }} aria-labelledby="parcours-heading">
        <h2 id="parcours-heading" style={{ fontFamily: 'var(--font-playfair),Georgia,serif', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, color: '#2D3748', marginBottom: '2.5rem', textAlign: 'center' }}>
          Mon parcours
        </h2>
        <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(180deg,#6B8F71,#A8C5A0)' }} aria-hidden="true"/>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {parcours.map((p) => (
              <div key={p.annee} style={{ paddingLeft: '3rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '12px', top: '4px', width: '18px', height: '18px', borderRadius: '50%', background: '#6B8F71', border: '3px solid white', boxShadow: '0 0 0 2px #6B8F71' }} aria-hidden="true"/>
                <p style={{ fontSize: '13px', color: '#6B8F71', fontWeight: 600, marginBottom: '4px' }}>{p.annee}</p>
                <p style={{ fontWeight: 700, color: '#2D3748', marginBottom: '2px' }}>{p.titre}</p>
                <p style={{ fontSize: '14px', color: '#718096' }}>{p.lieu}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section style={{ background: 'white', padding: '5rem 0' }} aria-labelledby="competences-heading">
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 id="competences-heading" style={{ fontFamily: 'var(--font-playfair),Georgia,serif', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, color: '#2D3748', marginBottom: '2rem', textAlign: 'center' }}>
            Mes domaines d'expertise
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', maxWidth: '640px', margin: '0 auto' }}>
            {competences.map((c) => (
              <span key={c} style={{ background: 'rgba(107,143,113,0.1)', color: '#4A6741', padding: '8px 18px', borderRadius: '50px', fontSize: '14px', fontWeight: 600 }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ maxWidth: '72rem', margin: '0 auto', padding: '5rem 1.5rem' }} aria-labelledby="services-heading">
        <h2 id="services-heading" style={{ fontFamily: 'var(--font-playfair),Georgia,serif', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, color: '#2D3748', marginBottom: '0.75rem', textAlign: 'center' }}>
          Ce que je propose
        </h2>
        <p style={{ textAlign: 'center', color: '#718096', marginBottom: '2.5rem' }}>Des ressources et services conçus pour les étudiants et les patients</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
          {services.map((s) => (
            <div key={s.titre} style={{ background: 'white', borderRadius: '20px', boxShadow: '0 2px 20px rgba(107,143,113,0.08)', padding: '2rem' }}>
              <div style={{ marginBottom: '1.25rem' }}>{s.icon}</div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#2D3748', marginBottom: '0.75rem' }}>{s.titre}</h3>
              <p style={{ fontSize: '14px', color: '#718096', lineHeight: 1.7, marginBottom: '1.5rem' }}>{s.description}</p>
              <Link href={s.lien} style={{ color: '#4A6741', fontWeight: 600, fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                En savoir plus →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
