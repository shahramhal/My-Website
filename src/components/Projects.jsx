import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, githubLink, image ,skills}) => {
  const handleCardClick = () => {
    
    if (githubLink) {
      window.open(githubLink, '_blank');
    }
  };

  return (
    <div className="project-card" onClick={handleCardClick} style={{ cursor: githubLink ? 'pointer' : 'default' }}>
      <div className="project-content">
        <h3>{title}</h3>
        {image && (
          <img src={image} alt={title} className="project-image" style={{ width: '100%', borderRadius: '8px', margin: '10px 0' }} />
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
};

const Projects = () => {
  const projects = [
    {
      title: "Personal Finance Tracker",
      description: "Python program to track personal incomes and expenses.",
      githubLink: "https://github.com/shahramhal/Personal-Finance-Tracker.git",
      image: "/images/finance.png",
      skills: "Python, Tkinter, matplotlib"
    },
    {
      title: "Mystery World Game",
      description: "Mystery World Game.Developed in C++ using OOP concepts.",
      githubLink: "https://github.com/your-repo/project2",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      skills: "C++ ,OOP"
    },
    {
      title: "HealthCheck App",
      description: "Python-Django based project developed to check mental health of a SKY employees with roles and permissions.",
      githubLink: "https://github.com/shahramhal/SkyScore",
      image: "/images/SKY.png",
      skills: "Python, Django, SQL, HTML, CSS, JavaScript"
    },
    {
      title:"Weather App",
      description:"Weather App using Java and OpenWeatherMap API.",
      githubLink:"https://github.com/shahramhal/Weather-Application",
      image:"/images/weather.png",
      skills: "Java, OpenWeatherMap API"
    },
    {title:"Dice Game",
      description:"A Kotlin-based Android dice game application built with Jetpack Compose, implementing a competitive game between a human player and computer AI.",
      githubLink:"https://github.com/shahramhal/DiceGame",
      image:"/images/dice.png",
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
            skills={project.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
