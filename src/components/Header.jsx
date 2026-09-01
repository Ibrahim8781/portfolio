"use client"
import { useState, useEffect } from "react"
import "./Header.css"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`hdr ${scrolled ? "hdr-scrolled" : ""}`}>
      <div className="hdr-inner">
        <span className="hdr-logo">Ibrahim<span className="hdr-dot">.</span></span>

        <nav className="hdr-nav">
          <a href="#experience"     className="hdr-link">Experience</a>
          <a href="#projects"       className="hdr-link">Projects</a>
          <a href="#skills"         className="hdr-link">Skills</a>
          <a href="#certifications" className="hdr-link">Certifications</a>
          <a href="#contact"        className="hdr-link">Contact</a>
        </nav>

        <button className={`hdr-burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="hdr-mobile">
          {["#projects","#experience","#skills","#certifications","#contact"].map(href => (
            <a key={href} href={href} className="hdr-mobile-link" onClick={() => setMenuOpen(false)}>
              {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
