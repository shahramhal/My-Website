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
        <h1 className="glitch" data-text="Hello, I'm Shahram">
          Hello, I'm Shahram
        </h1>
        <div className="typed-text">
          <h2>
            I'm a
            <span className="highlight"> Computer Science</span> student
          </h2>
        </div>
        <p className="hero-description">
          Passionate about technology, sports, and music
        </p>
        <div className="cta-container">
          <a href="#projects" className="cta-button">
            View My Work
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-scroll"></div>
      </div>
    </section>
  );
};

export default Hero;
