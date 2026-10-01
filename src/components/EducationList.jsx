function EducationList({ items }) {
  return (
    <div className="education-list">
      {items.map((item) => (
        <div key={item.degree} className="edu-row">
          <div>
            <p className="edu-degree">{item.degree}</p>
            <p className="edu-school">{item.school}</p>
          </div>
          <p className="edu-year">{item.year}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationList;
