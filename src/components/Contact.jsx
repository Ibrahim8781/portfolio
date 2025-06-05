"use client"
import { useState } from "react"
import "./Contact.css"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa"

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

  // Inline styles to override any CSS issues and maintain appearance
  const clickableStyle = {
    cursor: "pointer",
    pointerEvents: "auto",
    zIndex: 999,
    position: "relative",
    userSelect: "none",
    textDecoration: "none", // Prevent underline on links
    color: "var(--text-color)" // Match existing text color
  }

  const iconStyle = {
    ...clickableStyle,
    display: "inline-flex",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1.2rem"
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
              <a href="mailto:ibrahimsiddiqi12@gmail.com" style={iconStyle} title="Click to send email">
                <FaEnvelope />
              </a>
              <div className="contact-text">
                <h4>Email</h4>
                <a href="mailto:ibrahimsiddiqi12@gmail.com" style={clickableStyle} title="Click to send email">
                  ibrahimsiddiqi12@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <a href="tel:+923315146350" style={iconStyle} title="Click to call">
                <FaPhone />
              </a>
              <div className="contact-text">
                <h4>Phone</h4>
                <a href="tel:+923315146350" style={clickableStyle} title="Click to call">
                  +(92) 331 5146350
                </a>
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
                Note: If you can't type in the form, please try refreshing the page or use the email/phone options above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact