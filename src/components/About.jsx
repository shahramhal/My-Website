import { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm <span className="highlight">Shahram</span>, a Computer Science graduate from the{' '}
              <a href='https://www.westminster.ac.uk/' target="_blank" rel="noopener noreferrer">
                <span className="highlight">University of Westminster</span>
              </a>{' '}
              (2026). I care about shipping software that works in production, not just in theory.
            </p>
            <p>
              Over the past year I worked as a backend developer at SoftIT, designing and maintaining
              systems that support over 1,000 concurrent users and contributing to microservices
              architecture decisions that improved API response times across the platform.
              Alongside that, I built a full-stack AI career coaching platform as my final year project,
              combining LLMs, NLP and a TypeScript/Python stack across five microservices.
            </p>
            <div className="interests-block">
              <span className="interests-label">Outside of work</span>
              <ul className="interest-list">
                <li>📖 Reading</li>
                <li>⚽ Football</li>
                <li>✈️ Travel &amp; new cultures</li>
                <li>🔍 Code review &amp; clean architecture</li>
              </ul>
            </div>
          </div>
          <div className="skills-container">
            <h3>Technical Skills</h3>
            <div className="skills-grid-new">
              {[
                {
                  name: 'Python',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                  color: '#3776AB'
                },
                {
                  name: 'TypeScript',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                  color: '#3178C6'
                },
                {
                  name: 'Java',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
                  color: '#007396'
                },
                {
                  name: 'Django',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
                  color: '#092E20'
                },
                {
                  name: 'FastAPI',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
                  color: '#009688'
                },
                {
                  name: 'Node.js',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                  color: '#339933'
                },
                {
                  name: 'Express',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
                  color: '#000000',
                  forceLight: true
                },
                {
                  name: 'React',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                  color: '#61DAFB'
                },
                {
                  name: 'PostgreSQL',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                  color: '#4479A1'
                },
                {
                  name: 'MySQL',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
                  color: '#00758F'
                },
                {
                  name: 'MongoDB',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                  color: '#47A248'
                },
                {
                  name: 'Prisma',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
                  color: '#2D3748',
                  forceLight: true
                },
                {
                  name: 'Docker',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                  color: '#2496ED'
                },
                {
                  name: 'Git',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                  color: '#F05032'
                },
                {
                  name: 'PHP',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
                  color: '#777BB4'
                }
              ].map((skill) => (
                <div key={skill.name} className="skill-card-new">
                  <div
                    className="skill-icon"
                    style={{ backgroundColor: skill.forceLight ? 'rgba(255, 255, 255, 0.92)' : `${skill.color}15` }}
                  >
                    <img src={skill.logo} alt={skill.name} className="skill-logo" />
                  </div>
                  <span className="skill-name-new">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
