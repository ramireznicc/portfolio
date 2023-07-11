import { IconButton } from "../index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTelegramPlane,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const contactMethods = [
    {
      icon: <FontAwesomeIcon icon={faGithub} />,
      link: "https://github.com/ramireznicc",
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedinIn} />,
      link: "https://www.linkedin.com/in/ramireznicc23/",
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      link: "mailto:ramireznicc.23@gmail.com",
    },
    {
      icon: <FontAwesomeIcon icon={faTelegramPlane} />,
      link: "https://telegram.me/ramireznicc",
    },
    {
      icon: <FontAwesomeIcon icon={faWhatsapp} />,
      link: "https://api.whatsapp.com/send?phone=34607262274",
    },
  ];

  return (
    <div className="footer">
      <div className="footer-icons">
        {contactMethods.map((method) => (
          <IconButton key={method.link} icon={method.icon} link={method.link} />
        ))}
      </div>
      <span className="footer-text">{year} All rights reserved ©</span>
    </div>
  );
};

export default Footer;
