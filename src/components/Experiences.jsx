"use client"

import { useState } from "react"
import "./Experiences.css"

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(null)

  const experiences = [
    {
      id: 1,
      title: "Full-Stack Python Intern",
      company: "Research Lab",
      location: "Remote",
      duration: "06/2026 – 08/2026",
      department: "Software Engineering",
      description: "Built EcoTrack — a cross-platform desktop application monitoring system processes and calculating real-time CO₂ emissions using IEA grid carbon-intensity factors.",
      technologies: ["Python", "PyQt6", "SQLite", "IEA API", "Data Analytics"],
      achievements: [
        "Built EcoTrack, a PyQt6 cross-platform desktop app that monitors running system processes and calculates real-time CO₂ emissions using IEA grid carbon-intensity factors",
        "Implemented historical analytics dashboard and data export functionality for emissions tracking over time",
        "Delivered across iterative releases, incorporating review feedback across UI, database error handling, and packaging to ship a stable, production-ready build",
      ],
      image: `${process.env.PUBLIC_URL}/images/developer-environment.jpg`,
    },
    {
      id: 2,
      title: "Software Engineering Intern",
      company: "Systems Limited",
      location: "Islamabad, Pakistan",
      duration: "06/2025 – 08/2025",
      department: "Digital Consulting",
      description: "Full-stack development internship building production-grade validation systems and LLM-powered tooling for enterprise requirements engineering.",
      technologies: ["React", "Express.js", "SQLite", "Node.js", "LLMs", "Groq", "RESTful APIs"],
      achievements: [
        "Engineered a multi-layer validation engine (AI semantic checks, schema integrity, data normalization) across an Express.js, SQLite, and React stack, refined through iterative review cycles",
        "Built SPECmate — an automated LLM-powered SRS artifact generator (Llama3-70B via Groq) that auto-produces test cases, use cases, and functional modules from raw requirements documents",
        "Collaborated with cross-functional teams delivering enterprise-grade solutions using agile development practices",
      ],
      image: `${process.env.PUBLIC_URL}/images/systems-limited-internship.png`,
    },
  ]

  const toggleExperienceDetails = (id) => {
    if (activeExperience === id) {
      setActiveExperience(null)
    } else {
      setActiveExperience(id)
    }
  }

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2>
          My <span>Experience</span>
        </h2>
        <div className="underline"></div>
        <p className="section-description">
          Real-world engineering — from LLM pipelines to desktop apps
        </p>
      </div>
      <div className="experience-container">
        {experiences.map((experience) => (
          <div className={`experience-card ${activeExperience === experience.id ? "active" : ""}`} key={experience.id}>
            <div className="experience-image">
              <img src={experience.image || "/placeholder.svg"} alt={experience.company} />
              <div className="experience-overlay">
                <button className="details-btn" onClick={() => toggleExperienceDetails(experience.id)}>
                  {activeExperience === experience.id ? "Close Details" : "View Details"}
                </button>
              </div>
            </div>
            <div className="experience-info">
              <h3>{experience.title}</h3>
              <h4>{experience.company} • {experience.department}</h4>
              <p className="location-duration">{experience.location} | {experience.duration}</p>
              <p>{experience.description}</p>
              <div className="experience-tech">
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {activeExperience === experience.id && (
                <div className="experience-details">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {experience.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience