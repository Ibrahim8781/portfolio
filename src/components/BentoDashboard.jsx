"use client"
import { useState } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import "./BentoDashboard.css"

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { number: "11+", label: "Projects Built", sub: "AI · Backend · Full Stack", color: "#818CF8" },
  { number: "13", label: "AI Agents", sub: "Multi-Agent System", color: "#C084FC" },
  { number: "99.9%", label: "Model Accuracy", sub: "BERT / RoBERTa Classifier", color: "#34D399" },
  { number: "85+", label: "SEO Score", sub: "LLM content pipeline", color: "#FBBF24" },
]

const FEATURED = [
  {
    id: 1,
    category: "Multi-Agent AI",
    title: "AI Orchestration System",
    description:
      "Gemini-powered orchestration for a 13-agent educational AI system with two-tier memory and LangGraph state machine routing.",
    highlight: "13 Agents · Sub-100ms dispatch",
    tags: ["LangGraph", "Gemini API", "FastAPI", "ChromaDB", "Python"],
    accent: "#818CF8",
    metric: { value: "13", label: "AI Agents" },
    details: [
      "Single-call intent dispatch with confidence scoring and conversational clarification, cutting latency & cost",
      "Two-tier memory: short-term session recall + per-agent long-term store for cross-turn context continuity",
      "LangGraph state machine for agent routing, tool calling, and graceful fallback handling",
    ],
    github: "#",
  },
  {
    id: 2,
    category: "AI + Backend Platform",
    title: "SEOmation",
    description:
      "3-service content-automation platform — multi-engine research pipeline, LLM content generator scoring 85+ on SEO tools, and event-driven scheduler.",
    highlight: "85+ SEO Score · RAG-powered",
    tags: ["Express.js", "Flask", "PostgreSQL", "Groq", "Qdrant", "React"],
    accent: "#C084FC",
    metric: { value: "85+", label: "SEO Score" },
    details: [
      "3-service platform: Express.js/PostgreSQL backend, Python AI service, React frontend with automatic repair pass for malformed LLM responses",
      "Event-driven Node.js scheduler with retry/backoff and missed-job recovery for autonomous publishing",
      "Qdrant + Cohere embeddings for real-time RAG-powered content generation",
    ],
    github: "https://github.com/Ibrahim8781/SEOmation",
  },
  {
    id: 3,
    category: "NLP Research",
    title: "AI Text Detector",
    description:
      "BERT & RoBERTa binary classifiers distinguishing AI-generated from human-written text, with rigorous overfitting analysis.",
    highlight: "99.91% accuracy · AUC-ROC 0.9999",
    tags: ["BERT", "RoBERTa", "TensorFlow", "NLP", "Hugging Face"],
    accent: "#34D399",
    metric: { value: "99.9%", label: "Accuracy" },
    details: [
      "Implemented Logistic Regression baseline, BERT (110M), and RoBERTa (125M) on HC3 + Kaggle datasets (~10,000 samples)",
      "99.91% validation accuracy under moderate regularization (AdamW lr=2e-5, weight decay=0.01, early stopping); AUC-ROC 0.9999",
      "Rigorous accuracy–robustness analysis: aggressive regularization (dropout=0.3, gradient clipping) produced 97.26% accuracy with genuine generalization dynamics",
    ],
    github: "#",
  },
]

const EXPERIENCES = [
  {
    company: "Research Lab",
    role: "Full-Stack Python Intern",
    period: "Jun – Aug 2026",
    type: "Remote",
    highlights: [
      "Built EcoTrack — PyQt6 CO₂ emissions desktop tracker",
      "Integrated IEA carbon-intensity API for live data",
    ],
    accent: "#34D399",
  },
  {
    company: "Systems Limited",
    role: "Software Engineering Intern",
    period: "Jun – Aug 2025",
    type: "Islamabad",
    highlights: [
      "Built SPECmate — LLM SRS artifact generator (Llama3-70B)",
      "FastAPI backend + NLP pipeline for requirement processing",
    ],
    accent: "#818CF8",
  },
]

const SKILL_GROUPS = [
  {
    label: "AI & LLMs",
    color: "#818CF8",
    items: ["LangGraph", "RAG Pipelines", "Gemini API", "Groq", "ChromaDB", "FAISS", "Qdrant", "Multi-Agent Systems", "Prompt Engineering", "Hugging Face"],
  },
  {
    label: "ML & DL",
    color: "#C084FC",
    items: ["TensorFlow", "PyTorch", "BERT", "RoBERTa", "CNN", "LSTM", "Scikit-learn", "Sentence Transformers", "NumPy"],
  },
  {
    label: "Backend",
    color: "#34D399",
    items: ["FastAPI", "Flask", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "JWT Auth", "REST APIs", "Docker", "Rate Limiting"],
  },
  {
    label: "Frontend",
    color: "#FBBF24",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "CSS3", "PyQt6", "Streamlit"],
  },
]

const CERTS = [
  { title: "McKinsey Forward Program", issuer: "McKinsey & Company", date: "Jun 2026", link: "https://www.credly.com/badges/208bf6b8-d538-4fe9-9b5d-69cddfdcba01", icon: "◆" },
  { title: "AWS Academy – Cloud Foundations", issuer: "Amazon Web Services", date: "Jun 2026", link: "https://www.credly.com/badges/cfd7d8cc-e06d-470c-933e-0236b5fe66a1/public_url", icon: "☁" },
  { title: "AWS Academy – Cloud Web App Builder", issuer: "Amazon Web Services", date: "May 2026", link: "https://www.credly.com/badges/8b610ee6-d870-4a38-9b63-7a654d16996c/public_url", icon: "☁" },
  { title: "AWS Cloud Quest: Cloud Practitioner", issuer: "Amazon Web Services", date: "Apr 2026", link: "https://www.credly.com/badges/63403b54-c5ed-42e9-8b85-fb9607c48ec2/public_url", icon: "☁" },
  { title: "Intro to Generative AI for Software Dev", issuer: "DeepLearning.AI", date: "Mar 2025", link: "https://coursera.org/share/3b744adc5fe0d6b8c7a502783de0884a", icon: "✦" },
]

// ─── Component ────────────────────────────────────────────────────────────────

const BentoDashboard = () => {
  const [modal, setModal] = useState(null)
  const [activeSkill, setActiveSkill] = useState(0)

  return (
    <>
      {/* ── Modal Overlay ── */}
      {modal && (
        <div className="bd-backdrop" onClick={() => setModal(null)}>
          <div className="bd-modal" onClick={e => e.stopPropagation()}>
            <button className="bd-modal-close" onClick={() => setModal(null)}>✕</button>
            <span className="bd-modal-cat" style={{ color: modal.accent }}>{modal.category}</span>
            <div className="bd-modal-metric-row">
              <span className="bd-modal-metric-num" style={{ color: modal.accent }}>{modal.metric.value}</span>
              <span className="bd-modal-metric-label">{modal.metric.label}</span>
            </div>
            <h2 className="bd-modal-title">{modal.title}</h2>
            <p className="bd-modal-desc">{modal.description}</p>
            <div className="bd-modal-tags">
              {modal.tags.map(t => <span key={t} className="bd-modal-tag">{t}</span>)}
            </div>
            <ul className="bd-modal-list">
              {modal.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
            {modal.github && modal.github !== "#" && (
              <a href={modal.github} className="bd-modal-gh" target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            )}
          </div>
        </div>
      )}

      {/* ── Bento Grid ── */}
      <div className="bd-page">
        <div className="bd-grid">

          {/* ── HERO ── */}
          <div className="bd-tile bd-hero">
            <div className="bd-available-badge">
              <span className="bd-pulse-dot" />
              Available for opportunities
            </div>
            <div className="bd-photo-ring">
              <img
                src={`${process.env.PUBLIC_URL}/images/ibrahim-pfp.jpeg`}
                alt="Ibrahim Ahmad Siddiqi"
                className="bd-photo"
              />
            </div>
            <h1 className="bd-name">Ibrahim<br />Ahmad Siddiqi</h1>
            <div className="bd-roles">
              <span className="bd-role-pill bd-role-ai">AI Engineer</span>
              <span className="bd-role-sep">·</span>
              <span className="bd-role-pill bd-role-be">Backend Engineer</span>
            </div>
            <p className="bd-bio">
              Building <strong>intelligent systems</strong> — multi-agent LLM orchestration,
              RAG pipelines, and production-grade REST APIs that scale.
            </p>
            <a
              href={`${process.env.PUBLIC_URL}/resume/Ibrahim_Ahmad_Siddiqi_Resume.pdf`}
              className="bd-resume-btn"
              download
            >
              Download Resume
            </a>
            <div className="bd-hero-socials">
              <a href="https://github.com/Ibrahim8781" target="_blank" rel="noopener noreferrer" className="bd-social-icon" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ibrahim-ahmad-20355a288/" target="_blank" rel="noopener noreferrer" className="bd-social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:ibrahimsiddiqi12@gmail.com" className="bd-social-icon" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
            <div className="bd-hero-location">
              <FaMapMarkerAlt /> Islamabad, Pakistan · FAST-NUCES '26
            </div>
          </div>

          {/* ── STATS ── */}
          {STATS.map((s, i) => (
            <div key={i} className={`bd-tile bd-stat bd-stat-${i + 1}`}>
              <div className="bd-stat-num" style={{ color: s.color }}>{s.number}</div>
              <div className="bd-stat-label">{s.label}</div>
              <div className="bd-stat-sub">{s.sub}</div>
            </div>
          ))}

          {/* ── FEATURED PROJECT 1 (tall) ── */}
          <div
            className="bd-tile bd-feat bd-feat-1"
            style={{ "--accent": FEATURED[0].accent }}
            onClick={() => setModal(FEATURED[0])}
          >
            <div className="bd-feat-accent-bar" style={{ background: FEATURED[0].accent }} />
            <span className="bd-feat-cat" style={{ color: FEATURED[0].accent }}>{FEATURED[0].category}</span>
            <div className="bd-feat-big-metric">
              <span style={{ color: FEATURED[0].accent }}>{FEATURED[0].metric.value}</span>
              <small>{FEATURED[0].metric.label}</small>
            </div>
            <h3 className="bd-feat-title">{FEATURED[0].title}</h3>
            <p className="bd-feat-desc">{FEATURED[0].description}</p>
            <div className="bd-feat-tags">
              {FEATURED[0].tags.map(t => <span key={t} className="bd-feat-tag">{t}</span>)}
            </div>
            <div className="bd-feat-cta">Tap to explore →</div>
          </div>

          {/* ── EXPERIENCE ── */}
          <div className="bd-tile bd-experience">
            <p className="bd-tile-label">Work Experience</p>
            <div className="bd-exp-list">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="bd-exp-item">
                  <div className="bd-exp-bar" style={{ background: exp.accent }} />
                  <div className="bd-exp-body">
                    <div className="bd-exp-head">
                      <span className="bd-exp-company">{exp.company}</span>
                      <span className="bd-exp-period">{exp.period}</span>
                    </div>
                    <div className="bd-exp-role">{exp.role}</div>
                    <ul className="bd-exp-points">
                      {exp.highlights.map((h, j) => <li key={j}>{h}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="bd-edu-block">
              <p className="bd-tile-label" style={{ marginTop: "18px" }}>Education</p>
              <div className="bd-edu-uni">FAST-NUCES, Islamabad</div>
              <div className="bd-edu-degree">BS Software Engineering</div>
              <div className="bd-edu-meta">Expected Jun 2026 · GPA: 3.0</div>
              <div className="bd-edu-courses">
                {["Applied AI", "Cloud Computing", "Web Engineering", "DevOps"].map(c => (
                  <span key={c} className="bd-edu-tag">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── FEATURED PROJECT 2 ── */}
          <div
            className="bd-tile bd-feat bd-feat-2"
            style={{ "--accent": FEATURED[1].accent }}
            onClick={() => setModal(FEATURED[1])}
          >
            <div className="bd-feat-accent-bar" style={{ background: FEATURED[1].accent }} />
            <span className="bd-feat-cat" style={{ color: FEATURED[1].accent }}>{FEATURED[1].category}</span>
            <div className="bd-feat-big-metric">
              <span style={{ color: FEATURED[1].accent }}>{FEATURED[1].metric.value}</span>
              <small>{FEATURED[1].metric.label}</small>
            </div>
            <h3 className="bd-feat-title">{FEATURED[1].title}</h3>
            <p className="bd-feat-desc">{FEATURED[1].description}</p>
            <div className="bd-feat-tags">
              {FEATURED[1].tags.map(t => <span key={t} className="bd-feat-tag">{t}</span>)}
            </div>
            <div className="bd-feat-cta">Tap to explore →</div>
          </div>

          {/* ── FEATURED PROJECT 3 ── */}
          <div
            className="bd-tile bd-feat bd-feat-3"
            style={{ "--accent": FEATURED[2].accent }}
            onClick={() => setModal(FEATURED[2])}
          >
            <div className="bd-feat-accent-bar" style={{ background: FEATURED[2].accent }} />
            <span className="bd-feat-cat" style={{ color: FEATURED[2].accent }}>{FEATURED[2].category}</span>
            <div className="bd-feat-big-metric">
              <span style={{ color: FEATURED[2].accent }}>{FEATURED[2].metric.value}</span>
              <small>{FEATURED[2].metric.label}</small>
            </div>
            <h3 className="bd-feat-title">{FEATURED[2].title}</h3>
            <p className="bd-feat-desc">{FEATURED[2].description}</p>
            <div className="bd-feat-tags">
              {FEATURED[2].tags.map(t => <span key={t} className="bd-feat-tag">{t}</span>)}
            </div>
            <div className="bd-feat-cta">Tap to explore →</div>
          </div>

          {/* ── SKILLS ── */}
          <div className="bd-tile bd-skills">
            <p className="bd-tile-label">Technical Stack</p>
            <div className="bd-skill-tabs">
              {SKILL_GROUPS.map((g, i) => (
                <button
                  key={i}
                  className={`bd-skill-tab ${activeSkill === i ? "active" : ""}`}
                  style={activeSkill === i ? { borderColor: g.color, color: g.color } : {}}
                  onClick={() => setActiveSkill(i)}
                >
                  {g.label}
                </button>
              ))}
            </div>
            <div className="bd-skill-cloud">
              {SKILL_GROUPS[activeSkill].items.map(s => (
                <span key={s} className="bd-skill-badge"
                  style={{ "--tag-color": SKILL_GROUPS[activeSkill].color }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* ── CERTIFICATIONS ── */}
          <div className="bd-tile bd-certs">
            <p className="bd-tile-label">Certifications</p>
            <div className="bd-cert-list">
              {CERTS.map((c, i) => (
                <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="bd-cert-row">
                  <span className="bd-cert-icon">{c.icon}</span>
                  <div className="bd-cert-info">
                    <span className="bd-cert-title">{c.title}</span>
                    <span className="bd-cert-meta">{c.issuer} · {c.date}</span>
                  </div>
                  <span className="bd-cert-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── CONTACT ── */}
          <div className="bd-tile bd-contact">
            <p className="bd-tile-label">Let's Connect</p>
            <p className="bd-contact-sub">Open to AI/Backend roles &amp; collaborations.</p>
            <div className="bd-contact-rows">
              <a href="mailto:ibrahimsiddiqi12@gmail.com" className="bd-contact-row">
                <FaEnvelope className="bd-contact-icon" />
                <span>ibrahimsiddiqi12@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/ibrahim-ahmad-20355a288/" target="_blank" rel="noopener noreferrer" className="bd-contact-row">
                <FaLinkedin className="bd-contact-icon" />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/Ibrahim8781" target="_blank" rel="noopener noreferrer" className="bd-contact-row">
                <FaGithub className="bd-contact-icon" />
                <span>github.com/Ibrahim8781</span>
              </a>
              <div className="bd-contact-row bd-contact-loc">
                <FaMapMarkerAlt className="bd-contact-icon" />
                <span>Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          {/* ── MORE PROJECTS ── */}
          <div className="bd-tile bd-more-projects">
            <p className="bd-tile-label">More Projects</p>
            <div className="bd-mini-grid">
              {[
                { t: "RAG FYP Handbook", tag: "FAISS · Sentence-BERT", url: "https://github.com/Ibrahim8781/RAG-FYP-Handbook-Assistant" },
                { t: "Sign Language CNN", tag: "CNN · TensorFlow", url: "#" },
                { t: "Recipe & Meal Planner", tag: "React · Express · Docker", url: "https://github.com/im-sami/SCD-Project-Recipe" },
                { t: "Image Moderation App", tag: "FastAPI · AWS Rekognition", url: "https://github.com/Ibrahim8781/Image-Moderation-App" },
                { t: "Timetable Scheduler", tag: "CSP · Genetic Algorithms", url: "https://github.com/Ibrahim8781/University-TimeTable-Scheduler" },
                { t: "Movie Recommender", tag: "Express · MongoDB · JWT", url: "https://github.com/Ibrahim8781/Movie-Recommendation-Backend" },
                { t: "Next-Word LSTM", tag: "LSTM · NLP · TensorFlow", url: "#" },
                { t: "Rate-My-Professor RAG", tag: "RAG · Flask · Next.js", url: "https://github.com/Ibrahim8781/Rate-My-Professor-RAG" },
              ].map((p, i) => (
                <a
                  key={i}
                  href={p.url !== "#" ? p.url : undefined}
                  target={p.url !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`bd-mini-card ${p.url === "#" ? "no-link" : ""}`}
                >
                  <span className="bd-mini-title">{p.t}</span>
                  <span className="bd-mini-tag">{p.tag}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default BentoDashboard
