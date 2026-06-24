import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import devanture from './assets/devanture.jpg';
import interieur from './assets/interieur.jpg';
import portrait from './assets/atelier-portrait.jpg';

const TEL = '0761691842';
const TEL_DISPLAY = '07 61 69 18 42';
const EMAIL = 'latelierms30@gmail.com';
const ADDRESS = '11 Avenue du Languedoc, 30150 Sauveterre';
const MAPS = 'https://www.google.com/maps/search/?api=1&query=11+Avenue+du+Languedoc+30150+Sauveterre';

const services = [
  ['Révision', 'Contrôle, entretien courant et suivi du véhicule.'],
  ['Diagnostic', 'Recherche de panne et conseils clairs avant intervention.'],
  ['Freinage', 'Plaquettes, disques, contrôle et remplacement.'],
  ['Batterie', 'Contrôle, remplacement et problème de démarrage.'],
  ['Transmission', 'Chaîne, courroie, galets et éléments d’usure.'],
  ['Pneus', 'Montage et remplacement de pneus moto/scooter.'],
  ['Réparation mécanique', 'Intervention sur panne, usure ou problème moteur.'],
  ['Toutes marques', 'Motos, scooters et deux-roues toutes marques.'],
];

const cities = ['Sauveterre', 'Roquemaure', 'Pujaut', 'Villeneuve-lès-Avignon', 'Les Angles', 'Avignon', 'Sorgues', 'Le Pontet', 'Orange'];

function Icon({ type }) {
  const map = {
    phone: '☎', map: '⌖', star: '★', tool: '⚙', bike: '🏍', shield: '✓', mail: '✉', clock: '◷', cart: '⌁'
  };
  return <span className="ico">{map[type] || '•'}</span>;
}

function Header({ page, setPage }) {
  const nav = [['home','Accueil'],['services','Services'],['atelier','Atelier'],['vente','Vente'],['contact','Contact']];
  const [open, setOpen] = useState(false);
  const go = (p) => { setPage(p); setOpen(false); window.scrollTo({top:0, behavior:'smooth'}); };
  return <header className="header">
    <button className="brand" onClick={() => go('home')} aria-label="Accueil L’Atelier M.S">
      <span className="brand-mark">MS</span>
      <span><b>L’Atelier M.S</b><small>Moto & Scooter</small></span>
    </button>
    <nav className={open ? 'nav nav-open' : 'nav'}>
      {nav.map(([id,label]) => <button key={id} onClick={() => go(id)} className={page===id?'active':''}>{label}</button>)}
    </nav>
    <a className="header-cta" href={`tel:${TEL}`}>Contacter</a>
    <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
  </header>;
}

function Hero({ setPage }) {
  return <section className="hero section-pad">
    <div className="hero-bg"><img src={devanture} alt="Devanture de L’Atelier M.S à Sauveterre" /></div>
    <div className="glow glow-a"></div><div className="glow glow-b"></div>
    <div className="container hero-grid">
      <div className="hero-copy reveal">
        <div className="badge"><Icon type="star" /> 5/5 Google — 63 avis clients</div>
        <h1>Réparation moto & scooter à Sauveterre</h1>
        <p>Entretien, diagnostic, révision et réparation pour deux-roues toutes marques.</p>
        <div className="actions">
          <a className="btn primary" href={`tel:${TEL}`}>Contacter l’atelier</a>
          <a className="btn ghost" href={MAPS} target="_blank">Voir l’itinéraire</a>
          <button className="btn soft" onClick={() => setPage('contact')}>Demander un devis</button>
        </div>
        <div className="trust-row">
          <span><b>2 ans</b><small>Atelier local</small></span>
          <span><b>Toutes marques</b><small>Moto & scooter</small></span>
          <span><b>Sur place</b><small>Devis & rendez-vous</small></span>
        </div>
      </div>
      <div className="hero-card reveal delay">
        <img src={interieur} alt="Intérieur de l’atelier moto et scooter" />
        <div className="floating-note"><Icon type="shield" /> Travail propre, rapide et honnête</div>
      </div>
    </div>
  </section>;
}

function ProblemCards() {
  const items = [
    ['Votre scooter ne démarre plus ?', 'Batterie, diagnostic, panne ou problème électrique.'],
    ['Besoin d’une révision ?', 'Entretien courant, vidange, contrôle et conseils.'],
    ['Freins, pneus, transmission ?', 'Remplacement, montage et pièces d’usure.'],
    ['Une moto à faire vérifier ?', 'Contrôle avant route, bruit, voyant ou comportement anormal.'],
  ];
  return <section className="section light">
    <div className="container">
      <div className="section-title reveal"><span>Problèmes courants</span><h2>Un souci avec votre deux-roues ?</h2><p>Le site doit donner une réponse simple : appelez, passez à l’atelier, repartez avec une solution claire.</p></div>
      <div className="cards four">
        {items.map((it,i)=><article className="card reveal" key={it[0]} style={{animationDelay:`${i*80}ms`}}><Icon type="tool" /><h3>{it[0]}</h3><p>{it[1]}</p></article>)}
      </div>
    </div>
  </section>;
}

function ServicesPreview({ setPage }) {
  return <section className="section dark">
    <div className="container split">
      <div className="section-title left reveal"><span>Services</span><h2>Moto, scooter et deux-roues toutes marques</h2><p>L’Atelier M.S s’occupe de la mécanique, de l’entretien et des pannes courantes. Pas de carrosserie ni d’expertise assurance.</p><button className="btn primary" onClick={()=>setPage('services')}>Voir les services</button></div>
      <div className="service-grid reveal delay">
        {services.slice(0,6).map(s=><div className="service-mini" key={s[0]}><b>{s[0]}</b><small>{s[1]}</small></div>)}
      </div>
    </div>
  </section>;
}

function Reputation() {
  return <section className="section reputation">
    <div className="container reputation-grid">
      <div className="quote-card reveal">
        <div className="stars">★★★★★</div>
        <h2>5/5 sur Google</h2>
        <p>63 avis clients. Une vraie preuve de confiance avant même de passer la porte de l’atelier.</p>
      </div>
      <div className="values reveal delay">
        {['Prix justifiés', 'Rapidité', 'Honnêteté', 'Travail propre', 'Conseils professionnels', 'Proximité locale'].map(v=><span key={v}><Icon type="shield" /> {v}</span>)}
      </div>
    </div>
  </section>;
}

function SalesPreview({ setPage }) {
  return <section className="section light">
    <div className="container sale-box reveal">
      <div><span className="eyebrow">Vente à l’atelier</span><h2>Scooters, casques, équipements et accessoires</h2><p>Pour l’achat ou les disponibilités, le plus simple est de contacter l’atelier ou de passer directement à Sauveterre.</p></div>
      <button className="btn darkbtn" onClick={()=>setPage('vente')}>Voir la vente</button>
    </div>
  </section>;
}

function LocalArea() {
  return <section className="section map-section">
    <div className="container">
      <div className="section-title reveal"><span>Zone locale</span><h2>Un atelier proche de chez vous</h2><p>L’Atelier M.S accueille les clients de Sauveterre et des communes autour.</p></div>
      <div className="city-grid reveal delay">{cities.map(c=><span key={c}>{c}</span>)}</div>
    </div>
  </section>;
}

function Home({ setPage }) {
  return <>
    <Hero setPage={setPage}/><ProblemCards/><ServicesPreview setPage={setPage}/><Reputation/><SalesPreview setPage={setPage}/><LocalArea/><ContactStrip setPage={setPage}/>
  </>;
}

function ServicesPage() {
  return <main className="page"><PageHero title="Services moto & scooter" subtitle="Entretien, diagnostic, révision et réparation mécanique pour deux-roues toutes marques." image={interieur}/>
    <section className="section light"><div className="container"><div className="cards three">{services.map((s,i)=><article className="card reveal" key={s[0]}><Icon type="tool"/><h3>{s[0]}</h3><p>{s[1]}</p></article>)}</div><p className="note">L’Atelier M.S ne réalise pas la carrosserie et ne prend pas en charge les expertises assurance.</p></div></section>
    <ContactStrip />
  </main>;
}

function AtelierPage() {
  return <main className="page"><PageHero title="Un atelier local à Sauveterre" subtitle="Un lieu simple, propre et professionnel pour l’entretien et la réparation de vos deux-roues." image={portrait}/>
    <section className="section light"><div className="container split"><div className="section-title left reveal"><span>Confiance</span><h2>Des clients rassurés avant de venir</h2><p>Avec 5/5 sur Google et 63 avis clients, L’Atelier M.S met en avant ce qui compte vraiment : sérieux, rapidité, honnêteté et travail propre.</p></div><img className="rounded-img reveal delay" src={interieur} alt="Atelier deux-roues" /></div></section>
    <Reputation/><ContactStrip />
  </main>;
}

function VentePage() {
  return <main className="page"><PageHero title="Vente scooters & équipements" subtitle="Scooters, casques, équipements et accessoires disponibles à l’atelier selon arrivages." image={devanture}/>
    <section className="section light"><div className="container cards three"><article className="card reveal"><Icon type="bike"/><h3>Scooters</h3><p>Contactez l’atelier pour connaître les disponibilités et obtenir des conseils.</p></article><article className="card reveal"><Icon type="shield"/><h3>Casques</h3><p>Des équipements utiles pour rouler mieux équipé au quotidien.</p></article><article className="card reveal"><Icon type="cart"/><h3>Accessoires</h3><p>Accessoires et équipements selon les besoins et les arrivages.</p></article></div></section>
    <ContactStrip />
  </main>;
}

function ContactPage() {
  return <main className="page"><PageHero title="Contact & devis" subtitle="Pour un devis, un rendez-vous ou une question, contactez l’atelier ou envoyez une demande par email." image={devanture}/>
    <section className="section light"><div className="container contact-grid"><ContactInfo/><QuoteForm/></div></section>
  </main>;
}

function PageHero({ title, subtitle, image }) {
  return <section className="page-hero"><img src={image} alt="L’Atelier M.S"/><div className="page-hero-overlay"></div><div className="container"><div className="badge"><Icon type="star"/> 5/5 Google — 63 avis</div><h1>{title}</h1><p>{subtitle}</p></div></section>
}

function ContactInfo() {
  return <aside className="contact-info reveal"><h2>L’Atelier M.S</h2><p><Icon type="phone"/> <a href={`tel:${TEL}`}>{TEL_DISPLAY}</a></p><p><Icon type="mail"/> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p><p><Icon type="map"/> <a href={MAPS} target="_blank">{ADDRESS}</a></p><div className="hours"><h3>Horaires</h3><p>Dimanche : fermé<br/>Lundi : fermé<br/>Mardi au vendredi : 09:30–12:00, 13:00–19:00<br/>Samedi : 09:00–13:00</p></div></aside>
}

function QuoteForm() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', vehicle:'', model:'', cc:'', request:'Entretien', message:'' });
  const set = e => setForm({...form, [e.target.name]: e.target.value});
  const mail = useMemo(() => {
    const subject = encodeURIComponent('Demande de devis — L’Atelier M.S');
    const body = encodeURIComponent(`Nom/prénom : ${form.name}\nTéléphone : ${form.phone}\nEmail : ${form.email}\nType de véhicule : ${form.vehicle}\nMarque/modèle : ${form.model}\nCylindrée : ${form.cc}\nDemande : ${form.request}\n\nMessage :\n${form.message}`);
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }, [form]);
  return <form className="quote-form reveal delay" onSubmit={(e)=>{e.preventDefault(); window.location.href = mail;}}>
    <h2>Demande de devis</h2>
    <div className="form-row"><input name="name" placeholder="Nom/prénom" onChange={set}/><input name="phone" placeholder="Téléphone" onChange={set}/></div>
    <input name="email" placeholder="Email" onChange={set}/>
    <div className="form-row"><input name="vehicle" placeholder="Type de véhicule" onChange={set}/><input name="model" placeholder="Marque / modèle" onChange={set}/></div>
    <div className="form-row"><input name="cc" placeholder="Cylindrée" onChange={set}/><select name="request" onChange={set}><option>Entretien</option><option>Panne</option><option>Révision</option><option>Achat scooter</option><option>Équipement</option><option>Autre</option></select></div>
    <textarea name="message" placeholder="Votre message" rows="5" onChange={set}></textarea>
    <button className="btn primary" type="submit">Envoyer la demande par email</button>
  </form>
}

function ContactStrip({ setPage }) {
  return <section className="contact-strip"><div className="container strip-grid"><div><b>{TEL_DISPLAY}</b><span>Contact, devis et rendez-vous</span></div><a className="btn primary" href={`tel:${TEL}`}>Contacter l’atelier</a><a className="btn ghost darkghost" href={MAPS} target="_blank">Itinéraire</a><button className="btn soft" onClick={()=>setPage && setPage('contact')}>Devis</button></div></section>
}

function Footer({ setPage }) {
  return <footer className="footer"><div className="container footer-grid"><div><h3>L’Atelier M.S</h3><p>Moto & Scooter — Sauveterre</p></div><div><p>{ADDRESS}</p><p><a href={`tel:${TEL}`}>{TEL_DISPLAY}</a></p></div><div className="footer-links">{['Accueil','Services','Atelier','Vente','Contact'].map((n,i)=><button key={n} onClick={()=>setPage(['home','services','atelier','vente','contact'][i])}>{n}</button>)}</div></div></footer>
}

function App() {
  const [page, setPage] = useState('home');
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [page]);
  const pages = { home:<Home setPage={setPage}/>, services:<ServicesPage/>, atelier:<AtelierPage/>, vente:<VentePage/>, contact:<ContactPage/> };
  return <><Header page={page} setPage={setPage}/>{pages[page]}<Footer setPage={setPage}/><a className="mobile-call" href={`tel:${TEL}`}>☎ {TEL_DISPLAY}</a></>;
}

createRoot(document.getElementById('root')).render(<App />);
