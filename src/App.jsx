import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Camera, Clock3, Heart, MapPin, Menu, Phone, Send, ShieldCheck, Sparkles, Star, X } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import aboutPhoto from '../assets/aboutimage.png'
import beautifulEyesPhoto from '../assets/Beautiful-eyes-image.jpg'
import blondeHairPhoto from '../assets/BlondeHair-image.jpg'
import hairColorPhoto from '../assets/hair-color.jpg'
import hairCuttingPhoto from '../assets/hair-cutting.jpg'
import heroPhoto from '../assets/hero-image.png'
import limeManicurePhoto from '../assets/Lime-manicureimage.jpg'
import manicurePhoto from '../assets/manicure-image.jpg'
import pinkStatementPhoto from '../assets/Pink statement.jpg'
import skincarePhoto from '../assets/skincare.jpg'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { number: '01', title: 'Haircuts', en: 'HAIR', detail: 'Women’s and men’s', image: hairCuttingPhoto },
  { number: '02', title: 'Hair coloring', en: 'COLOR', detail: 'Color services of every kind', image: hairColorPhoto },
  { number: '03', title: 'Manicure', en: 'NAILS', detail: 'Nail care and design', image: manicurePhoto },
  { number: '04', title: 'Cosmetology', en: 'SKINCARE', detail: 'Face and body treatments', image: skincarePhoto },
]

const features = [
  { icon: Sparkles, title: 'Personalized care', copy: 'We’ll create a look that feels like you.' },
  { icon: Star, title: 'Modern techniques', copy: 'We use trusted products and proven methods.' },
  { icon: Heart, title: 'Experienced stylists', copy: 'Thoughtful service and care in every detail.' },
  { icon: ShieldCheck, title: 'Clean & safe', copy: 'Sterilized tools and a comfortable experience.' },
]

const works = [
  { title: 'Pink statement', category: 'Hair', image: pinkStatementPhoto },
  { title: 'Soft waves', category: 'Hair', image: blondeHairPhoto },
  { title: 'Lime manicure', category: 'Nails', image: limeManicurePhoto },
  { title: 'Beautiful eyes', category: 'Skincare', image: beautifulEyesPhoto },
]

function Logo() {
  return <a href="/" className="logo" aria-label="Glow and Go — home"><span className="logo-emblem" aria-hidden="true">✦</span><span className="logo-copy"><b>GLOW <i>&</i> GO</b><small>BEAUTY SALON</small></span></a>
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Services', '#services'], ['Our team', '#about'], ['Pricing', '#services'], ['Offers', '#offer'], ['About us', '#about'], ['Contact', '#contacts']]
  return <header className="header">
    <Logo />
    <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
      {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="button button-pink nav-book" href="/booking">Book now <ArrowUpRight size={15} /></a>
    </nav>
  </header>
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-copy">
      <p className="eyebrow"><span>YOUR BEAUTY</span> — OUR INSPIRATION</p>
      <h1>Enhance<br /><em>your beauty</em><b className="hero-star">✦</b></h1>
      <p className="hero-description">Professional care, beautiful looks<br className="desktop-break" /> and flawless results.</p>
      <div className="hero-actions"><a className="button button-pink" href="/booking">Book an appointment <Sparkles size={15} /></a><a className="button button-outline" href="#services">Explore services <ArrowDown size={16} /></a></div>
      <div className="trust-row"><div><span><Star /></span><b>TOP<br />STYLISTS</b></div><div><span className="lime"><Sparkles /></span><b>PREMIUM<br />PRODUCTS</b></div><div><span><ShieldCheck /></span><b>QUALITY<br />GUARANTEED</b></div><div><span><Heart /></span><b>WARM<br />ATMOSPHERE</b></div></div>
    </div>
    <div className="hero-art"><div className="lime-blob" /><span className="vertical-word">GLOW</span><img className="hero-model-photo" src={heroPhoto} alt="Beauty model in a pink outfit with statement glasses" /><span className="sparkle sparkle-one">✦</span><span className="sparkle sparkle-two">✧</span><div className="discount-badge"><strong>-20%</strong><span>YOUR FIRST<br />VISIT</span></div></div>
  </section>
}

function Services() {
  return <section className="services section-wrap" id="services" aria-label="Our services">
    {services.map((item) => <a className="service-card" href="#contacts" key={item.number}>
      <div className="service-art"><img src={item.image} alt={`${item.title} at Glow & Go`} /><span className="service-number">{item.number}</span></div>
      <div className="service-info"><div><span>{item.en}</span><h3>{item.title}</h3><p>{item.detail}</p></div><i><ArrowUpRight size={18} /></i></div>
    </a>)}
  </section>
}

function About() {
  return <section className="about section-wrap" id="about">
    <div className="about-heading"><div className="section-heading"><p className="eyebrow"><span>GLOW & GO</span> — YOUR TIME TO SHINE</p><h2>Why choose <em>us</em></h2></div><p className="about-lead">A little time for yourself can change the way you feel all day. Come in, unwind, and leave glowing.</p></div>
    <div className="about-grid"><div className="feature-grid">{features.map(({ icon: Icon, title, copy }, i) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={19} /></div><small>0{i + 1}</small><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <div className="about-visual"><div className="about-shape" /><img className="about-photo" src={aboutPhoto} alt="Beauty client enjoying a relaxing salon moment" /><span className="about-sparkle">✳</span><div className="about-sticker"><Sparkles size={15} /> MADE FOR YOU</div><div className="since-tag"><span>YOUR BEAUTY</span><b>IS OUR CARE</b></div></div></div>
  </section>
}

function Portfolio() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Hair', 'Nails', 'Skincare']
  const visible = filter === 'All' ? works : works.filter((work) => work.category === filter)
  return <section className="portfolio section-wrap" id="works">
    <div className="portfolio-top"><div className="section-heading"><p className="eyebrow">A LITTLE INSPIRATION</p><h2>Our <em>work</em></h2></div><a className="text-link" href="#contacts">View all work <ArrowUpRight size={16} /></a></div>
    <div className="filter-row" role="group" aria-label="Filter portfolio">{filters.map((value) => <button className={filter === value ? 'filter active' : 'filter'} key={value} onClick={() => setFilter(value)}>{value}</button>)}</div>
    <div className="work-grid">{visible.map((work, i) => <article className="work-card" key={work.title}><div className="work-art"><img src={work.image} alt={work.title} /><small>0{i + 1}</small></div><div className="work-caption"><div><span>{work.category}</span><h3>{work.title}</h3></div><ArrowUpRight size={18} /></div></article>)}</div>
  </section>
}

function Offer() {
  return <section className="offer section-wrap" id="offer"><div className="offer-copy"><p className="eyebrow">A LITTLE TREAT FOR YOU</p><h2>Time to shine<br /><em>your way</em></h2><p>Book your first visit and enjoy<br />a special welcome discount.</p><a className="button button-dark" href="/booking">Book with 20% off <ArrowUpRight size={15} /></a></div><div className="offer-discount"><strong>-20<span>%</span></strong><span>YOUR FIRST<br />VISIT</span><i>✳</i></div></section>
}

function Footer() {
  return <footer className="footer" id="contacts"><div className="footer-main"><div className="footer-brand"><Logo /><p>A beauty space<br />where you can be yourself.</p></div><div className="footer-column"><h3>Contact</h3><a href="tel:+12125550148"><Phone size={15} /> +1 (212) 555-0148</a><a href="#contacts"><MapPin size={15} /> 10 Beauty Street</a><a href="mailto:hello@glowandgo.com">hello@glowandgo.com</a></div><div className="footer-column"><h3>Opening hours</h3><p><Clock3 size={15} /> Daily, 9 am – 9 pm</p><p>By appointment</p></div><div className="footer-column footer-social"><h3>Follow us</h3><div><a href="#contacts" aria-label="Instagram"><Camera /></a><a href="#contacts" aria-label="Telegram"><Send /></a><a href="#contacts" aria-label="WhatsApp"><Phone /></a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} GLOW & GO. All rights reserved.</span><a href="#home">Privacy policy</a><a href="#home" className="back-top">Back to top <ArrowDownRight size={14} /></a></div></footer>
}

function BookingPage() {
  function sendBookingRequest(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent('Glow & Go appointment request')
    const body = encodeURIComponent([
      `Name: ${form.get('name')}`,
      `Phone: ${form.get('phone')}`,
      `Service: ${form.get('service')}`,
      `Preferred date: ${form.get('date')}`,
      `Preferred time: ${form.get('time')}`,
    ].join('\n'))
    window.location.href = `mailto:hello@glowandgo.com?subject=${subject}&body=${body}`
  }

  return <div className="booking-page"><div className="booking-frame"><header className="booking-header"><Logo /><a className="booking-back" href="/">Back to salon <ArrowDownRight size={15} /></a></header><main className="booking-content"><div className="booking-copy"><p className="eyebrow"><span>YOUR MOMENT</span> STARTS HERE</p><h1>Let’s make<br /><em>time for you.</em></h1><p>Choose a service and tell us when works best. We’ll get back to you to confirm your appointment.</p><div className="booking-photo"><img src={heroPhoto} alt="Glow & Go beauty model" /><span>GLOW INTO YOUR DAY</span></div></div><form className="booking-form" onSubmit={sendBookingRequest}><div className="booking-form-heading"><span>01 / 02</span><h2>Request an appointment</h2><p>We’ll be in touch to confirm your time.</p></div><label>Full name<input name="name" autoComplete="name" placeholder="Your name" required /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="+1 (___) ___-____" required /></label><label>Choose a service<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.number}>{service.title}</option>)}</select></label><div className="booking-date-row"><label>Preferred date<input name="date" type="date" required /></label><label>Preferred time<select name="time" defaultValue="" required><option value="" disabled>Select time</option>{['9:00 am', '11:00 am', '1:00 pm', '3:00 pm', '5:00 pm', '7:00 pm'].map((time) => <option key={time}>{time}</option>)}</select></label></div><button className="button button-pink booking-submit" type="submit">Send booking request <ArrowUpRight size={16} /></button><p className="booking-note">This opens your email app with your appointment details.</p></form></main></div></div>
}

function SalonSite() {
  const appRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro.from('.hero-copy > *', { y: 25, opacity: 0, duration: 0.7, stagger: 0.09 }).from('.hero-art .hero-model-photo', { clipPath: 'inset(100% 0 0 0)', duration: 1 }, '-=0.45').from('.discount-badge', { scale: 0.7, opacity: 0, duration: 0.55 }, '-=0.35')
      gsap.utils.toArray('.service-card, .feature-card, .work-card, .offer').forEach((element) => gsap.from(element, { y: 28, opacity: 0, duration: 0.65, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } }))
      gsap.to('.sparkle-one', { y: -9, rotate: 14, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.sparkle-two', { y: 8, rotate: -12, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.lime-blob', { scale: 1.035, rotate: 2, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: 'center' })
    }, appRef)
    return () => ctx.revert()
  }, [])
  return <div className="site-shell" ref={appRef}><div className="page-frame"><Header /><main><Hero /><Services /><About /><Portfolio /><Offer /></main><Footer /></div></div>
}

function App() {
  return window.location.pathname === '/booking' || window.location.pathname === '/booking/' ? <BookingPage /> : <SalonSite />
}

export default App
