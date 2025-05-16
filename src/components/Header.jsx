"use client"

import { useState, useEffect } from "react"
import "./Header.css"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
        </div>
        <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li onClick={() => scrollToSection("hero")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("skills")}>Skills</li>
            <li onClick={() => scrollToSection("projects")}>Projects</li>
            <li onClick={() => scrollToSection("education")}>Education</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
