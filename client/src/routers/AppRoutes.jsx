import { Routes, Route } from "react-router-dom";
import { Main } from "../components";
import { ServicesPage, AboutPage, ContactPage, ProjectsPage } from "../pages";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
