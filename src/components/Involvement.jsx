import "./Involvement.css"

const Involvement = () => {
  const involvements = [
    {
      role: "Media Head",
      organization: "Fast Software Engineering Society",
      period: "August 2023 - May 2024",
      description:
        "Led the media team in creating promotional materials and managing social media presence for the society. Organized technical workshops and networking events.",
    },
    {
      role: "Media Officer",
      organization: "Google Developer Student Club",
      period: "August 2023 - May 2024",
      description:
        "Created visual content for events and workshops. Collaborated with the team to promote Google technologies and resources among students.",
    },
    {
      role: "Management Officer",
      organization: "NASCON",
      period: "March 2024",
      description:
        "Assisted in organizing the National Software Competition (NASCON), managing logistics and coordinating with participants and judges.",
    },
  ]

  return (
    <section id="involvement" className="involvement">
      <div className="section-header">
        <h2>
          Campus <span>Involvement</span>
        </h2>
        <div className="underline"></div>
      </div>
      <div className="involvement-content">
        <div className="involvement-cards">
          {involvements.map((item, index) => (
            <div className="involvement-card" key={index}>
              <div className="involvement-header">
                <h3>{item.role}</h3>
                <span className="organization">{item.organization}</span>
              </div>
              <div className="involvement-period">{item.period}</div>
              <p className="involvement-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Involvement
