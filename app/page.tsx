"use client";

import { useState } from "react";

const services = [
  { n: "01", title: "Entertainment & Official Merchandise", detail: "Concerts, fan experiences, artist collections and event merchandise delivered with careful production management.", tag: "ENTERTAINMENT", image: "event" },
  { n: "02", title: "Corporate Merchandise & Uniforms", detail: "Apparel, headwear and thoughtful branded goods designed to represent your team and your brand.", tag: "BRANDED GOODS", image: "corporate" },
  { n: "03", title: "OEM Apparel Manufacturing", detail: "From fabric sourcing and sampling through production, embellishment, quality checks and packing.", tag: "APPAREL", image: "apparel" },
  { n: "04", title: "Global Sourcing & Production Management", detail: "A single accountable partner coordinating manufacturing, quality control and international deliveries.", tag: "SOURCING", image: "sourcing" },
];

function Arrow({ diagonal=false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
 const [open, setOpen] = useState(false);
 const [faq, setFaq] = useState<number|null>(null);
 return <main>
  <div className="topline"><span>VIETNAM BASED · GLOBALLY CONNECTED</span><span>MERCHANDISE / APPAREL / SOURCING</span></div>
  <header className="header shell">
    <a className="wordmark" href="#" aria-label="VNC home"><span className="mark">V<span>✳</span>C</span><small>VIETNAM CLOTHING</small></a>
    <button className="mobileToggle" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?"✕":"☰"}</button>
    <nav className={open?"nav open":"nav"} aria-label="Main navigation">
      <a href="#expertise" onClick={()=>setOpen(false)}>Expertise</a>
      <a href="#approach" onClick={()=>setOpen(false)}>How we work</a>
      <a href="#about" onClick={()=>setOpen(false)}>About VNC</a>
      <a className="navCta" href="#contact" onClick={()=>setOpen(false)}>Start a project <Arrow diagonal /></a>
    </nav>
  </header>
  <section className="hero shell">
    <div className="heroCopy"><p className="eyebrow"><span className="dot"/> PRODUCTION PARTNER, VIETNAM</p>
      <h1>MADE TO<br/>MEAN <em>MORE.</em></h1>
      <p className="heroIntro">Merchandise, apparel and sourcing — thoughtfully made in Vietnam, for brands going everywhere.</p>
      <div className="heroActions"><a href="#contact" className="button dark">Tell us what you need <Arrow diagonal/></a><a className="textLink" href="#expertise">Explore our expertise <Arrow/></a></div>
      <div className="heroFoot"><span>CONCEPT</span><i/> <span>DEVELOPMENT</span><i/><span>PRODUCTION</span><i/><span>DELIVERY</span></div>
    </div>
    <div className="heroVisual" role="img" aria-label="Abstract editorial arrangement expressing textiles and production">
      <div className="visualOrbe"/><div className="visualCloth"/><div className="visualDisk"/>
      <div className="heroVisualLabel"><span>VNC / VIETNAM</span><span>YOUR IDEAS, MADE REAL ↗</span></div>
    </div>
  </section>
  <section className="intro band" id="about"><div className="shell introGrid"><p className="eyebrow light">THE PARTNER BEHIND THE PRODUCT</p><div><h2>Great merchandise isn’t just made. <em>It’s made to matter.</em></h2><p>We connect creative ideas with practical manufacturing expertise. From artist merchandise to everyday uniforms, VNC brings people, suppliers and production together to make the details count.</p></div></div></section>
  <section className="expertise shell section" id="expertise"><div className="sectionHead"><p className="eyebrow">WHAT WE DO / 01—04</p><h2>One partner.<br/><em>Many possibilities.</em></h2><p>More than a factory. We help turn a brief into something people want to wear, keep and remember.</p></div>
    <div className="serviceGrid">{services.map(s=><article className="service" key={s.n}><div className={`serviceArt ${s.image}`} aria-hidden="true"><div className="artInner"/><span className="artTag">{s.tag}</span></div><div className="serviceHeading"><span>{s.n} / 04</span><h3>{s.title}</h3></div><p>{s.detail}</p><a href="#contact" aria-label={`Enquire about ${s.title}`} className="serviceLink">Discuss your project <Arrow diagonal/></a></article>)}</div>
  </section>
  <section className="process section" id="approach"><div className="shell"><div className="sectionHead compact"><p className="eyebrow">OUR APPROACH</p><h2>One clear path<br/>from <em>idea to delivery.</em></h2></div><div className="processGrid">{[
    ["01","Understand","Your brand, audience, timing, quality expectations and commercial goals."],
    ["02","Develop","Materials, product options, costing, sampling and production planning."],
    ["03","Produce","Coordinated manufacturing, decoration, quality checks and finishing."],
    ["04","Deliver","Packaging, documentation and logistics support for your destination."]
  ].map(x=><div className="processStep" key={x[0]}><span>{x[0]} <Arrow diagonal/></span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></div></section>
  <section className="manifesto band"><div className="shell"><p className="eyebrow light">WHY VNC</p><h2>We believe the best production is <em>invisible.</em> The result speaks for itself.</h2><div className="manifestoBottom"><p>A flexible sourcing and manufacturing partner focused on the things that matter: communication, consistency and care.</p><span>BUILT FOR WHAT'S NEXT ↗</span></div></div></section>
  <section className="questions section shell"><div className="sectionHead compact"><p className="eyebrow">GOOD TO KNOW</p><h2>Frequently<br/><em>asked questions.</em></h2></div><div className="faqList">{[
    ["What can VNC manufacture?","Our capabilities cover custom apparel, headwear, branded merchandise and related sourcing. Share your product specifications and we’ll review feasibility with the right partners."],
    ["Can you support product development?","Yes. We can coordinate material selection, technical details, samples, costing and production planning based on your brief."],
    ["Can you ship internationally?","We can coordinate international logistics and documentation depending on the destination, product and agreed shipping terms."],
    ["What is the minimum order quantity?","Minimums vary by product, material, decoration method and complexity. Contact us with your project details for a tailored assessment."]
  ].map(([q,a],i)=><div className="faqItem" key={q}><button onClick={()=>setFaq(faq===i?null:i)} aria-expanded={faq===i}><span>{q}</span><span>{faq===i?"−":"+"}</span></button>{faq===i&&<p>{a}</p>}</div>)}</div></section>
  <section className="contact band" id="contact"><div className="shell contactGrid"><div><p className="eyebrow light">LET'S WORK TOGETHER</p><h2>Have something<br/><em>in mind?</em></h2><p>Whether it’s an early idea or a fully specified project, tell us what you’re making.</p></div><div className="contactAction"><a className="button lightButton" href="mailto:support@vietnamclothing.vn?subject=VNC%20Project%20Enquiry">Start a conversation <Arrow diagonal/></a><small>Email contact from legacy website; verify before launch.</small></div></div></section>
  <footer className="footer shell"><div className="footerTop"><a href="#" className="wordmark"><span className="mark">V<span>✳</span>C</span><small>VIETNAM CLOTHING</small></a><div><p>Merchandise. Apparel. Sourcing.</p><p>Made in Vietnam. Made for the world.</p></div><a href="#top">Back to top ↑</a></div><div className="footerBottom"><span>© {new Date().getFullYear()} VNC · Vietnam Clothing</span><span>VIETNAM BASED · GLOBALLY CONNECTED</span></div></footer>
 </main>;
}
