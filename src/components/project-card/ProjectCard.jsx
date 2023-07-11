import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconButton } from "../index";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div>
        <span className="project-title">{project.name}</span>
        <div className="project-tools-container">
          {project.tools.map((tool) => (
            <span className="project-tool">· {tool}</span>
          ))}
        </div>
      </div>

      <div className="project-buttons">
        <IconButton
          icon={<FontAwesomeIcon icon={faGithub} />}
          link={project.link}
          size={"1.4rem"}
        />
        {project.live ? (
          <IconButton
            icon={<FontAwesomeIcon icon={faUpRightFromSquare} />}
            link={project.live}
            size={"1.4rem"}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
