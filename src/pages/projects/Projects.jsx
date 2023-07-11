import { ProjectCard } from "../../components/index";

import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <div className="container">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </div>
  );
};

export default Projects;
