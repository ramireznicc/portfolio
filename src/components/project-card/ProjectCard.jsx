import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { IconButton } from "../index";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div style={{ backgroundColor: project.color }} className="project-card">
      <div>
        <span className="project-title">{project.name}</span>
        <div className="project-tools-container">
          {project.tools.map((tool) => (
            <span className="project-tool">· {tool}</span>
          ))}
        </div>
      </div>
      {project.inDevelopment ? (
        <div className="development">
          <FontAwesomeIcon icon={faScrewdriverWrench} fontSize="1.1rem" />
          <span>Site in development</span>
        </div>
      ) : null}
      <div className="project-buttons">
        {project.github ? (
          <IconButton
            icon={<FontAwesomeIcon icon={faGithub} />}
            link={project.github}
            size={"1.4rem"}
          />
        ) : null}
        {project.live ? (
          <IconButton
            icon={<FontAwesomeIcon icon={faUpRightFromSquare} />}
            link={project.live}
            size={"1.4rem"}
          />
        ) : null}
        {project.playstore ? (
          <IconButton
            icon={<FontAwesomeIcon icon={faGooglePlay} />}
            link={project.playstore}
            size={"1.4rem"}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
