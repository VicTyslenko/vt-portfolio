import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { scrollToTop } from "../../helpers";
import "../../styles/global.scss";
import "./header.scss";
import { isVisible } from "@testing-library/user-event/dist/utils";

const Header: React.FC = () => {
  const navigation = useNavigate();

  const headerVisible = useSelector(
    (state: RootState) => state.page.isHeaderVisible
  );
  const page = useSelector((state: RootState) => state.page.isHomeLocation);

  //scroll to top on click for Home page only
  const handleScrollToTopClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    if (!page) {
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

  const getHeaderClass = () => {
    let headerClass = isScrolled ? "scrolled" : "scrolled-back";
    if (!headerVisible) {
      headerClass += " background-hidden";
    }
    return headerClass;
  };
  return (
    <div className="global-container">
      <div className={`header-wrapper ${getHeaderClass()}`}>
        <h1 className={`title ${!headerVisible ? "title-hidden" : ""}`}>
          Tyslenko.V
        </h1>
        <nav className="nav-bar">
          <Link
            className="nav-bar-link"
            onClick={handleScrollToTopClick}
            to="/"
          >
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

          <Link className="nav-bar-link" to="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
