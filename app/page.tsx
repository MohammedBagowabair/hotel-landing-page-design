'use client'

import { useState } from 'react'
import { ArrowDown, ArrowRight, Menu, Play, X } from 'lucide-react'
import type { CSSProperties } from 'react'
import { BASE, WA_DISPLAY, img, waLink } from '@/lib/site'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { I18nProvider, LangSelect, useI18n } from '@/lib/i18n'

const TITLE = 'Selayang House | Rainforest Retreat in Genting Highlands, Malaysia'
const DESCRIPTION = 'Selayang House is a slow-living rainforest retreat in Genting Highlands, Malaysia. Garden terraces, suites and a pool villa. Enquire on WhatsApp +60 11-5119 8497.'
const WA_DEFAULT = 'Hello Selayang House, I would like to enquire about a stay.'

const rooms = [
  { name: 'Garden Terrace', detail: 'King bed · 48 m²', price: 'From MYR 980', image: 'garden-terrace' },
  { name: 'Rainforest Suite', detail: 'King bed · 82 m²', price: 'From MYR 1,480', image: 'rainforest-suite' },
  { name: 'The Canopy Villa', detail: 'Private pool · 140 m²', price: 'From MYR 2,680', image: 'canopy-villa' },
]

export default function Page() {
  return (
    <I18nProvider titleKey={TITLE} descKey={DESCRIPTION} detectOnMount>
      <Home />
    </I18nProvider>
  )
}

function Home() {
  const { t, h } = useI18n()
  const wa = waLink(t(WA_DEFAULT))
  const [menuOpen, setMenuOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [activeRoom, setActiveRoom] = useState(0)
  const [arrival, setArrival] = useState('')
  const [departure, setDeparture] = useState('')
  const [guests, setGuests] = useState('2')
  const imageVars = {
    '--img-hero': img('hero'), '--img-hero-m': img('hero-1600'), '--img-room': img('room'), '--img-dining': img('dining'),
    '--img-forest': img('forest'), '--img-food': img('food'), '--img-closing': img('closing'), '--img-closing-m': img('closing-900'),
  } as CSSProperties
  const sendBooking = () => {
    const msg = t('Hello Selayang House, I would like to check availability.\nArrival: {a}\nDeparture: {d}\nGuests: {g}').replace('{a}', arrival || t('flexible')).replace('{d}', departure || t('flexible')).replace('{g}', guests)
    window.open(waLink(msg), '_blank', 'noopener')
    setBookingOpen(false)
  }

  return (
    <main className="site-shell" style={imageVars}>
      <section className="hero" id="home">
        <nav className="nav">
          <a className="brand" href="#home" aria-label={t("Selayang House home")}><span className="brand-mark">S</span><span>SELAYANG<br /><i>HOUSE</i></span></a>
          <div className="desktop-nav"><a href="#stay">{t("Stay")}</a><a href="#story">{t("Our story")}</a><a href="#table">{t("The table")}</a><a href="#journal">{t("Journal")}</a></div>
          <div className="nav-actions"><LangSelect id="lang-header" className="sel-lang" /><a className="text-button desktop-only" href={wa} target="_blank" rel="noopener noreferrer">{t("Enquire")}</a><button className="book-button" onClick={() => setBookingOpen(true)}>{t("Book your stay")} <ArrowRight size={15} /></button><button className="menu-button" aria-label={t("Open menu")} onClick={() => setMenuOpen(true)}><Menu size={20} /></button></div>
        </nav>
        <div className="hero-content"><p className="eyebrow light">{t("A quiet place in the tropics")}</p><h1 {...h("Come away<br /><em>to the wild.</em>")} /><p className="hero-copy">{t("Selayang House is a slow-living retreat in the heart of Malaysia's ancient rainforest, where thoughtful design meets the rhythm of nature.")}</p><button className="circle-play" aria-label={t("Play film")}><Play size={17} fill="currentColor" /></button></div>
        <div className="hero-footer"><span dir="ltr">02° 58&apos; 24&quot; N&nbsp;&nbsp; 101° 44&apos; 08&quot; E</span><a href="#stay">{t("Explore the house")} <ArrowDown size={16} /></a><span className="scroll-label">{t("Scroll to wander")} ↓</span></div>
      </section>

      <section className="intro" id="story"><div className="intro-image image-room" /><div className="intro-copy"><p className="eyebrow">{t("The Selayang way")}</p><h2 {...h("A house shaped<br />by its <em>setting.</em>")} /><p>{t("On the edge of the Titiwangsa range, Selayang House is an invitation to do less. Mornings begin with birdsong, afternoons drift between the pool and the forest, and evenings gather around the table.")}</p><a className="underlined-link" href="#journal">{t("Discover our story")} <ArrowRight size={16} /></a></div></section>

      <section className="stay-section" id="stay"><div className="section-heading"><div><p className="eyebrow">{t("Rooms & villas")}</p><h2 {...h("Rest, <em>beautifully.</em>")} /></div><p className="section-note">{t("Each room opens to a private view of the landscape. Natural materials, generous light and small local details make every stay feel entirely your own.")}</p></div><div className="rooms-grid">{rooms.map((room, index) => <article className={`room-card ${index === activeRoom ? 'active' : ''}`} key={room.name} onMouseEnter={() => setActiveRoom(index)}><div className="room-image" style={{ backgroundImage: `url(${BASE}/img/${room.image}.webp)` }}><span className="room-number">0{index + 1}</span></div><div className="room-meta"><div><h3>{t(room.name)}</h3><p>{t(room.detail)}</p></div><span>{t(room.price)}</span></div></article>)}</div><div className="center-link"><a className="underlined-link" href="#book">{t("View all stays")} <ArrowRight size={16} /></a></div></section>

      <section className="experience" id="table"><div className="experience-image" /><div className="experience-panel"><p className="eyebrow">{t("The table")}</p><h2 {...h("Gather<br />close.")} /><p>{t("Produce from nearby farms, fire-kissed flavours and the generous spirit of a Malaysian family kitchen. Dinner is served at golden hour.")}</p><a className="underlined-link" href="#journal">{t("Meet our kitchen")} <ArrowRight size={16} /></a><span className="vertical-label">{t("DINING / 01")}</span></div></section>

      <section className="journal" id="journal"><div className="journal-header"><p className="eyebrow">{t("Notes from the house")}</p><h2 {...h("Stories worth<br /><em>taking home.</em>")} /><a className="underlined-link" href="#journal">{t("Read the journal")} <ArrowRight size={16} /></a></div><div className="journal-grid"><article><div className="journal-image image-forest" /><p className="eyebrow">{t("Field notes · 06.08.26")}</p><h3>{t("The sound of rain on a zinc roof")}</h3></article><article><div className="journal-image image-food" /><p className="eyebrow">{t("At the table · 21.07.26")}</p><h3>{t("A morning market, in five colours")}</h3></article></div></section>

      <section className="closing" id="book"><div className="closing-overlay"><p className="eyebrow light">{t("Your time, held here")}</p><h2 {...h("There is always<br /><em>room for wonder.</em>")} /><button className="book-button large" onClick={() => setBookingOpen(true)}>{t("Plan your stay")} <ArrowRight size={16} /></button></div></section>

      <footer><div className="footer-brand"><span className="brand-mark">S</span><span>SELAYANG<br /><i>HOUSE</i></span></div><div><p {...h("Genting Highlands, Pahang<br />Malaysia 69000")} /><p className="footer-contact">{t("WhatsApp / call:")} <a href={wa} target="_blank" rel="noopener noreferrer"><bdi dir="ltr">{WA_DISPLAY}</bdi></a></p></div><div className="footer-links"><a href="#story">Instagram</a><a href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href="#home">{t("Privacy")}</a></div><small>{t("© 2026 Selayang House")}</small><p className="photo-credit" {...h('Photos are illustrative stock images from <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer">Unsplash</a> (free Unsplash License) and do not depict the property.')} /></footer>
      <WhatsAppButton />

      {menuOpen && <div className="menu-overlay"><button className="close-menu" onClick={() => setMenuOpen(false)} aria-label={t("Close menu")}><X /></button><span className="brand-mark">S</span><p className="eyebrow">Selayang House</p><div className="overlay-links"><a href="#stay" onClick={() => setMenuOpen(false)}>{t("Stay")}</a><a href="#story" onClick={() => setMenuOpen(false)}>{t("Our story")}</a><a href="#table" onClick={() => setMenuOpen(false)}>{t("The table")}</a><a href="#journal" onClick={() => setMenuOpen(false)}>{t("Journal")}</a><a href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a></div><LangSelect id="lang-mobile" variant="full" className="sel-lang sel-lang--menu" /></div>}
      {bookingOpen && <div className="booking-modal"><div className="booking-card"><button className="modal-close" onClick={() => setBookingOpen(false)} aria-label={t("Close booking form")}><X /></button><p className="eyebrow">{t("Begin your stay")}</p><h2 {...h("Make it <em>yours.</em>")} /><label>{t("Arrival")}<input type="date" value={arrival} onChange={(e) => setArrival(e.target.value)} /></label><label>{t("Departure")}<input type="date" value={departure} onChange={(e) => setDeparture(e.target.value)} /></label><label>{t("Guests")}<select value={guests} onChange={(e) => setGuests(e.target.value)}>{[1, 2, 3, 4].map((n) => <option key={n} value={n}>{t(n === 1 ? '1 guest' : `${n} guests`)}</option>)}</select></label><button className="book-button submit" onClick={sendBooking}>{t("Check availability on WhatsApp")} <ArrowRight size={16} /></button><p className="wa-note">{t("Your request opens in WhatsApp to {w}.").replace('{w}', '\u2066' + WA_DISPLAY + '\u2069')}</p></div></div>}
    </main>
  )
}
