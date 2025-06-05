"use client"

import { useEffect, useRef } from "react"
import "./Skills.css"

const Skills = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const hexagons = document.querySelectorAll(".hexagon")
            hexagons.forEach((hexagon, index) => {
              setTimeout(() => {
                hexagon.classList.add("active")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const technicalSkills = [
    { name: "JavaScript", progress: "100%" },
    { name: "React", progress: "100%" },
    { name: "Node.js", progress: "100%" },
    { name: "Express.js", progress: "100%" },
    { name: "MongoDB", progress: "100%" },
    { name: "Python", progress: "100%" },
    { name: "AI/ML", progress: "100%" },
    { name: "NLP & RAG", progress: "100%" },
    { name: "Docker", progress: "100%" },
    { name: "Kubernetes", progress: "100%" },
    { name: "Git", progress: "100%" },
    { name: "CI/CD", progress: "100%" },
  ]

  const otherSkills = [
    "Git",
    "REST API",
    "Docker",
    "SQL",
    "Postman",
    "LLMs",
    "Heuristic Searching",
    "CSP",
    "GA",
    "NumPy",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "CI/CD",
    "Agile Methodologies",
    "Problem Solving",
  ]

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="section-header">
        <h2>
          <span>Skills</span>
        </h2>
        <div className="underline"></div>
      </div>
      <div className="skills-content">
        <div className="technical-skills">
          <h3>Technical Proficiency</h3>
          <div className="honeycomb">
            {technicalSkills.map((skill, index) => (
              <div className="hexagon" key={index}>
                <div
                  className="hexagon-fill"
                  style={{ height: skill.progress }}
                ></div>
                <span>{skill.name}<br/></span>
              </div>
            ))}
          </div>
        </div>
        <div className="other-skills">
          <h3>Additional Skills</h3>
          <div className="skill-tags">
            {otherSkills.map((skill, index) => (
              <div className="skill-tag" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills