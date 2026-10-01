function ModuleGrid({ modules }) {
  return (
    <div className="modules-grid">
      {modules.map((module) => (
        <article key={module.tag} className="module-card">
          <p className="module-tag">{module.tag}</p>
          <p className="module-name">{module.name}</p>
          <div className="chip-row">
            {module.items.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export default ModuleGrid;
