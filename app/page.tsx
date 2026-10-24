'use client'

import { useState } from 'react'
import { ArrowDown, ArrowRight, ChevronDown, Menu, Play, X } from 'lucide-react'

const rooms = [
  { name: 'Garden Terrace', detail: 'King bed · 48 m²', price: 'From MYR 980', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Rainforest Suite', detail: 'King bed · 82 m²', price: 'From MYR 1,480', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85' },
  { name: 'The Canopy Villa', detail: 'Private pool · 140 m²', price: 'From MYR 2,680', image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=85' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [activeRoom, setActiveRoom] = useState(0)

  return (
    <main className="site-shell">
      <section className="hero" id="home">
        <nav className="nav">
          <a className="brand" href="#home" aria-label="Selayang House home"><span className="brand-mark">S</span><span>SELAYANG<br /><i>HOUSE</i></span></a>
          <div className="desktop-nav"><a href="#stay">Stay</a><a href="#story">Our story</a><a href="#table">The table</a><a href="#journal">Journal</a></div>
          <div className="nav-actions"><button className="text-button desktop-only" onClick={() => setBookingOpen(true)}>Enquire</button><button className="book-button" onClick={() => setBookingOpen(true)}>Book your stay <ArrowRight size={15} /></button><button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={20} /></button></div>
        </nav>
        <div className="hero-content"><p className="eyebrow light">A quiet place in the tropics</p><h1>Come away<br /><em>to the wild.</em></h1><p className="hero-copy">Selayang House is a slow-living retreat in the heart of Malaysia&apos;s ancient rainforest, where thoughtful design meets the rhythm of nature.</p><button className="circle-play" aria-label="Play film"><Play size={17} fill="currentColor" /></button></div>
        <div className="hero-footer"><span>02° 58&apos; 24&quot; N&nbsp;&nbsp; 101° 44&apos; 08&quot; E</span><a href="#stay">Explore the house <ArrowDown size={16} /></a><span className="scroll-label">Scroll to wander ↓</span></div>
      </section>

      <section className="intro" id="story"><div className="intro-image image-room" /><div className="intro-copy"><p className="eyebrow">The Selayang way</p><h2>A house shaped<br />by its <em>setting.</em></h2><p>On the edge of the Titiwangsa range, Selayang House is an invitation to do less. Mornings begin with birdsong, afternoons drift between the pool and the forest, and evenings gather around the table.</p><a className="underlined-link" href="#journal">Discover our story <ArrowRight size={16} /></a></div></section>

      <section className="stay-section" id="stay"><div className="section-heading"><div><p className="eyebrow">Rooms &amp; villas</p><h2>Rest, <em>beautifully.</em></h2></div><p className="section-note">Each room opens to a private view of the landscape. Natural materials, generous light and small local details make every stay feel entirely your own.</p></div><div className="rooms-grid">{rooms.map((room, index) => <article className={`room-card ${index === activeRoom ? 'active' : ''}`} key={room.name} onMouseEnter={() => setActiveRoom(index)}><div className="room-image" style={{ backgroundImage: `url(${room.image})` }}><span className="room-number">0{index + 1}</span></div><div className="room-meta"><div><h3>{room.name}</h3><p>{room.detail}</p></div><span>{room.price}</span></div></article>)}</div><div className="center-link"><a className="underlined-link" href="#book">View all stays <ArrowRight size={16} /></a></div></section>

      <section className="experience" id="table"><div className="experience-image" /><div className="experience-panel"><p className="eyebrow">The table</p><h2>Gather<br />close.</h2><p>Produce from nearby farms, fire-kissed flavours and the generous spirit of a Malaysian family kitchen. Dinner is served at golden hour.</p><a className="underlined-link" href="#journal">Meet our kitchen <ArrowRight size={16} /></a><span className="vertical-label">DINING / 01</span></div></section>

      <section className="journal" id="journal"><div className="journal-header"><p className="eyebrow">Notes from the house</p><h2>Stories worth<br /><em>taking home.</em></h2><a className="underlined-link" href="#journal">Read the journal <ArrowRight size={16} /></a></div><div className="journal-grid"><article><div className="journal-image image-forest" /><p className="eyebrow">Field notes · 06.08.26</p><h3>The sound of rain on a zinc roof</h3></article><article><div className="journal-image image-food" /><p className="eyebrow">At the table · 21.07.26</p><h3>A morning market, in five colours</h3></article></div></section>

      <section className="closing" id="book"><div className="closing-overlay"><p className="eyebrow light">Your time, held here</p><h2>There is always<br /><em>room for wonder.</em></h2><button className="book-button large" onClick={() => setBookingOpen(true)}>Plan your stay <ArrowRight size={16} /></button></div></section>

      <footer><div className="footer-brand"><span className="brand-mark">S</span><span>SELAYANG<br /><i>HOUSE</i></span></div><p>Genting Highlands, Pahang<br />Malaysia 69000</p><div className="footer-links"><a href="#story">Instagram</a><a href="#journal">Contact</a><a href="#home">Privacy</a></div><small>© 2026 Selayang House</small></footer>

      {menuOpen && <div className="menu-overlay"><button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button><span className="brand-mark">S</span><p className="eyebrow">Selayang House</p><div className="overlay-links"><a href="#stay" onClick={() => setMenuOpen(false)}>Stay</a><a href="#story" onClick={() => setMenuOpen(false)}>Our story</a><a href="#table" onClick={() => setMenuOpen(false)}>The table</a><a href="#journal" onClick={() => setMenuOpen(false)}>Journal</a></div></div>}
      {bookingOpen && <div className="booking-modal"><div className="booking-card"><button className="modal-close" onClick={() => setBookingOpen(false)} aria-label="Close booking form"><X /></button><p className="eyebrow">Begin your stay</p><h2>Make it <em>yours.</em></h2><label>Arrival<input type="date" /></label><label>Departure<input type="date" /></label><label>Guests<select defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option></select></label><button className="book-button submit" onClick={() => setBookingOpen(false)}>Check availability <ArrowRight size={16} /></button></div></div>}
    </main>
  )
}
