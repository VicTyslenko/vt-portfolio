import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { HeaderVisibilityContext } from "../../context/headerVisibilityContext";
import "../../styles/global.scss";
import "./header.scss";

const Header: React.FC = () => {
  const { isVisible } = useContext(HeaderVisibilityContext);

  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="global-container">
      <div className={`header-wrapper ${isScrolled ? "scrolled" : ""}`}>
        <Link className="title-link" to="./home">
          <h1 className={`title ${!isVisible ? "title-hidden" : ""}`}>Tyslenko.V</h1>
        </Link>
        <nav className="nav-bar">
          <Link className="nav-bar-link" onClick={scrollToTop} to="./home">
            Home
          </Link>
          <Link className="nav-bar-link" to="./about">
            About
          </Link>
          <Link className="nav-bar-link" to="./projects">
            Projects
          </Link>
          <Link className="nav-bar-link" to="./services">
            Services
          </Link>

          <Link className="nav-bar-link" to="./contact">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
