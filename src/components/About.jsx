import "./About.css"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa"

const About = () => {
  const handleEmailClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    window.location.href = "mailto:ibrahimsiddiqi12@gmail.com"
  }

  const handlePhoneClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    window.location.href = "tel:+923315146350"
  }

  // Inline styles to override any CSS issues
  const clickableStyle = {
    cursor: "pointer",
    pointerEvents: "auto",
    zIndex: 999,
    position: "relative",
    userSelect: "none"
  }

  const iconStyle = {
    ...clickableStyle,
    display: "inline-flex",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  }

  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>
          About <span>Me</span>
        </h2>
        <div className="underline"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <div className="image-frame">
            <img src={`${process.env.PUBLIC_URL}/images/developer-environment.jpg`} alt="Ibrahim Ahmad" />
          </div>
        </div>
        <div className="about-text">
          <h3>Software Engineering Student & AI Enthusiast</h3>
          <p>
            I'm Ibrahim Ahmad Siddiqi, a passionate Software Engineering student at the National University of Computer
            & Emerging Science (FAST) in Islamabad, Pakistan. I specialize in both full-stack development and artificial
            intelligence.
          </p>
          <p>
            With a strong foundation in web technologies like React, Node.js, and Express, combined with my interest in
            AI/ML and NLP, I develop innovative solutions that bridge the gap between traditional software engineering
            and artificial intelligence.
          </p>
          <p>
            I'm actively involved in campus communities as a Media Head for the Fast Software Engineering Society and a
            Media Officer for the Google Developer Student Club, where I contribute to fostering a culture of innovation
            and learning.
          </p>
          <div className="about-details">
            <div className="detail">
              <div 
                style={iconStyle}
                onClick={handleEmailClick}
                title="Click to send email"
              >
                <FaEnvelope />
              </div>
              <span 
                onClick={handleEmailClick}
                style={clickableStyle}
                title="Click to send email"
              >
                ibrahimsiddiqi12@gmail.com
              </span>
            </div>
            <div className="detail">
              <div 
                style={iconStyle}
                onClick={handlePhoneClick}
                title="Click to call"
              >
                <FaPhone />
              </div>
              <span 
                onClick={handlePhoneClick}
                style={clickableStyle}
                title="Click to call"
              >
                +(92) 331 5146350
              </span>
            </div>
            <div className="detail">
              <div className="icon location-icon">
                <FaMapMarkerAlt />
              </div>
              <span>Islamabad, Pakistan</span>
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
      </div>
    </section>
  )
}

export default About