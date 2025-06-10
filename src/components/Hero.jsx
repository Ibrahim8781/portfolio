"use client"

import { useEffect, useRef } from "react"
import "./Hero.css"

const Hero = () => {
  const textRef = useRef(null)

  useEffect(() => {
    const roles = ["Software Engineer", "AI Enthusiast", "Full Stack Developer"]
    let currentRoleIndex = 0
    let currentCharIndex = 0
    let isDeleting = false
    let typingSpeed = 100

    const type = () => {
      const currentRole = roles[currentRoleIndex]

      if (isDeleting) {
        textRef.current.textContent = currentRole.substring(0, currentCharIndex - 1)
        currentCharIndex--
        typingSpeed = 50
      } else {
        textRef.current.textContent = currentRole.substring(0, currentCharIndex + 1)
        currentCharIndex++
        typingSpeed = 100
      }

      if (!isDeleting && currentCharIndex === currentRole.length) {
        isDeleting = true
        typingSpeed = 1000 // Pause at the end
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false
        currentRoleIndex = (currentRoleIndex + 1) % roles.length
        typingSpeed = 500 // Pause before typing next role
      }

      setTimeout(type, typingSpeed)
    }

    setTimeout(type, 1000)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hello, I'm <span className="highlight">Ibrahim Ahmad</span>
          </h1>
          <h2>
            I'm a <span ref={textRef} className="typing"></span>
          </h2>
          <p>Building innovative solutions with modern technologies</p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={scrollToContact}>
              Contact Me
            </button>
            <a href="#projects" className="secondary-btn">
              View My Work
            </a>
            <a href={`${process.env.PUBLIC_URL}/resume/Ibrahim_Ahmad_Siddiqi_Resume.pdf`} download className="secondary-btn">
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <div className="blob"></div>
              <img src={`${process.env.PUBLIC_URL}/images/ibrahim-pfp.jpeg`} alt="Ibrahim Ahmad" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Hero