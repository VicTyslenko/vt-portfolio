import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { scrollToTop } from "../../helpers";
import "./header.scss";
import "styles/global.scss";

export const Header: React.FC = () => {
  const navigation = useNavigate();

  const location = useLocation();
  //scroll to top on click for Home page only
  const handleScrollToTopClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (location.pathname !== "/") {
      navigation("/");
    } else {
      scrollToTop(0, "smooth");
    }
  };

  //adding background to Header when scrolling

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //adding dynamic styles to header-wrapp
  const getHeaderClass = () => {
    let headerClass = isScrolled ? "scrolled" : "scrolled-back";

    return headerClass;
  };

  return (
    <div className="global-container">
      <div className={`header-wrapper ${getHeaderClass()}`}>
        <nav className="nav-bar">
          <Link className="nav-bar-link" onClick={handleScrollToTopClick} to="/">
            Home
          </Link>

          <Link className="nav-bar-link" to="/about">
            About
          </Link>
          <Link className="nav-bar-link" to="/projects">
            Projects
          </Link>
          <Link className="nav-bar-link" to="/services">
            Services
          </Link>

          <Link className="nav-bar-link" to="/contacts">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};
