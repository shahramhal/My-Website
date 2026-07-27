import { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      <div className="hero-content" ref={titleRef}>
        <p className="hero-eyebrow">Software Engineer</p>
        <h1 className="glitch" data-text="Shahram Halimzoda">
          Shahram Halimzoda
        </h1>
        <div className="typed-text">
          <h2>
            I build <span className="highlight">backend systems</span> and AI-powered products
          </h2>
        </div>
        <p className="hero-description">
          Computer Science graduate (2026) with production experience in Django, and full-stack
          AI platforms spanning Python, TypeScript and Node.js.
        </p>
        <div className="cta-container">
          <a href="#projects" className="cta-button" onClick={handleScrollToProjects}>
            View My Work
            <span className="arrow">→</span>
          </a>
          <a
            href="/Shahram_Halimzoda_Resume.docx"
            className="cta-button secondary"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="scroll-indicator" onClick={handleScrollDown} style={{ cursor: 'pointer' }}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-scroll"></div>
      </div>
    </section>
  );
};

export default Hero;
