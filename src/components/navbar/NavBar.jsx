import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faHouseChimney,
  faUser,
  faLaptopCode,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "../index";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("navbar-menu menu-open-animation");

  const handleMenuOpen = () => {
    setMenuClass("navbar-menu menu-open-animation");
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuClass("navbar-menu menu-close-animation");
    setTimeout(() => setIsMenuOpen(false), 250);
  };

  const menuPages = [
    {
      name: "Home",
      link: "/",
      icon: <FontAwesomeIcon icon={faHouseChimney} />,
    },
    {
      name: "About me",
      link: "/about",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
    },
    {
      name: "Resume",
      link: "/resume",
      icon: <FontAwesomeIcon icon={faFileLines} />,
    },
  ];

  return (
    <div className="navbar">
      <div className="navbar-pages">
        {menuPages.map((page) => (
          <Link key={page.name} to={page.link} onClick={handleMenuClose}>
            <div className="page">
              {page.icon}
              {page.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="navbar-menu-icon">
        <IconButton
          size={"1.6rem"}
          onClick={handleMenuOpen}
          icon={<FontAwesomeIcon icon={faBars} />}
        />
      </div>
      {isMenuOpen ? (
        <div className={menuClass}>
          <IconButton
            size={"1rem"}
            onClick={handleMenuClose}
            icon={<FontAwesomeIcon icon={faClose} />}
          />
          <div className="menu-pages">
            {menuPages.map((page) => (
              <Link key={page.name} to={page.link} onClick={handleMenuClose}>
                <div className="page">
                  {page.icon}
                  {page.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
