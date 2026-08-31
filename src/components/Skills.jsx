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
              }, index * 40)
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
      title: "AI Engineering",
      icon: "🤖",
      skills: [
        "RAG Pipelines",
        "Multi-Agent Systems",
        "LangGraph",
        "LLM Integration",
        "Groq",
        "Gemini API",
        "Cohere",
        "Prompt Engineering",
        "Vector Databases",
        "FAISS",
        "Qdrant",
        "ChromaDB",
        "Sentence Transformers",
        "Hugging Face",
        "NLP",
      ],
    },
    {
      title: "ML & Deep Learning",
      icon: "🧠",
      skills: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "CNN",
        "LSTM",
        "Deep Learning",
        "Scikit-learn",
        "NumPy",
        "Streamlit",
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        "Python (FastAPI, Flask)",
        "Node.js",
        "Express.js",
        "RESTful API Design",
        "JWT Authentication",
        "Rate Limiting",
        "Web Scraping",
        "PostgreSQL",
        "MongoDB",
        "SQLite",
      ],
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "PyQt6",
        "Responsive Design",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        "Docker",
        "Kubernetes",
        "AWS Rekognition",
        "CI/CD Pipeline",
        "Git & GitHub",
      ],
    },
    {
      title: "Tools & Methods",
      icon: "🛠️",
      skills: [
        "Postman",
        "Agile / Scrum",
        "CSP & Genetic Algorithms",
      ],
    },
  ]

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="section-header">
        <h2>
          <span>Skills</span> & Technologies
        </h2>
        <div className="underline"></div>
        <p className="section-description">
          From LLM pipelines and vector databases to scalable APIs and full-stack platforms
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