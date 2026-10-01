function Hero({ profile }) {
  return (
    <header className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{profile.tagline}</p>
        <h1 className="hero-name">{profile.fullName}</h1>
        <p className="hero-title">{profile.title}</p>

        <div className="contact-row">
          <span className="contact-item">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21s-6.716-5.373-9.192-8.49A6.5 6.5 0 1 1 21.19 12.51C18.716 15.627 12 21 12 21Z" />
            </svg>
            {profile.location}
          </span>
          <span className="contact-item">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M2 10h20" />
            </svg>
            {profile.visa}
          </span>
          <span className="contact-item">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
              <path d="m22 7-10 7L2 7" />
            </svg>
            {profile.email}
          </span>
          <span className="contact-item">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.64a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.44-1.28a2 2 0 0 1 2.11-.45c.86.3 1.74.51 2.64.63A2 2 0 0 1 22 16.92Z" />
            </svg>
            {profile.phone}
          </span>
        </div>
      </div>

      <div className="cert-block">
        <p className="cert-label">Certified</p>
        <p className="cert-name">{profile.certification.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}</p>
      </div>
    </header>
  );
}

export default Hero;
