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
              Hello! I'm 
              <span className="highlight"> Shahram</span>, a Computer Science student at the 
              <a href='https://www.westminster.ac.uk/'>
              <span className="highlight" > University of Westminster  </span></a>
              with a passion for creating innovative solutions through code.
               My journey in technology is driven by curiosity and a desire to make a positive impact through software development.
            </p>
            <p>
              When I'm not coding, you can find me:
              <ul className="interest-list">
                <li>🎵 Exploring new music genres</li>
                <li>🏃‍♂️ Staying active through sports</li>
                <li>📚 Learning about new technologies</li>
                <li>🌟 Working on side projects</li>
              </ul>
            </p>
            <p>
              I believe in continuous learning and am always excited to take on new challenges that push my boundaries and help me grow as a developer.
            </p>
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
                  name: 'Java',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
                  color: '#007396'
                },
                { 
                  name: 'JavaScript',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                  color: '#F7DF1E'
                },
                { 
                  name: 'SQL',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                  color: '#4479A1'
                },
                { 
                  name: 'Django',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
                  color: '#092E20'
                },
                { 
                  name: 'React',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                  color: '#61DAFB'
                },
                { 
                  name: 'Kotlin',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
                  color: '#7F52FF'
                },
                { 
                  name: 'HTML/CSS',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                  color: '#E34F26'
                },
                { 
                  name: 'Git',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                  color: '#F05032'
                },
                { 
                  name: 'Docker',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                  color: '#2496ED'
                },
                { 
                  name: 'Agile',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
                  color: '#0052CC'
                },
                { 
                  name: 'REST APIs',
                  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
                  color: '#009688'
                }
              ].map((skill) => (
                <div key={skill.name} className="skill-card-new">
                  <div className="skill-icon" style={{ backgroundColor: `${skill.color}15` }}>
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
