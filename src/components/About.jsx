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
            {[
              { name: 'Python', level: 85 },
              { name: 'Java', level: 75 },
              { name: 'SQL', level: 75 },
              { name: 'Django', level: 70 },
              { name: 'Node.js', level: 65 }
            ].map((skill) => (
              <div key={skill.name} className="skill-bar-container">
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
