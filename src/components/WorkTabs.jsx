"use client"

import { useState, useEffect } from "react"
import Projects from "./Projects"
import Experience from "./Experiences"
import "./WorkTabs.css"

const WorkTabs = () => {
  const [activeTab, setActiveTab] = useState("projects")

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === "#experience" || hash === "#work-experience") {
        setActiveTab("experience")
      } else if (hash === "#projects" || hash === "#work") {
        setActiveTab("projects")
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    handleHashChange()
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <div id="work" className="work-tabs-section">
      <div className="tab-switcher-container">
        <div className="tab-switcher">
          <button
            className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            <span className="tab-icon">🚀</span> Projects
          </button>
          <button
            className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            <span className="tab-icon">💼</span> Professional Experience
          </button>
        </div>
      </div>

      <div className="tab-content">
        {activeTab === "projects" ? <Projects /> : <Experience />}
      </div>
    </div>
  )
}

export default WorkTabs
