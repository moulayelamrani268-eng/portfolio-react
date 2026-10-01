function ExperienceTimeline({ items }) {
  return (
    <div className="experience-list">
      {items.map((item) => (
        <article key={item.role} className="exp-item">
          <div className="exp-header">
            <p className="exp-role">{item.role}</p>
            <p className="exp-date">{item.dates}</p>
          </div>
          <p className="exp-company">{item.company}</p>
          <ul className="exp-bullets">
            {item.bullets.map((bullet, idx) => (
              <li key={`${item.role}-${idx}`}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default ExperienceTimeline;
