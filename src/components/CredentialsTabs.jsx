"use client"

import { useState, useEffect } from "react"
import Skills from "./Skills"
import Education from "./Education"
import "./CredentialsTabs.css"

const CredentialsTabs = () => {
  const [activeTab, setActiveTab] = useState("skills")

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === "#education" || hash === "#certs") {
        setActiveTab("education")
      } else if (hash === "#skills" || hash === "#credentials") {
        setActiveTab("skills")
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    handleHashChange()
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <div id="credentials" className="credentials-tabs-section">
      <div className="tab-switcher-container">
        <div className="tab-switcher">
          <button
            className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            <span className="tab-icon">⚡</span> Technical Skills
          </button>
          <button
            className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            <span className="tab-icon">🎓</span> Education & Certifications
          </button>
        </div>
      </div>

      <div className="tab-content">
        {activeTab === "skills" ? <Skills /> : <Education />}
      </div>
    </div>
  )
}

export default CredentialsTabs
