function ContactCTA({ tags }) {
  return (
    <div className="footer-cta">
      <div>
        <p className="footer-cta-text">
          <strong>Available immediately across the UAE</strong>
        </p>
        <div className="role-tags">
          {tags.map((tag) => (
            <span key={tag} className="role-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a href="mailto:your.email@example.com" className="cta-button">
        Get in touch
      </a>
    </div>
  );
}

export default ContactCTA;
