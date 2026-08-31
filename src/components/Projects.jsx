"use client"

import { useState } from "react"
import "./Projects.css"

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Multi-Agent AI Orchestration System",
      description: "Gemini-powered orchestration for a 13-agent educational AI system with two-tier memory and intent dispatch.",
      category: "ai",
      technologies: ["FastAPI", "LangGraph", "Gemini API", "ChromaDB", "Python"],
      duration: "09/2025 – 11/2025",
      details: [
        "Co-engineered Gemini-powered orchestration for a 13-agent educational AI system: single-call intent dispatch with confidence scoring and conversational clarification, cutting latency and cost",
        "Added a two-tier memory layer (short-term session recall, per-agent long-term store) for context continuity across multi-turn conversations",
        "Implemented LangGraph state machine for agent routing, tool calling, and graceful fallback handling",
      ],
      image: `${process.env.PUBLIC_URL}/images/academic-multi-agent-system.png`,
      github: "#",
    },
    {
      id: 2,
      title: "SEOmation — AI SEO Content Platform",
      description: "A 3-service content-automation platform with an event-driven scheduler, multi-engine research pipeline, and LLM content generator scoring 85+ on SEO tools.",
      category: "fullstack",
      technologies: ["Express.js", "Flask", "Groq", "PostgreSQL", "Qdrant", "Cohere", "React"],
      duration: "08/2025 – 02/2026",
      details: [
        "Built a 3-service content-automation platform (Express.js/PostgreSQL backend, Python AI service, React frontend), including a multi-engine research pipeline feeding structured JSON to an LLM content generator with an automatic repair pass for malformed responses — output consistently scores 85+ on SEO analysis tools",
        "Built an event-driven Node.js scheduler with retry/backoff and missed-job recovery for reliable autonomous publishing, plus a post-generation quality scorer for grammar, readability, and citation accuracy",
        "Integrated Qdrant vector store and Cohere embeddings to retrieve real-time context from internet data sources for RAG-powered content generation",
      ],
      image: `${process.env.PUBLIC_URL}/images/seomation.png`,
      github: "https://github.com/Ibrahim8781/SEOmation",
    },
    {
      id: 3,
      title: "Detecting AI-Generated vs. Human-Written Text",
      description: "A transformer-based binary classifier (BERT & RoBERTa) for detecting AI-generated text, with a critical analysis of overfitting and real-world generalization failure modes.",
      category: "ai",
      technologies: ["Python", "BERT", "RoBERTa", "TensorFlow", "NLP", "Hugging Face"],
      duration: "2025",
      details: [
        "Implemented and compared three classifiers — Logistic Regression baseline, BERT (110M params), and RoBERTa (125M params) — trained on the HC3 (Human-ChatGPT Comparison Corpus) and Kaggle AI vs. Human Text datasets (~10,000 samples)",
        "Achieved 99.91% validation accuracy with RoBERTa under moderate regularization (AdamW, lr=2e-5, weight decay=0.01, early stopping); AUC-ROC of 0.9999",
        "Conducted rigorous analysis of the accuracy–robustness trade-off: aggressive regularization (dropout=0.3, weight decay=0.05, gradient clipping) produced 97.26% accuracy with training dynamics consistent with genuine generalization rather than memorization",
        "Identified dataset-specific artifact overfitting as the root cause of the real-world performance gap, and documented future directions including zero-shot detection, watermarking, and cross-distribution evaluation protocols",
      ],
      image: `${process.env.PUBLIC_URL}/images/next-word-prediction.png`,
      github: "#",
    },
    {
      id: 4,
      title: "RAG-based FYP Handbook Assistant",
      description: "A performance retrieval pipeline using Sentence Transformers and FAISS for intelligent handbook queries.",
      category: "ai",
      technologies: ["Python", "Sentence-BERT", "FAISS", "Streamlit"],
      duration: "11/2025",
      details: [
        "Developed a performance retrieval pipeline using Sentence Transformers and FAISS, processing 50+ handbook pages into contextual chunks with sub-400ms query latency",
        "Implemented intelligent chunking strategies with metadata retention to deliver context-grounded answers with automated page citations via an interactive Streamlit interface",
      ],
      image: `${process.env.PUBLIC_URL}/images/rag-fyp-handbook.png`,
      github: "https://github.com/Ibrahim8781/RAG-FYP-Handbook-Assistant",
    },
    {
      id: 5,
      title: "Sign Language Digit Recognition",
      description: "A deep CNN for classifying sign language digit gestures with high accuracy across 10 gesture classes.",
      category: "ai",
      technologies: ["CNN", "TensorFlow", "Python", "Deep Learning"],
      duration: "11/2025",
      details: [
        "Designed and trained a deep CNN to classify 64×64 sign-language digit images, achieving high multi-class accuracy across 10 gesture classes",
        "Performed extensive hyperparameter tuning (batch size, learning rate, epochs, dropout, L1/L2 regularization, early stopping) to improve generalization",
        "Evaluated performance using confusion matrix, accuracy, precision-recall, and AUC-ROC, with visualizations of training dynamics and sample predictions",
      ],
      image: `${process.env.PUBLIC_URL}/images/sign-language-recognition.png`,
      github: "#",
    },
    {
      id: 6,
      title: "Collaborative Recipe & Meal Planner",
      description: "A full-stack meal planning platform with collaborative features and automated scheduling.",
      category: "fullstack",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Docker", "Kubernetes"],
      duration: "05/2025",
      details: [
        "Built Express.js/MongoDB meal platform with JWT auth serving 400+ recipes, supporting 80+ concurrent users with real-time features",
        "Developed React SPA with automated planning and Docker/K8s deployment, improving load speed by 40%",
        "Enabled recipe CRUD operations with user permissions and real-time comment/rating features",
        "Containerized application with Docker and deployed on Kubernetes via CI/CD pipeline",
      ],
      image: `${process.env.PUBLIC_URL}/images/collaborative_recipe.png`,
      github: "https://github.com/im-sami/SCD-Project-Recipe",
    },
    {
      id: 7,
      title: "Image Moderation App",
      description: "A role-based image moderation platform with AI-powered content detection using AWS Rekognition.",
      category: "fullstack",
      technologies: ["FastAPI", "MongoDB", "AWS Rekognition", "Docker", "Python"],
      duration: "05/2025",
      details: [
        "Built a role-based image-moderation platform (FastAPI, MongoDB) with a JWT authentication system and token-management APIs, supporting concurrent image analysis with automated usage logging and admin/user role separation",
        "Integrated AWS Rekognition for automated unsafe-content detection achieving 95% accuracy, and containerized with Docker for portable deployment",
        "Created intuitive admin dashboard for content moderation and user management with real-time processing",
      ],
      image: `${process.env.PUBLIC_URL}/images/image-moderation.png`,
      github: "https://github.com/Ibrahim8781/Image-Moderation-App",
    },
    {
      id: 8,
      title: "University Timetable Scheduler",
      description: "An AI-powered scheduling system using Constraint Satisfaction Problems and Genetic Algorithms.",
      category: "ai",
      technologies: ["Python", "CSP", "Genetic Algorithms", "NumPy"],
      duration: "04/2025 – 05/2025",
      details: [
        "Engineered CSP/GA scheduling system for 1500+ students across 120+ courses, achieving 90% efficiency with MRV heuristics and backtracking",
        "Implemented genetic algorithms with crossover/mutation, reducing computation time by 50% to process schedules in 25 seconds",
        "Applied MRV, forward checking, and backtracking for efficient constraint solving",
        "Managed data through CSV I/O and compared CSP vs GA performance outputs",
      ],
      image: `${process.env.PUBLIC_URL}/images/university-timetable-scheduler.png`,
      github: "https://github.com/Ibrahim8781/University-TimeTable-Scheduler",
    },
    {
      id: 9,
      title: "Movie Recommending System",
      description: "A collaborative filtering recommendation engine with user authentication and preference tracking.",
      category: "fullstack",
      technologies: ["Express.js", "MongoDB", "Node.js", "JWT", "Postman"],
      duration: "11/2024 – 12/2024",
      details: [
        "Developed collaborative filtering recommendation engine processing movies with 90% accuracy for personalized suggestions",
        "Implemented Express.js/MongoDB backend with JWT auth and API documentation, supporting 150+ users with rating/review system",
        "Built robust RESTful APIs with comprehensive Postman documentation",
        "Designed efficient data modeling for user preferences and movie metadata",
      ],
      image: `${process.env.PUBLIC_URL}/images/movie-recommendation.png`,
      github: "https://github.com/Ibrahim8781/Movie-Recommendation-Backend",
    },
    {
      id: 10,
      title: "Next-Word Prediction System",
      description: "An LSTM-based word prediction model trained on Shakespeare's plays with real-time UI integration.",
      category: "ai",
      technologies: ["LSTM", "NLP", "Python", "TensorFlow"],
      duration: "11/2025",
      details: [
        "Built a word-level LSTM model trained on Shakespeare's plays to predict the next word in a sentence with coherent linguistic flow",
        "Analyzed the impact of hyperparameters on sentence fluency and model convergence using training/validation loss and accuracy plots",
        "Developed a real-time interactive interface that dynamically suggests next-word predictions as users type partial sentences",
      ],
      image: `${process.env.PUBLIC_URL}/images/next-word-prediction.png`,
      github: "#",
    },
    {
      id: 11,
      title: "Rate-My-Professor",
      description: "A professor review system with AI-powered response generation using a custom RAG pipeline.",
      category: "ai",
      technologies: ["Python", "Next.js", "RAG", "Sentence Transformers", "NLP", "Flask"],
      duration: "08/2024",
      details: [
        "Built custom RAG pipeline with Flask API gateway and Sentence Transformers, processing 100+ professor reviews with 85% semantic search accuracy",
        "Engineered local vector similarity engine with multi-factor ranking algorithms, delivering sub-400ms query responses without external LLM dependencies",
        "Collaborated in a 4-member Agile team ensuring seamless integration",
        "Implemented efficient data storage and retrieval using Pinecone vector database",
      ],
      image: `${process.env.PUBLIC_URL}/images/rate-my-professor.png`,
      github: "https://github.com/Ibrahim8781/Rate-My-Professor-RAG",
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & ML" },
    { id: "fullstack", label: "Backend" },
  ]

  const [showAll, setShowAll] = useState(false)

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4)

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
        <p className="section-description">
          Production systems, AI pipelines, and full-stack applications
        </p>
      </div>
      <div className="project-filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
            onClick={() => {
              setActiveFilter(filter.id)
              setActiveProject(null)
              setShowAll(false)
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="projects-container">
        {displayedProjects.map((project) => (
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
                  {project.github && project.github !== "#" && (
                    <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
                      View on GitHub →
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {filteredProjects.length > 4 && (
        <div className="load-more-container">
          <button
            className="load-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : `View All Projects (+${filteredProjects.length - 4} More)`}
          </button>
        </div>
      )}
    </section>
  )

}

export default Projects