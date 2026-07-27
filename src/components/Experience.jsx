import { useEffect, useRef } from 'react';

const experiences = [
  {
    role: 'Backend Developer (Remote)',
    company: 'SoftIT',
    companyUrl: 'https://softit.uz/',
    location: 'Tashkent, Uzbekistan',
    period: 'Nov 2024 - May 2025',
    highlights: [
      'Designed and maintained backend systems powering 5+ production-grade apps, improving backend efficiency by ~20%',
      'Used Python (Django) and React Native to support over 1,000 concurrent users',
      'Contributed to microservices architecture decisions, improving API response time and overall system reliability',
      'Implemented 100+ unit tests and led debugging efforts for stability and quality assurance',
      'Coordinated Git workflows across a 4+ developer team, reducing merge conflicts by 30%',
      'Engineered and integrated 2 cybersecurity modules, strengthening data protection for users'
    ]
  }
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((job) => (
          <div className="experience-card" key={`${job.company}-${job.role}`}>
            <div className="experience-header">
              <div>
                <h3>{job.role}</h3>
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-company"
                >
                  {job.company}
                </a>
              </div>
              <div className="experience-meta">
                <span>{job.period}</span>
                <span>{job.location}</span>
              </div>
            </div>
            <ul className="experience-highlights">
              {job.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
