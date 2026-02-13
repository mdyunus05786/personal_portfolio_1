import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'EVBuddy Homepage',
    description: 'EV charging digital infrastructure homepage that allows users to access EV chargers around them through their mobile device.',
    image: '/ev_homepage.png',
    tags: ['React', 'UI/UX', 'Mobile-First'],
    github: 'https://github.com/mdyunus05786/Ev_Buddy_HomePage',
    live: 'https://mdyunus05786.github.io/Ev_Buddy_HomePage/'
  },
  {
    title: 'Stateless Authentication Architecture',
    description: 'Secure authentication system implementing stateless architecture with JWT tokens and best security practices.',
    image: '/authentication_pic.jpg',
    tags: ['Authentication', 'Security', 'JWT'],
    github: 'https://github.com/mdyunus05786/Stateless-Authentication-Architecture',
    live: ''
  },
  {
    title: 'Hub Space',
    description: 'Time management platform to organize schedules and track productivity. Features intuitive interfaces for planning daily activities and setting priorities. Built to streamline workflow and enhance time utilization.',
    image: '/Hubspace.png',
    tags: ['React', 'Collaboration', 'Web App'],
    github: 'https://github.com/mdyunus05786/Hub_space',
    live: ''
  }
];

export function Projects() {
  return (
    <section id="projects" className="section section--cream">
      <div className="container">
        <h2 className="section-title">
          Featured Projects
        </h2>
        <div className="section-divider"></div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="project-card">
      <div className="project-media">
        <ProjectImage query={project.image} alt={project.title} />
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <Github size={20} />
            Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectImage({ query, alt }: { query: string; alt: string }) {
  // If query starts with '/', it's a direct path to an image in public folder
  if (query.startsWith('/')) {
    return (
      <img 
        src={query} 
        alt={alt} 
        className="project-image"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    );
  }
  
  // Otherwise show placeholder
  return (
    <div className="project-image-placeholder">
      <span>Project Image</span>
    </div>
  );
}