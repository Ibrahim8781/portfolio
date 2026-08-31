import "./Education.css"

const Education = () => {
  const education = {
    university: "National University of Computer & Emerging Science (FAST-NUCES)",
    location: "Islamabad, Pakistan",
    degree: "Bachelor of Science, Software Engineering",
    graduation: "June 2026",
    courses: [
      "Applied AI",
      "Cloud Computing",
      "Web Engineering",
      "DevOps",
      "Software Design and Architecture",
      "Data Structures & Algorithms",
      "Database Systems",
      "Object Oriented Programming",
      "Software Construction & Development",
    ],
  }

  const certifications = [
    {
      title: "McKinsey Forward Program",
      issuer: "McKinsey & Company",
      date: "June 2026",
      link: "https://www.credly.com/badges/208bf6b8-d538-4fe9-9b5d-69cddfdcba01",
    },
    {
      title: "AWS Academy Graduate – Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "June 2026",
      link: "https://www.credly.com/badges/cfd7d8cc-e06d-470c-933e-0236b5fe66a1/public_url",
    },
    {
      title: "AWS Academy Graduate – Cloud Web Application Builder",
      issuer: "Amazon Web Services (AWS)",
      date: "May 2026",
      link: "https://www.credly.com/badges/8b610ee6-d870-4a38-9b63-7a654d16996c/public_url",
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "April 2026",
      link: "https://www.credly.com/badges/63403b54-c5ed-42e9-8b85-fb9607c48ec2/public_url",
    },
    {
      title: "Introduction to Generative AI for Software Development",
      issuer: "DeepLearning.AI",
      date: "March 2025",
      link: "https://coursera.org/share/3b744adc5fe0d6b8c7a502783de0884a",
    },
  ]

  const involvement = [
    {
      role: "Technical Workshop Team",
      org: "Google Developer Student Club",
      duration: "09/2024 – 04/2025",
    },
    {
      role: "Media Head",
      org: "Fast Software Engineering Society",
      duration: "08/2023 – 05/2024",
    },
    {
      role: "Management Officer",
      org: "NASCON",
      duration: "03/2024",
    },
  ]

  return (
    <section id="education" className="education">
      <div className="section-header">
        <h2>
          Education & <span>Certifications</span>
        </h2>
        <div className="underline"></div>
      </div>
      <div className="education-content">
        <div className="education-card">
          <div className="education-icon">
            <span>🎓</span>
          </div>
          <div className="education-details">
            <h3>{education.university}</h3>
            <p className="location">{education.location}</p>
            <p className="degree">{education.degree}</p>
            <p className="graduation">Expected Graduation: {education.graduation}</p>
            <div className="courses">
              <h4>Relevant Courses:</h4>
              <div className="course-tags">
                {education.courses.map((course, index) => (
                  <span key={index} className="course-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="certifications">
          <h3>Professional Certifications</h3>
          <div className="certification-timeline">
            {certifications.map((cert, index) => (
              <div className="certification-item" key={index}>
                <div className="certification-dot"></div>
                <div className="certification-content">
                  <h4>
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        {cert.title} <span className="cert-badge-icon">↗</span>
                      </a>
                    ) : (
                      cert.title
                    )}
                  </h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="involvement">
          <h3>Campus Involvement</h3>
          <div className="involvement-list">
            {involvement.map((item, index) => (
              <div className="involvement-item" key={index}>
                <div className="involvement-icon">🏛️</div>
                <div className="involvement-content">
                  <h4>{item.role}</h4>
                  <p>{item.org}</p>
                  <span className="involvement-duration">{item.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
