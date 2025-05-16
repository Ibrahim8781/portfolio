"use client"

import { useState } from "react"
import "./Contact.css"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa"
import { useRef } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const emailRef = useRef(null)
  const phoneRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(`Input changed: ${name} = ${value}`) // Debug log to confirm event firing
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please fill in all required fields.",
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please enter a valid email address.",
      })
      return
    }

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you for your message! I will get back to you soon.",
      })

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: "",
        })
      }, 5000)
    }, 1000)
  }

  const triggerEmailAction = () => {
    try {
      window.location.href = "mailto:ibrahim@gmail.com"
    } catch (err) {
      // Fallback: Copy to clipboard if mailto: is blocked
      copyToClipboard("ibrahim@gmail.com", emailRef)
    }
  }

  const triggerPhoneAction = () => {
    try {
      window.location.href = "tel:+923111111111"
    } catch (err) {
      // Fallback: Copy to clipboard if tel: is blocked
      copyToClipboard("+923111111111", phoneRef)
    }
  }

  const copyToClipboard = (text, ref) => {
    navigator.clipboard.writeText(text).then(() => {
      const span = ref.current
      const originalText = span.textContent
      span.textContent = "Copied! (mailto/tel might be blocked in this environment)"
      setTimeout(() => {
        span.textContent = originalText
      }, 2000)
    }).catch(err => {
      console.error("Failed to copy: ", err)
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>
          Contact <span>Me</span>
        </h2>
        <div className="underline"></div>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>Feel free to reach out to me for any questions, opportunities, or just to say hello!</p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <a
                  href="mailto:ibrahim@gmail.com"
                  className="email-icon"
                  aria-label="Email Ibrahim"
                  onClick={(e) => {
                    e.preventDefault()
                    triggerEmailAction()
                  }}
                >
                  <FaEnvelope />
                </a>
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <span
                  ref={emailRef}
                  onClick={triggerEmailAction}
                  style={{ cursor: "pointer" }}
                >
                  ibrahim@gmail.com
                </span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <a
                  href="tel:+923111111111"
                  className="phone-icon"
                  aria-label="Call Ibrahim"
                  onClick={(e) => {
                    e.preventDefault()
                    triggerPhoneAction()
                  }}
                >
                  <FaPhone />
                </a>
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <span
                  ref={phoneRef}
                  onClick={triggerPhoneAction}
                  style={{ cursor: "pointer" }}
                >
                  +(92) 311 1111111
                </span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <span className="location-icon" aria-label="Location">
                  <FaMapMarkerAlt />
                </span>
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/ibrahim-ahmad-20355a288/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin-icon"
              aria-label="Visit Ibrahim's LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Ibrahim8781"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github-icon"
              aria-label="Visit Ibrahim's GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="contact-form-container">
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                disabled={false}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                disabled={false}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the subject"
                disabled={false}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
                disabled={false}
              ></textarea>
            </div>
            <button type="button" className="submit-btn" onClick={handleSubmit}>
              Send Message
            </button>

            {formStatus.submitted && (
              <div className={`form-message ${formStatus.success ? "success" : "error"}`}>
                {formStatus.message}
              </div>
            )}
            <div className="form-note">
              <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
                Note: If you can’t type in the form, please try refreshing the page or use the email/phone options above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact