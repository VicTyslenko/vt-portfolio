import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Main, Header } from "./components";
import NewServices from "./pages/Services/ServicesPage";

import { AboutPage, ContactPage, ProjectsPage } from "./pages";
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

  useEffect(() => {
    fetch("http://localhost:4444/projects")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<NewServices />} />
      </Routes>
    </div>
  );
};

export default App;
