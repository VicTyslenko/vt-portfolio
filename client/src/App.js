import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Main, Header } from "./components";

import { AboutPage, ContactPage, ProjectsPage, ServicesPage } from "./pages";
import {
  setHomeLocation,
  setHeaderVisible,
} from "./reducers/pageLocation.reducer";
import { scrollToTop } from "./helpers";

import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/home") {
      dispatch(setHeaderVisible(true));
      dispatch(setHomeLocation(true));
    } else {
      dispatch(setHeaderVisible(false));
      dispatch(setHomeLocation(false));

      scrollToTop(0, "instant");
    }
  }, [location, dispatch]);

  return (
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
  );
};

export default App;
