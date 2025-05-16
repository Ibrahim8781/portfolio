import "./About.css"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa"
import { useRef } from "react"

const About = () => {
  const emailRef = useRef(null)
  const phoneRef = useRef(null)

  const copyToClipboard = (text, ref) => {
    navigator.clipboard.writeText(text).then(() => {
      const span = ref.current
      const originalText = span.textContent
      span.textContent = "Copied!"
      setTimeout(() => {
        span.textContent = originalText
      }, 2000)
    }).catch(err => {
      console.error("Failed to copy: ", err)
    })
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
            <img src="/images/developer-environment.jpg" alt="Ibrahim Ahmad" />
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
              <a href="mailto:ibrahim@gmail.com" className="icon email-icon" aria-label="Email Ibrahim">
                <FaEnvelope />
              </a>
              <span ref={emailRef} onClick={() => copyToClipboard("ibrahim@gmail.com", emailRef)}>
                ibrahim@gmail.com
              </span>
            </div>
            <div className="detail">
              <a href="tel:+923111111111" className="icon phone-icon" aria-label="Call Ibrahim">
                <FaPhone />
              </a>
              <span ref={phoneRef} onClick={() => copyToClipboard("+923111111111", phoneRef)}>
                +(92) 311 1111111
              </span>
            </div>
            <div className="detail">
              <span className="icon location-icon" aria-label="Location">
                <FaMapMarkerAlt />
              </span>
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