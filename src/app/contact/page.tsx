import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Éléonore Tartonne | NutriVie',
  description: 'Contactez Éléonore Tartonne, diététicienne. Pour toute question sur les ressources BTS ou une consultation en cabinet.',
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#FAF7F2' }}>
      <section style={{ background: 'linear-gradient(160deg,#F0F7F1 0%,#FAF7F2 60%,#FDF4EC 100%)', paddingTop: '7rem', paddingBottom: '3rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(107,143,113,0.12)', color: '#4A6741', padding: '6px 16px', borderRadius: '50px', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Contact
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair),Georgia,serif', fontSize: 'clamp(2rem,5vw,2.75rem)', fontWeight: 700, color: '#2D3748', marginBottom: '1rem' }}>
            Écrivez à Éléonore
          </h1>
          <p style={{ color: '#718096', fontSize: '1.0625rem', lineHeight: 1.75 }}>
            Une question sur les ressources BTS, une demande de consultation, ou simplement un mot ? Je vous réponds sous 48h.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '72rem', margin: '0 auto', padding: '3rem 1.5rem 5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="md:grid-cols-3">

        {/* Infos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 8l9 6 9-6M3 8v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8M3 8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1" stroke="#4A6741" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              label: 'E-mail',
              value: 'eleonore@nutrivie.fr',
              href: 'mailto:eleonore@nutrivie.fr',
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2C8.686 2 6 4.686 6 8c0 5 6 12 6 12s6-7 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" stroke="#4A6741" strokeWidth="1.5"/>
                </svg>
              ),
              label: 'Cabinet',
              value: 'Lyon, France',
              href: null,
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="#4A6741" strokeWidth="1.5"/>
                  <path d="M12 7v5l3 3" stroke="#4A6741" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              label: 'Délai de réponse',
              value: 'Sous 48h ouvrées',
              href: null,
            },
          ].map((item) => (
            <div key={item.label} style={{ background: 'white', borderRadius: '16px', padding: '1.25rem', boxShadow: '0 2px 12px rgba(107,143,113,0.08)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(107,143,113,0.1)', borderRadius: '10px', padding: '10px', flexShrink: 0 }}>{item.icon}</div>
              <div>
                <p style={{ fontSize: '13px', color: '#718096', marginBottom: '2px' }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} style={{ fontWeight: 700, color: '#4A6741', textDecoration: 'none', fontSize: '15px' }}>{item.value}</a>
                ) : (
                  <p style={{ fontWeight: 700, color: '#2D3748', fontSize: '15px', margin: 0 }}>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Formulaire */}
        <div style={{ gridColumn: 'span 2', background: 'white', borderRadius: '24px', padding: '2rem', boxShadow: '0 2px 20px rgba(107,143,113,0.08)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#2D3748', marginBottom: '1.5rem' }}>Envoyer un message</h2>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            aria-label="Formulaire de contact"
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label htmlFor="prenom" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#2D3748', marginBottom: '6px' }}>Prénom *</label>
                <input id="prenom" name="prenom" type="text" required placeholder="Marie" style={{ outline: 'none', border: '2px solid #E2E8E0', borderRadius: '12px', padding: '12px 16px', fontSize: '15px', width: '100%', color: '#2D3748', background: 'white', transition: 'border-color 200ms' }}
                />
              </div>
              <div>
                <label htmlFor="nom" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#2D3748', marginBottom: '6px' }}>Nom *</label>
                <input id="nom" name="nom" type="text" required placeholder="Dupont" style={{ outline: 'none', border: '2px solid #E2E8E0', borderRadius: '12px', padding: '12px 16px', fontSize: '15px', width: '100%', color: '#2D3748', background: 'white' }}/>
              </div>
            </div>

            <div>
              <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#2D3748', marginBottom: '6px' }}>E-mail *</label>
              <input id="email" name="email" type="email" required placeholder="marie@exemple.fr" style={{ outline: 'none', border: '2px solid #E2E8E0', borderRadius: '12px', padding: '12px 16px', fontSize: '15px', width: '100%', color: '#2D3748', background: 'white' }}/>
            </div>

            <div>
              <label htmlFor="sujet" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#2D3748', marginBottom: '6px' }}>Sujet *</label>
              <select id="sujet" name="sujet" required style={{ outline: 'none', border: '2px solid #E2E8E0', borderRadius: '12px', padding: '12px 16px', fontSize: '15px', width: '100%', color: '#2D3748', background: 'white' }}>
                <option value="">Choisir un sujet…</option>
                <option value="fiches">Question sur les fiches de révision</option>
                <option value="annales">Question sur les annales</option>
                <option value="paiement">Problème de paiement / téléchargement</option>
                <option value="consultation">Demande de consultation diététique</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#2D3748', marginBottom: '6px' }}>Message *</label>
              <textarea id="message" name="message" required rows={5} placeholder="Votre message…" style={{ outline: 'none', border: '2px solid #E2E8E0', borderRadius: '12px', padding: '12px 16px', fontSize: '15px', width: '100%', color: '#2D3748', background: 'white', resize: 'vertical' }}/>
            </div>

            <button type="submit" style={{ background: 'linear-gradient(135deg,#6B8F71,#4A6741)', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: 700, fontSize: '16px', border: 'none', cursor: 'pointer', alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 9h14M10 4l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Envoyer le message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
