import { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, githubLink, image, skills, icon, featured }) => {
  const [imageFailed, setImageFailed] = useState(false);

  const handleCardClick = () => {
    if (githubLink) {
      window.open(githubLink, '_blank');
    }
  };

  return (
    <div className="project-card" onClick={handleCardClick} style={{ cursor: githubLink ? 'pointer' : 'default' }}>
      <div className="project-content">
        <div className="project-card-top">
          <h3>{title}</h3>
          {featured && <span className="project-badge">Featured</span>}
        </div>
        {image && !imageFailed ? (
          <img
            src={image}
            alt={title}
            className="project-image"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="project-banner" aria-hidden="true">
            <span className="project-banner-icon">{icon}</span>
          </div>
        )}
        <p>{description}</p>
        <div className="skill-tags">
          {skills.split(',').map((skill, index) => (
            <span key={index} className="skill-tag">{skill.trim()}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  image: PropTypes.string,
  skills: PropTypes.string,
  icon: PropTypes.string,
  featured: PropTypes.bool,
};

const Projects = () => {
  const projects = [
    {
      title: "Build Your Career - AI Career Coach",
      description: "Full-stack AI-powered platform helping job seekers optimize their CVs, get personalized feedback, and match with relevant jobs. An LLM-based CV parser (~90% extraction accuracy) and NLP-driven ATS scoring engine compare CVs against job descriptions, backed by a salary prediction model and semantic job matching across a five-service microservices architecture.",
      githubLink: "https://github.com/shahramhal/AI-Creer-Coach",
      image: "/images/ai-career-coach.png",
      icon: "🤖",
      featured: true,
      skills: "Next.js, TypeScript, Node.js, Express, Python, FastAPI, PostgreSQL, MongoDB, Docker"
    },
    {
      title: "Restaurant & Coffee Shop POS System",
      description: "Commercial, offline-first point-of-sale system for restaurants and cafes on Windows. Supports table-service and counter-service modes, split/card/cash payments with automatic tax calculation, kitchen ticket and receipt printing, role-based staff PINs, stock tracking, and automated end-of-day PDF reports delivered via Telegram. Licensed per-location to real venues, currently at v1.3.2.",
      githubLink: "https://github.com/shahramhal/pos-releases",
      image: "/images/pos-system.png",
      icon: "🧾",
      featured: true,
      skills: "Electron, TypeScript, Node.js, SQLite"
    },
    {
      title: "SKY Employee Health Check System",
      description: "Full-stack employee wellbeing platform led for a 5-member team using Agile methodology. Built a digital health survey system with an admin dashboard so managers can monitor employee wellbeing across the organisation, including all backend logic for registration, voting, and database design.",
      githubLink: "https://github.com/shahramhal/SkyScore",
      image: "/images/SKY.png",
      skills: "Python, Django, SQLite, HTML/CSS, Bootstrap, Docker"
    },
    {
      title: "The Corner House Dinner",
      description: "Production website for a real restaurant serving 100+ daily customers. Owned the full deployment pipeline from development through to production launch.",
      githubLink: "https://fantastic-haupia-94558e.netlify.app",
      image: "/images/corner-house.png",
      skills: "React.js, Tailwind CSS"
    },
    {
      title: "Dice Game",
      description: "Kotlin-based Android dice game built with Jetpack Compose, implementing a competitive game between a human player and a computer opponent.",
      githubLink: "https://github.com/shahramhal/DiceGame",
      image: "/images/dice.png",
      skills: "Kotlin, Jetpack Compose"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            image={project.image}
            icon={project.icon}
            featured={project.featured}
            skills={project.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
