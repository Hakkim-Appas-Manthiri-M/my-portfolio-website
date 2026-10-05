

import {
  ArrowUpRight,
  Code2,
  FolderKanban,
  Network,
} from "lucide-react";

import {
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

import { FaCss3Alt, FaJava } from "react-icons/fa";

import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "NovaVault",
    category: "GAME MARKETPLACE",
    description:
      "A gaming marketplace concept where users can explore games, view details and experience a modern purchasing interface.",
    longDescription:
      "NovaVault is a full-stack gaming marketplace built with React, Node.js and MongoDB. It features a dynamic game catalog, detailed product pages, a modern purchase flow, and a fully responsive design. The platform focuses on delivering a premium, immersive browsing experience for game enthusiasts with smooth animations and a dark-mode-first aesthetic.",
    technologies: [
      { name: "React.js", icon: SiReact },
      { name: "Java", icon: FaJava },
      { name: "MongoDB", icon: SiMongodb },
    ],
    featured: true,
    accent: "red",
    image: "/projects/novavault.png",
    liveUrl: "https://novavault-store.vercel.app/",
    githubUrl: "https://github.com/Hakkim-Appas-Manthiri-M/NovaVault",
  },

  {
    id: 2,
    title: "CraftFarm AI",
    category: "AI / AGRITECH",
    description:
      "An AI-assisted farming platform that helps farmers make crop decisions using weather, soil, market and recommendation data.",
    longDescription:
      "CraftFarm AI is an intelligent agritech platform designed to empower farmers with AI-driven crop recommendations. It aggregates real-time weather data, soil health metrics, and market prices to generate personalized farming insights. Built with a MERN stack, the platform features a clean dashboard interface, data visualizations, and contextual AI suggestions powered by external APIs.",
    technologies: [
      { name: "React.js", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
    ],
    featured: false,
    accent: "orange",
    image: "/projects/craftfarm-ai.png",
    liveUrl: "https://craftfarm-ai.vercel.app/",
    githubUrl: "https://github.com/Hakkim-Appas-Manthiri-M/craftfarm-ai",
  },

  {
    id: 3,
    title: "WeatherX",
    category: "LIVE WEATHER CAST",
    description:
      "A responsive weather application that presents weather information through a clean and simple interface.",
    longDescription:
      "WeatherX is a sleek weather application that delivers real-time weather conditions for any city in the world. Built with vanilla JavaScript and a public weather API, it features current temperature, humidity, wind speed, and a 5-day forecast. The UI is minimal and responsive, designed to deliver fast, accurate weather information without unnecessary complexity.",
    technologies: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "API", icon: Network },
      { name: "CSS", icon: FaCss3Alt },
    ],
    featured: false,
    accent: "red",
    image: "/projects/weatherx.jpg",
    liveUrl: "https://weather-x-beta-six.vercel.app/",
    githubUrl: "https://github.com/Hakkim-Appas-Manthiri-M/WeatherX",
  },

  {
    id: 4,
    title: "Taskora",
    category: "PRODUCTIVITY WORKSPACE",
    description:
      "A practical task management application designed to organize, add and manage everyday tasks.",
    longDescription:
      "Taskora is a clean, minimal task management app built with React.js. It allows users to create, update, prioritize and delete tasks in a structured workspace. Taskora features local state persistence, animated task transitions, priority filtering, and a distraction-free UI — making it the perfect companion for daily productivity.",
    technologies: [
      { name: "React.js", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "CSS", icon: FaCss3Alt },
    ],
    featured: false,
    accent: "orange",
    image: "/projects/taskora.webp",
    liveUrl: "https://taskora-tau-bay.vercel.app/",
    githubUrl: "https://github.com/Hakkim-Appas-Manthiri-M/taskora",
  },

];

/* ── Main Projects Section ─────────────────────────── */

function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="projects" id="projects">
      <div className="projects-glow projects-glow-one"></div>
      <div className="projects-glow projects-glow-two"></div>

      <div className="projects-grid"></div>

      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-kicker">
            <span></span>
            MY WORK
            <span></span>
          </div>

          <h2 className="projects-title">
            PROJECT <span>ARCHIVE</span>
          </h2>

          <p className="projects-description">
            A collection of applications, experiments and digital experiences
            I've built while developing my skills. Click any project to explore
            it in depth.
          </p>
        </div>

        {featuredProject && (
          <article className="featured-project">
            <div className="featured-visual">
              <img
                src={featuredProject.image}
                alt={`${featuredProject.title} project preview`}
                className="featured-project-image"
              />

              <div className="featured-project-overlay"></div>

              <div className="featured-label">FEATURED</div>
            </div>

            <div className="featured-content">
              <div className="project-category">{featuredProject.category}</div>

              <h3>{featuredProject.title}</h3>

              <p>{featuredProject.description}</p>

              <div className="project-technologies">
                {featuredProject.technologies.map((technology) => {
                  const TechnologyIcon = technology.icon;

                  return (
                    <span key={technology.name}>
                      {TechnologyIcon && <TechnologyIcon size={14} />}

                      {technology.name}
                    </span>
                  );
                })}
              </div>

              <div className="project-actions">
                <a
                  href={featuredProject.liveUrl}
                  className="project-primary-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Project</span>
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href={featuredProject.githubUrl}
                  className="project-secondary-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 size={17} />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </article>
        )}

        <div className="projects-grid-list">
          {otherProjects.map((project) => (
            <article
              className={`project-card ${project.accent}`}
              key={project.id}
            >
              <div className="project-card-visual">
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="project-card-image"
                  />
                )}

                <div className="project-card-overlay"></div>

                <div className="project-card-corner"></div>

                <span className="project-status">PROJECT</span>
              </div>

              <div className="project-card-content">
                <span className="project-card-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-card-footer">
                  <div className="project-mini-tech">
                    {project.technologies.slice(0, 3).map((technology) => {
                      const TechnologyIcon = technology.icon;

                      return (
                        <span key={technology.name}>
                          {TechnologyIcon && <TechnologyIcon size={13} />}

                          {technology.name}
                        </span>
                      );
                    })}
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-arrow"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-bottom">
          <div className="projects-bottom-icon">
            <FolderKanban size={25} />
          </div>

          <div>
            <h3>More projects are loading...</h3>

            <p>
              I'm continuously building, learning and experimenting with new
              technologies.
            </p>
          </div>

          <a href="#contact" className="projects-bottom-button">
            Let's Build
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
