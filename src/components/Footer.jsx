import "./Footer.css"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>
            Ibrahim<span>Ahmad</span>
          </h2>
          <p>Software Engineer & AI Enthusiast</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Connect With Me</h3>
          <div className="social-icons">
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
      <div className="footer-bottom">
        <p>© {currentYear} Ibrahim Ahmad. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer