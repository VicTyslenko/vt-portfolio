import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Main, Header } from "./components";
import NewServices from "./pages/Services/ServicesPage";
import { sendRequest } from "./helpers";
import { dataFetch } from "./reducers/projectsReducer";
import { API_URL } from "./config/API";
import { AboutPage, ContactPage, ProjectsPage } from "./pages";
import {
  setHomeLocation,
  setHeaderVisible,
  setProjectsPage,
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
      dispatch(setProjectsPage(false));
    } else if (location.pathname === "/projects") {
      dispatch(setProjectsPage(true));
      dispatch(setHeaderVisible(false));
      dispatch(setHomeLocation(false));
    } else {
      dispatch(setHeaderVisible(false));
      dispatch(setHomeLocation(false));
    }
    scrollToTop(0, "instant");
  }, [location, dispatch]);

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
