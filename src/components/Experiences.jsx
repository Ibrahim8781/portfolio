"use client"

import { useState } from "react"
import "./Experiences.css"

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(null)

  const experiences = [
    {
      id: 1,
      title: "Full Stack Engineering Intern",
      company: "Systems Limited",
      location: "Islamabad, Pakistan",
      duration: "06/2025 - 08/2025",
      department: "Digital Consulting",
      description: "Full-stack development internship focusing on NLP pipelines and document processing systems.",
      technologies: ["React", "Express.js", "SQLite", "Node.js", "NLP", "RESTful APIs"],
      achievements: [
        "Built Express.js NLP pipeline processing 500+ requirements documents, reducing manual analysis by 60% through automated artifact generation",
        "Developed React/Express/SQLite solution with RESTful APIs, serving real-time document verification with sub 300ms response times",
        "Collaborated with cross-functional teams to deliver enterprise-grade solutions",
        "Gained hands-on experience with modern full-stack technologies and agile development practices"
      ],
      image: `${process.env.PUBLIC_URL}/images/systems-limited-internship.png`,
    }
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