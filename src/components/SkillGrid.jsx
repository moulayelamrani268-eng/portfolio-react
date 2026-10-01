function SkillGrid({ groups }) {
  return (
    <div className="skills-grid">
      {groups.map((group) => (
        <div key={group.title} className="skill-group">
          <p className="skill-group-title">{group.title}</p>
          <div className="tag-row">
            {group.items.map((item) => (
              <span key={item} className={`tag ${group.highlight ? 'hi' : ''}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillGrid;
