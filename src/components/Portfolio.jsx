"use client"
import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import MorphStrip from "./MorphStrip"
import "./Portfolio.css"

// ─── Domain color system ────────────────────────────────────────────
const DOMAIN = {
  "AI & LLMs": { color: "#B45309", bg: "rgba(180,83,9,0.08)", border: "#D97706" },
  "Backend": { color: "#0F766E", bg: "rgba(15,118,110,0.08)", border: "#0D9488" },
  "ML Research": { color: "#7C3AED", bg: "rgba(124,58,237,0.08)", border: "#7C3AED" },
  "Full Stack": { color: "#0F766E", bg: "rgba(15,118,110,0.08)", border: "#0D9488" },
}

// ─── Projects ───────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1, domain: "AI & LLMs", year: "2025",
    title: "Multi-Agent AI Orchestration System",
    tagline: "Unified Gemini orchestrator routing student requests across a 13-agent educational AI platform.",
    bullets: [
      "One Gemini call handles intent detection, parameter extraction, and clarifying questions, cutting latency ~50% (to 0.8-1.2s) and LLM cost ~66%",
      "Two-tier memory: short-term recall in the supervisor plus per-agent long-term stores (ChromaDB semantic search, SQLite exact match)",
      "Registry-driven plug-in agents with standard health and process endpoints, health-checked before routing for graceful degradation",
    ],
    metric: "13 agents orchestrated",
    tags: ["Gemini API", "FastAPI", "ChromaDB", "SQLite", "Python"],
    github: "https://github.com/Ibrahim8781/Multi-Agent-System-BSE-7A",
  },
  {
    id: 2, domain: "Backend", year: "2025-26",
    title: "SEOmation: AI SEO Content Platform",
    tagline: "3-service content-automation platform: Express.js/PostgreSQL backend, FastAPI AI service, React frontend.",
    bullets: [
      "Live web search, scraping, and Qdrant RAG feed Gemini (Groq fallback) for platform-specific content, with a repair pass for malformed output",
      "Scheduler publishes to WordPress, LinkedIn, and Instagram with retry/backoff and missed-job recovery; OAuth tokens AES-256-GCM encrypted",
      "Built-in SEO scoring (keyword density, meta length, headings, readability) plus multi-provider image generation with fallback",
    ],
    metric: "Publishes to 3 platforms",
    tags: ["Express.js", "FastAPI", "PostgreSQL", "Gemini", "Groq", "Qdrant", "React"],
    github: "https://github.com/Ibrahim8781/SEOmation",
  },
  {
    id: 3, domain: "ML Research", year: "2025",
    title: "Detecting AI-Generated vs. Human-Written Text",
    tagline: "Logistic regression baseline, BERT (110M) and RoBERTa (125M) classifiers on the HC3 + Kaggle AI vs. Human corpus.",
    bullets: [
      "99.34% (BERT) and 99.91% (RoBERTa) held-out accuracy, BERT AUC-ROC 0.9999, yet near-chance results on out-of-distribution text",
      "Traced the gap to dataset-artifact overfitting; aggressive regularisation (dropout=0.3, weight decay=0.05, gradient clipping) traded accuracy (97.26%) for more robust learning",
    ],
    metric: "99.91% RoBERTa accuracy",
    tags: ["BERT", "RoBERTa", "Hugging Face", "NLP", "Python"],
    github: "#",
  },
  {
    id: 4, domain: "AI & LLMs", year: "2025",
    title: "RAG-based FYP Handbook Assistant",
    tagline: "Natural-language Q&A over the FAST-NUCES FYP Handbook with page citations, deployed live on Railway.",
    bullets: [
      "Sentence-BERT embeddings with FAISS top-5 retrieval (~10ms) ground Llama 3.1 8B answers via Groq, each cited by page number",
      "Production hardening: embedding cache, three-tier rate limiting, retry with exponential backoff, and structured JSON logging",
    ],
    metric: "~10ms vector retrieval",
    tags: ["Python", "Sentence-BERT", "FAISS", "Groq", "Streamlit"],
    github: "https://github.com/Ibrahim8781/RAG-FYP-Handbook-Assistant",
    demo: "https://web-production-5db8b.up.railway.app",
  },
  {
    id: 5, domain: "Full Stack", year: "2025",
    title: "Collaborative Recipe & Meal Planner",
    tagline: "Express.js/MongoDB meal platform with JWT auth, real-time commenting, and ratings.",
    bullets: [
      "Serves 400+ recipes supporting 80+ concurrent users; automated meal-plan generation via React SPA",
      "Containerised with Docker and shipped through a CI/CD pipeline, improving load speed by 40%",
    ],
    metric: "80+ concurrent users",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Docker"],
    github: "https://github.com/im-sami/SCD-Project-Recipe",
  },
  {
    id: 6, domain: "ML Research", year: "2025",
    title: "Sign Language Digit Recognition (CNN)",
    tagline: "Deep CNN classifying 10 ASL digit gesture classes on 64x64 images.",
    bullets: [
      "Extensive hyperparameter tuning: batch size, learning rate, dropout, L1/L2 regularisation, early stopping",
      "Evaluated with confusion matrix, precision-recall curves, and AUC-ROC visualisations of training dynamics",
    ],
    metric: "10-class gesture recognition",
    tags: ["CNN", "Python", "Deep Learning"],
    github: "#",
  },
  {
    id: 7, domain: "Backend", year: "2025",
    title: "Image Moderation App",
    tagline: "Role-based FastAPI/MongoDB service that flags unsafe images with AWS Rekognition and confidence scores.",
    bullets: [
      "Admin and user JWT roles: admins issue and revoke tokens, users moderate images; tokens stored in MongoDB so expired ones are rejected",
      "Per-token usage logging, admin and user web consoles, and one-command Docker Compose deployment",
    ],
    metric: "Role-based JWT access",
    tags: ["FastAPI", "MongoDB", "AWS Rekognition", "Docker", "Python"],
    github: "https://github.com/Ibrahim8781/Image-Moderation-App",
  },
  {
    id: 8, domain: "AI & LLMs", year: "2025",
    title: "University Timetable Scheduler",
    tagline: "CSP + Genetic Algorithm system scheduling 1,500+ students across 120+ courses.",
    bullets: [
      "MRV heuristics + backtracking achieve 90% scheduling efficiency; full schedule in 25 seconds",
      "GA crossover/mutation reduced computation time by 50% vs. pure CSP baseline",
    ],
    metric: "90% scheduling efficiency",
    tags: ["Python", "CSP", "Genetic Algorithms", "NumPy"],
    github: "https://github.com/Ibrahim8781/University-TimeTable-Scheduler",
  },
  {
    id: 9, domain: "Backend", year: "2024",
    title: "Movie Recommending System",
    tagline: "Collaborative filtering engine with Express.js/MongoDB backend and JWT auth.",
    bullets: [
      "90% personalisation accuracy for 150+ users; full rating/review system with API documentation",
    ],
    metric: "90% recommendation accuracy",
    tags: ["Express.js", "MongoDB", "Node.js", "JWT"],
    github: "https://github.com/Ibrahim8781/Movie-Recommendation-Backend",
  },
  {
    id: 10, domain: "ML Research", year: "2025",
    title: "Next-Word Prediction (LSTM)",
    tagline: "Word-level LSTM trained on Shakespeare's plays for next-word prediction.",
    bullets: [
      "Hyperparameter impact analysis on fluency and model convergence using training/validation curves",
      "Real-time interactive interface for dynamic word suggestions with coherent linguistic flow",
    ],
    metric: "Shakespearean corpus",
    tags: ["LSTM", "NLP", "Python"],
    github: "#",
  },
  {
    id: 11, domain: "AI & LLMs", year: "2024",
    title: "Rate-My-Professor RAG",
    tagline: "Custom RAG pipeline without external LLM, local vector similarity engine only.",
    bullets: [
      "85% semantic search accuracy across 100+ professor reviews; sub-400ms responses",
      "Multi-factor ranking with Sentence Transformers via Flask API gateway",
    ],
    metric: "85% semantic accuracy",
    tags: ["Python", "Next.js", "RAG", "Sentence Transformers", "Flask"],
    github: "https://github.com/Ibrahim8781/Rate-My-Professor-RAG",
  },
]

// ─── Experiences ────────────────────────────────────────────────────
const EXPERIENCES = [
  {
    id: 1,
    company: "Research Lab",
    role: "Full-Stack Python Intern",
    period: "Jun - Aug 2026",
    location: "Remote",
    domain: "Backend",
    summary: "Built EcoTrack: a desktop app that tracks per-process CPU, RAM, and GPU power draw and converts it into real-time CO₂ emissions using IEA regional grid factors.",
    bullets: [
      "Designed the telemetry pipeline: psutil and NVML polling every 5s, energy estimation from CPU TDP and RAM coefficients, and SQLite (WAL) persistence with 30-day retention across 11 regional grids",
      "Built a PyQt6 dashboard with live charts, hourly to monthly analytics, RAM alerts with one-click process kill, and PDF/CSV export; shipped a packaged Windows build via PyInstaller",
    ],
    tech: ["Python", "PyQt6", "SQLite", "psutil", "NVML", "PyInstaller"],
  },
  {
    id: 2,
    company: "Systems Limited",
    role: "Software Engineering Intern",
    period: "Jun - Aug 2025",
    location: "Islamabad, Pakistan",
    domain: "Backend",
    summary: "Full-stack internship at Pakistan's largest IT company building production-grade validation systems and LLM-powered tooling for enterprise requirements engineering.",
    bullets: [
      "Built SPECmate (Llama3-70B/Groq): auto-generates IEEE-compliant SRS artifacts (test cases, use cases, functional modules) achieving over 90% format compliance across 5 client documents",
      "Engineered FastAPI NLP preprocessing pipeline (cleaning, segmentation, normalisation) to reduce hallucination rate; built multi-layer validation engine across Express.js/SQLite/React stack",
    ],
    tech: ["React", "Express.js", "FastAPI", "SQLite", "Llama3-70B", "Groq", "Node.js"],
  },
]

// ─── Skills ─────────────────────────────────────────────────────────
const SKILLS = [
  { group: "AI & LLMs", domain: "AI & LLMs", items: ["LangGraph", "RAG Pipelines", "Gemini API", "Groq", "ChromaDB", "FAISS", "Qdrant", "Multi-Agent Systems", "Prompt Engineering", "Hugging Face"] },
  { group: "ML & DL", domain: "ML Research", items: ["PyTorch", "BERT", "RoBERTa", "CNN", "LSTM", "Scikit-learn", "Sentence Transformers", "NumPy"] },
  { group: "Backend", domain: "Backend", items: ["FastAPI", "Flask", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "JWT Auth", "REST APIs", "Docker", "Rate Limiting"] },
  { group: "Frontend", domain: "Full Stack", items: ["React", "Next.js", "JavaScript", "TypeScript", "CSS3", "PyQt6", "Streamlit"] },
]

// ─── Certifications ─────────────────────────────────────────────────
const CERTS = [
  { title: "McKinsey Forward Program", issuer: "McKinsey & Company", date: "Jun 2026", link: "https://www.credly.com/badges/208bf6b8-d538-4fe9-9b5d-69cddfdcba01" },
  { title: "AWS Academy: Cloud Foundations", issuer: "Amazon Web Services", date: "Jun 2026", link: "https://www.credly.com/badges/cfd7d8cc-e06d-470c-933e-0236b5fe66a1/public_url" },
  { title: "AWS Academy: Cloud Web App Builder", issuer: "Amazon Web Services", date: "May 2026", link: "https://www.credly.com/badges/8b610ee6-d870-4a38-9b63-7a654d16996c/public_url" },
  { title: "AWS Cloud Quest: Cloud Practitioner", issuer: "Amazon Web Services", date: "Apr 2026", link: "https://www.credly.com/badges/63403b54-c5ed-42e9-8b85-fb9607c48ec2/public_url" },
  { title: "Intro to Generative AI for Software Dev", issuer: "DeepLearning.AI", date: "Mar 2025", link: "https://coursera.org/share/3b744adc5fe0d6b8c7a502783de0884a" },
]

// ─── Section nav config ─────────────────────────────────────────────
const SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certs" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

// ─── Component ──────────────────────────────────────────────────────
export default function Portfolio() {
  const [domainFilter, setFilter] = useState("All")
  const [showAll, setShowAll] = useState(false)
  const [activeSection, setActive] = useState("experience")

  // Scroll spy
  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: "-56px 0px -50% 0px", threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const FILTERS = ["All", "AI & LLMs", "Backend", "ML Research", "Full Stack"]
  const filtered = domainFilter === "All" ? PROJECTS : PROJECTS.filter(p => p.domain === domainFilter)
  const visible = showAll ? filtered : filtered.slice(0, 4)

  return (
    <div className="pf-wrap">

      {/* ── LEFT SIDEBAR ── */}
      <aside className="pf-sidebar">
        <div className="pf-sidebar-inner">

          <div className="pf-photo-wrap">
            <img
              src={`${process.env.PUBLIC_URL}/images/ibrahim-pfp.jpeg`}
              alt="Ibrahim Ahmad Siddiqi"
              className="pf-photo"
            />
          </div>

          <h1 className="pf-name">Ibrahim<br />Ahmad<br />Siddiqi</h1>

          <p className="pf-tagline">
            AI systems · LLM orchestration · Backend engineering
          </p>

          <div className="pf-domain-pills">
            <span className="pf-pill pf-pill-ai">AI Engineer</span>
            <span className="pf-pill pf-pill-be">Backend Engineer</span>
          </div>

          <p className="pf-bio">
            Software Engineering graduate from FAST-NUCES building
            production AI systems, from 13-agent LLM orchestration to
            scalable REST APIs and NLP research.
          </p>

          <div className="pf-sidebar-links">
            <a href="mailto:ibrahimsiddiqi12@gmail.com" className="pf-link">
              <FaEnvelope /> ibrahimsiddiqi12@gmail.com
            </a>
            <a href="https://github.com/Ibrahim8781" target="_blank" rel="noopener noreferrer" className="pf-link">
              <FaGithub /> github.com/Ibrahim8781
            </a>
            <a href="https://www.linkedin.com/in/ibrahim-ahmad-20355a288/" target="_blank" rel="noopener noreferrer" className="pf-link">
              <FaLinkedin /> LinkedIn
            </a>
            <span className="pf-link pf-link-loc">
              <FaMapMarkerAlt /> Islamabad, Pakistan
            </span>
          </div>

          <a
            href={`${process.env.PUBLIC_URL}/resume/Ibrahim_Ahmad_Siddiqi_Resume.pdf`}
            className="pf-resume-btn"
            download
          >
            Download Resume
          </a>

          <div className="pf-legend">
            {[
              { key: "AI & LLMs", label: "AI & LLMs" },
              { key: "Backend", label: "Backend / Full Stack" },
              { key: "ML Research", label: "ML Research" },
            ].map(({ key, label }) => (
              <div key={key} className="pf-legend-row">
                <span className="pf-legend-dot" style={{ background: DOMAIN[key].color }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* ── RIGHT CONTENT ── */}
      <main className="pf-main">

        {/* ── EXPERIENCE (first) ── */}
        <section className="pf-section" id="experience">
          <div className="pf-section-head">
            <h2 className="pf-section-title">Experience</h2>
          </div>

          <div className="pf-exp-list">
            {EXPERIENCES.map(exp => {
              const d = DOMAIN[exp.domain] || DOMAIN["Backend"]
              return (
                <article key={exp.id} className="pf-exp-entry">
                  <div className="pf-exp-left">
                    <div className="pf-exp-indicator" style={{ background: d.color }} />
                  </div>
                  <div className="pf-exp-right">
                    <div className="pf-exp-meta">
                      <span className="pf-exp-period">{exp.period}</span>
                      <span className="pf-exp-location">{exp.location}</span>
                    </div>
                    <h3 className="pf-exp-company">{exp.company}</h3>
                    <h4 className="pf-exp-role">{exp.role}</h4>
                    <p className="pf-exp-summary">{exp.summary}</p>
                    <ul className="pf-exp-bullets">
                      {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                    <div className="pf-exp-tech">
                      {exp.tech.map(t => <span key={t} className="pf-tag">{t}</span>)}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <div className="pf-divider" />

        {/* ── PROJECTS ── */}
        <section className="pf-section" id="projects">
          <div className="pf-section-head">
            <h2 className="pf-section-title">Projects</h2>
            <span className="pf-section-count">{filtered.length} projects</span>
          </div>

          <div className="pf-filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`pf-filter-btn ${domainFilter === f ? "active" : ""}`}
                style={domainFilter === f && f !== "All" ? {
                  background: DOMAIN[f]?.bg,
                  color: DOMAIN[f]?.color,
                  borderColor: DOMAIN[f]?.border,
                } : {}}
                onClick={() => { setFilter(f); setShowAll(false) }}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="pf-projects-list">
            {visible.map(p => {
              const d = DOMAIN[p.domain] || DOMAIN["Backend"]
              return (
                <article
                  key={p.id}
                  className="pf-project-card"
                  style={{ "--domain-color": d.color, "--domain-border": d.border }}
                >
                  <div className="pf-project-domain-bar" style={{ background: d.color }} />
                  <div className="pf-project-body">
                    <div className="pf-project-header">
                      <div className="pf-project-meta">
                        <span className="pf-domain-badge" style={{ color: d.color, background: d.bg, borderColor: d.border }}>
                          {p.domain}
                        </span>
                        <span className="pf-project-year">{p.year}</span>
                      </div>
                      <span className="pf-project-metric">{p.metric}</span>
                    </div>

                    <h3 className="pf-project-title">{p.title}</h3>
                    <p className="pf-project-tagline">{p.tagline}</p>

                    <ul className="pf-proj-bullets">
                      {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>

                    <div className="pf-project-tags">
                      {p.tags.map(t => <span key={t} className="pf-tag">{t}</span>)}
                    </div>

                    {((p.github && p.github !== "#") || p.demo) && (
                      <div className="pf-project-actions">
                        {p.github && p.github !== "#" && (
                          <a href={p.github} target="_blank" rel="noopener noreferrer" className="pf-gh-link">
                            GitHub →
                          </a>
                        )}
                        {p.demo && (
                          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="pf-gh-link">
                            Live demo →
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>

          {filtered.length > 5 && (
            <button className="pf-load-more" onClick={() => setShowAll(s => !s)}>
              {showAll ? "Show fewer" : `Show all ${filtered.length} projects`}
            </button>
          )}
        </section>

        <div className="pf-divider" />

        {/* ── SKILLS ── */}
        <section className="pf-section" id="skills">
          <div className="pf-section-head">
            <h2 className="pf-section-title">Skills</h2>
          </div>
          <div className="pf-skills-grid">
            {SKILLS.map(g => {
              const d = DOMAIN[g.domain] || DOMAIN["Backend"]
              return (
                <div key={g.group} className="pf-skill-group">
                  <h4 className="pf-skill-group-name" style={{ color: d.color }}>{g.group}</h4>
                  <div className="pf-skill-badges">
                    {g.items.map(s => <span key={s} className="pf-tag">{s}</span>)}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <div className="pf-divider" />

        {/* ── CERTIFICATIONS ── */}
        <section className="pf-section" id="certifications">
          <div className="pf-section-head">
            <h2 className="pf-section-title">Certifications</h2>
          </div>
          <div className="pf-cert-list">
            {CERTS.map((c, i) => (
              <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="pf-cert-row">
                <div className="pf-cert-info">
                  <span className="pf-cert-title">{c.title}</span>
                  <span className="pf-cert-meta">{c.issuer} · {c.date}</span>
                </div>
                <span className="pf-cert-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        <div className="pf-divider" />

        {/* ── EDUCATION ── */}
        <section className="pf-section" id="education">
          <div className="pf-section-head">
            <h2 className="pf-section-title">Education</h2>
          </div>
          <div className="pf-edu-entry">
            <div className="pf-edu-head">
              <div>
                <h3 className="pf-edu-uni">FAST-NUCES, Islamabad</h3>
                <h4 className="pf-edu-degree">BS Software Engineering</h4>
              </div>
              <span className="pf-edu-meta">2022 - Jun 2026</span>
            </div>
            <div className="pf-exp-tech" style={{ marginTop: "14px" }}>
              {["Generative AI", "Applied AI", "Object-Oriented Programming", "Software Design & Architecture", "Data Structures & Algorithms", "Cloud Computing", "Web Engineering", "DevOps", "Software Engineering"].map(c => (
                <span key={c} className="pf-tag">{c}</span>
              ))}
            </div>
          </div>
          <div className="pf-involvement">
            <h4 className="pf-involvement-title">Campus Involvement</h4>
            <div className="pf-involvement-list">
              {[
                { role: "Media Head", org: "Fast Software Engineering Society", date: "Aug 2023 - May 2024" },
                { role: "Media Officer", org: "Google Developer Student Club", date: "Aug 2023 - May 2024" },
                { role: "Management Officer", org: "NASCON 2024", date: "Mar 2024" },
              ].map(i => (
                <div key={i.role} className="pf-involvement-item">
                  <strong>{i.role}</strong>
                  <span className="pf-involvement-org">{i.org}</span>
                  <span className="pf-involvement-date">{i.date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="pf-divider" />

        {/* ── CONTACT ── */}
        <section className="pf-section" id="contact">
          <div className="pf-section-head">
            <h2 className="pf-section-title">Contact</h2>
          </div>
          <p className="pf-contact-sub">
            Open to AI/Backend roles, research collaborations, and freelance projects.
          </p>
          <div className="pf-contact-links">
            <a href="mailto:ibrahimsiddiqi12@gmail.com" className="pf-contact-link">
              <FaEnvelope /> ibrahimsiddiqi12@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/ibrahim-ahmad-20355a288/" target="_blank" rel="noopener noreferrer" className="pf-contact-link">
              <FaLinkedin /> LinkedIn Profile
            </a>
            <a href="https://github.com/Ibrahim8781" target="_blank" rel="noopener noreferrer" className="pf-contact-link">
              <FaGithub /> github.com/Ibrahim8781
            </a>
          </div>
        </section>

        <div className="pf-footer-note">
          Built with React · Deployed on GitHub Pages
        </div>

      </main>

      {/* ── RIGHT SECTION NAV DOTS ── */}
      <nav className="pf-snav" aria-label="Page sections">
        {SECTIONS.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`pf-snav-item ${activeSection === s.id ? "active" : ""}`}
            title={s.label}
          >
            <span className="pf-snav-label">{s.label}</span>
            <span className="pf-snav-dot" />
          </a>
        ))}
      </nav>

      {/* ── DOMAIN MORPH STRIP ── */}
      <MorphStrip activeSection={activeSection} />

    </div>
  )
}
