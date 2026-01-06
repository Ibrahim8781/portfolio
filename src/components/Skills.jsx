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
            const skillCards = document.querySelectorAll(".skill-card")
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("active")
              }, index * 50)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Python", "TensorFlow", "PyTorch", "Sentence Transformers", "FAISS", "CNN", "LSTM", "Deep Learning"]
    },
    {
      title: "RAG & NLP",
      skills: ["RAG Pipelines", "Qdrant", "Pinecone", "Cohere", "Groq LLMs", "Vector Databases", "Streamlit"]
    },
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Flask", "FastAPI", "MongoDB", "SQL Server", "REST API"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Docker", "Kubernetes", "AWS Rekognition", "CI/CD Pipeline", "Git & GitHub"]
    },
    {
      title: "Programming & Algorithms",
      skills: ["Python", "JavaScript", "C#", ".NET", "CSP & Genetic Algorithms", "Problem Solving"]
    },
    {
      title: "Tools & Others",
      skills: ["JWT Authentication", "Postman", "Windows Forms", "Agile Methodologies"]
    }
  ]

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="section-header">
        <h2>
          <span>Skills</span> & Technologies
        </h2>
        <div className="underline"></div>
        <p className="section-description">
          Technologies and tools I've mastered through real-world projects
        </p>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div className="skill-card" key={skillIndex}>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills