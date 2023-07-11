import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmerica,
  faLocationDot,
  faCalendarAlt,
  faLanguage,
  faLaptop,
  faBookOpen,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

import "./About.css";

const About = () => {
  const info = [
    {
      icon: <FontAwesomeIcon icon={faEarthAmerica} />,
      text: "From Rosario, Argentina.",
    },
    {
      icon: <FontAwesomeIcon icon={faLocationDot} />,
      text: "Currently based in Terrassa, Spain.",
    },
    {
      icon: <FontAwesomeIcon icon={faCalendarAlt} />,
      text: "28 years old.",
    },
    {
      icon: <FontAwesomeIcon icon={faLanguage} />,
      text: "Spanish & English.",
    },
    {
      icon: <FontAwesomeIcon icon={faLaptop} />,
      text: "GNU Linux and new technologies enthusiast.",
    },
    {
      icon: <FontAwesomeIcon icon={faBookOpen} />,
      text: "Passionate reader of fantasy books.",
    },
    {
      icon: <FontAwesomeIcon icon={faMusic} />,
      text: "Piano, guitar & bass player.",
    },
  ];

  return (
    <div className="container">
      <div className="about-card">
        {info.map((item) => (
          <div className="about-item" key={item.text}>
            <span className="about-item-icon">{item.icon}</span>
            <span className="about-item-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
