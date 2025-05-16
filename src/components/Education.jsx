import "./Education.css"

const Education = () => {
  const education = {
    university: "National University of Computer & Emerging Science (FAST)",
    location: "Islamabad, Pakistan",
    degree: "Bachelor of Science, Software Engineering",
    graduation: "June 2026",
    courses: [
      "Web Engineering",
      "Software Construction & Development",
      "DevOps",
      "Applied AI",
      "Software Design and Architecture",
      "Data Structures",
      "Object Oriented Programming",
    ],
  }

  const certifications = [
    {
      title: "Generative AI for Software Development",
      date: "March 2025",
    },
    {
      title: "AI in Data Centers",
      date: "June 2023 - July 2023",
    },
    {
      title: "AI for Everyone",
      date: "May 2023 - June 2023",
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
            <i className="university-icon"></i>
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
                  <h4>{cert.title}</h4>
                  <p>{cert.date}</p>
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
