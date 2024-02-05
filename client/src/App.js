import { useState, useEffect } from "react";
import { Main, Header } from "./components";
import { AboutPage, ContactPage, ProjectsPage, ServicesPage } from "./pages";
import { scrollToTop } from "./helpers";
import { HeaderVisibilityContext } from "./context/headerVisibilityContext";
import { pageTransition } from "./animations/animations";
import { motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  //removing title element from other pages except '/'
  const [headerVisible, setHeaderVisible] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/home") {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(false);
      scrollToTop(0, "instant");
    }
    // scrollToTop(0, "smooth");
  }, [location]);

  return (
    <HeaderVisibilityContext.Provider
      value={{ isVisible: headerVisible, setIsVisible: setHeaderVisible }}
    >
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </HeaderVisibilityContext.Provider>
  );
};

export default App;
