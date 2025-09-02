"use client"

import { useState } from "react"
import "./Projects.css"

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "University Timetable Schedule",
      description: "An AI-powered scheduling system using Constraint Satisfaction Problems and Genetic Algorithms.",
      technologies: ["Python", "CSP", "GA", "NumPy"],
      duration: "04/2025 - 05/2025",
      details: [
        "Engineered CSP/GA scheduling system for 1500+ students across 120+ courses, achieving 90% efficiency with MRV heuristics and backtracking",
        "Implemented genetic algorithms with crossover/mutation, reducing computation time by 50% to process schedules in 25 seconds",
        "Applied MRV, forward checking, and backtracking for efficient constraint solving",
        "Managed data through CSV I/O and compared CSP vs GA performance outputs"
      ],
      image: `${process.env.PUBLIC_URL}/images/university-timetable-scheduler.png`,
      github: "#",
    },
    {
      id: 2,
      title: "Collaborative Recipe & Meal Planner",
      description: "A full-stack meal planning platform with collaborative features and automated scheduling.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Docker", "K8s"],
      duration: "05/2025",
      details: [
        "Built Express.js/MongoDB meal platform with JWT auth serving 400+ recipes, supporting 80+ concurrent users with real-time features",
        "Developed React SPA with automated planning and Docker/K8s deployment, improving load speed by 40%",
        "Enabled recipe CRUD operations with user permissions and real-time comment/rating features",
        "Containerized application with Docker and deployed on Kubernetes via CI/CD pipeline"
      ],
      image: `${process.env.PUBLIC_URL}/images/collaborative_recipe.png`,
      github: "https://github.com/im-sami/SCD-Project-Recipe",
    },
    {
      id: 3,
      title: "Image Moderation App",
      description: "A role-based image moderation platform with AI-powered content detection using AWS services.",
      technologies: ["FastAPI", "MongoDB", "AWS Rekognition", "Docker", "Python"],
      duration: "05/2025",
      details: [
        "Built role-based image moderation platform using FastAPI/MongoDB with AWS Rekognition integration, processing unsafe content detection with 95% accuracy across admin/user workflows",
        "Engineered JWT authentication system with token management APIs and Docker deployment, supporting concurrent image analysis with automated usage logging",
        "Created intuitive admin dashboard for content moderation and user management",
        "Implemented real-time image processing with comprehensive error handling and logging"
      ],
      image: `${process.env.PUBLIC_URL}/images/image-moderation.png`,
      github: "https://github.com/Ibrahim8781/Image-Moderation-App",
    },
    {
      id: 4,
      title: "Movie Recommending System",
      description: "A collaborative filtering recommendation engine with user authentication and preference tracking.",
      technologies: ["Express.js", "MongoDB", "Postman", "Node.js"],
      duration: "11/2024 - 12/2024",
      details: [
        "Developed collaborative filtering recommendation engine processing movies with 90% accuracy for personalized suggestions",
        "Implemented Express.js/MongoDB backend with JWT auth and API documentation, supporting 150+ users with rating/review system",
        "Built robust RESTful APIs with comprehensive Postman documentation",
        "Designed efficient data modeling for user preferences and movie metadata"
      ],
      image: `${process.env.PUBLIC_URL}/images/movie-recommendation.png`,
      github: "https://documenter.getpostman.com/view/34836347/2sB2qWFiYn",
    },
    {
      id: 5,
      title: "Rate-My-Professor",
      description: "A professor review system with AI-powered response generation using RAG pipeline.",
      technologies: ["Python", "Next.js", "RAG", "Pinecone", "NLP", "Flask"],
      duration: "08/2024",
      details: [
        "Built custom RAG pipeline with Flask API gateway and Sentence Transformers, processing 100+ professor reviews with 85% semantic search accuracy",
        "Engineered local vector similarity engine with multi-factor ranking algorithms, delivering sub-400ms query responses without external LLM dependencies",
        "Collaborated in a 4-member Agile team ensuring seamless integration",
        "Implemented efficient data storage and retrieval using Pinecone vector database"
      ],
      image: `${process.env.PUBLIC_URL}/images/rate-my-professor.png`,
      github: "https://github.com/Mubeen014/Rate-my-professor-using-RAG.git",
    },
    {
      id: 6,
      title: "Teacher Assistant & Lab Demonstrator Management",
      description: "A comprehensive system for managing teaching assistants, lab demonstrators, and course assignments.",
      technologies: [".NET", "SQL Server", "C#", "Windows Forms"],
      duration: "02/2024 - 05/2024",
      details: [
        "Architected SQL Server database with C# .NET backend automating TA assignment workflows, reducing manual scheduling time by 70% for 50+ teaching assistants",
        "Developed Windows Forms interface with data binding and comprehensive error handling, streamlining lab management operations with 99% reliability",
        "Implemented automated task tracking and assignment distribution systems",
        "Created comprehensive reporting and analytics dashboard for administrative oversight"
      ],
      image: `${process.env.PUBLIC_URL}/images/teacher-lab-assistant-management.png`,
      github: "#",
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
              <p className="project-duration">{project.duration}</p>
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