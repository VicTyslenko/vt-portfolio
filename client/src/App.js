import { useState, useEffect } from "react";
import { Main, Header } from "./components";
import { AboutPage, ContactPage, ProjectsPage, ServicesPage } from "./pages";
import { HeaderVisibilityContext } from "./context/headerVisibilityContext";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  //removing title element from other pages except '/' or '/home'
  const [headerVisible, setHeaderVisible] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setHeaderVisible(
      location.pathname === "/" || location.pathname === "/home"
    );
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
