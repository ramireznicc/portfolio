import { ProjectCard } from "../../components/index";

import projects from "../../data/projects.json";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="container projects">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </div>
  );
};

export default Projects;
