"use client"

import { useState } from "react"
import "./Projects.css"


const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Collaborative Recipe & Meal Planner",
      description: "A full-stack application for recipe management and meal planning with collaborative features.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Docker", "K8"],
      details: [
        "Built RESTful API with Express.js, JWT-based auth, and MongoDB schema design",
        "Enabled recipe CRUD, user permissions, and real-time comment/rating features",
        "Developed responsive React frontend with weekly planner and auto-generated shopping lists",
        "Containerized app with Docker and deployed on Minikube via GitHub Actions",
      ],
      image: `${process.env.PUBLIC_URL}/images/collaborative_recipe.png`,
      github: "https://github.com/im-sami/SCD-Project-Recipe",
    },
    {
      id: 2,
      title: "Movie Recommending System",
      description: "A backend system for movie recommendations with user authentication and preference tracking.",
      technologies: ["Express.js", "MongoDB", "Postman", "Node.js"],
      details: [
        "Built a robust backend with ExpressJS and MongoDB, featuring JWT authentication",
        "Implemented user profiles, rating/review modules, and dynamic movie recommendations",
        "Documented RESTful APIs with Postman, emphasizing secure routing",
        "Designed efficient data modeling and token-based communication",
      ],
      image: `${process.env.PUBLIC_URL}/images/movie-recommendation.png`,
      github: "https://documenter.getpostman.com/view/34836347/2sB2qWFiYn",
    },
    {
      id: 3,
      title: "Rate-My-Professor",
      description: "A professor review system with AI-powered response generation using RAG pipeline.",
      technologies: ["Python", "JavaScript", "Next.js", "RAG", "Pinecone", "NLP"],
      details: [
        "Developed professor review system integrating RAG pipeline using Lang Chain and Llama Model",
        "Created real-time, relevant query responses using advanced NLP techniques",
        "Collaborated in a 4-member Agile team ensuring seamless integration",
        "Implemented efficient data storage and retrieval using Pinecone vector database",
      ],
      image: `${process.env.PUBLIC_URL}/images/rate-my-professor.png`,
      github: "https://github.com/Mubeen014/Rate-my-professor-using-RAG.git",
    },
    {
      id: 4,
      title: "University Timetable Schedule",
      description: "An AI-powered scheduling system using Constraint Satisfaction Problems and Genetic Algorithms.",
      technologies: ["Python", "CSP", "GA", "NumPy"],
      details: [
        "Built a class scheduling system using CSP and GA to handle hard and soft constraints",
        "Applied MRV, forward checking, and backtracking for efficient search",
        "Used GA with crossover, mutation, and fitness scoring to improve balance",
        "Managed data through CSV I/O and compared CSP vs GA outputs",
      ],
      image: `${process.env.PUBLIC_URL}/images/university-timetable-scheduler.png`,
      github: "#",
    },
    {
      id: 5,
      title: "Teacher Assistant & Lab Demonstrator Management",
      description: "A system for managing teaching assistants, lab demonstrators, and course assignments.",
      technologies: [".NET", "SQL", "C#", "Windows Forms"],
      details: [
        "Architected SQL Server database and developed C# .NET backend",
        "Automated TA assignments and task tracking, reducing manual scheduling",
        "Developed a Windows Forms interface with data binding for TA and lab management",
        "Added error handling and tested key features to ensure reliability",
      ],
      image: `${process.env.PUBLIC_URL}/images/teacher-lab-assistant-management.png`,
      github: "#",
    },
    {
      id: 6,
      title: "Image Moderation System",
      description: "An image moderation system using AI to detect inappropriate content.",
      technologies: ["Python", "FLASK", "AWS", "FAST API", "CSS"],
      details: [
        "Developed an image moderation system using Python and Flask",
        "Integrated AWS Rekognition for image analysis and inappropriate content detection",
        "Created a user-friendly interface with CSS and HTML and JavaScript",
        "Implemented RESTful APIs with FastAPI for efficient image processing",
      ],
      image: `${process.env.PUBLIC_URL}/images/image-moderation.png`,
      github: "https://github.com/Ibrahim8781/Image-Moderation-App",
    },
  ]

  const toggleProjectDetails = (id) => {
    if (activeProject === id) {
      setActiveProject(null)
    } else {
      setActiveProject(id)
    }
  }

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="underline"></div>
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <div className={`project-card ${activeProject === project.id ? "active" : ""}`} key={project.id}>
            <div className="project-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
              <div className="project-overlay">
                <button className="details-btn" onClick={() => toggleProjectDetails(project.id)}>
                  {activeProject === project.id ? "Close Details" : "View Details"}
                </button>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {activeProject === project.id && (
                <div className="project-details">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
                    <i className="github-icon"></i> View on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
