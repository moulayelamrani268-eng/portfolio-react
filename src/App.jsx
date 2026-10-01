import Hero from './components/Hero';
import ModuleGrid from './components/ModuleGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillGrid from './components/SkillGrid';
import EducationList from './components/EducationList';
import ContactCTA from './components/ContactCTA';
import { profile, modules, experience, skills, education, tags } from './data/portfolioData';

function App() {
  return (
    <main className="page-shell">
      <Hero profile={profile} />

      <section className="section-block">
        <p className="section-label">Profile</p>
        <p className="summary-text">{profile.summary}</p>
      </section>

      <section className="section-block">
        <p className="section-label">SAP FICO modules</p>
        <ModuleGrid modules={modules} />
      </section>

      <section className="section-block">
        <p className="section-label">Experience</p>
        <ExperienceTimeline items={experience} />
      </section>

      <section className="section-block">
        <p className="section-label">Core skills</p>
        <SkillGrid groups={skills} />
      </section>

      <section className="section-block">
        <p className="section-label">Education &amp; certifications</p>
        <EducationList items={education} />
      </section>

      <ContactCTA tags={tags} />
    </main>
  );
}

export default App;
