import { Main, Header } from "./components";
import { AboutPage, ContactPage, ProjectsPage, ServicesPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import "./styles/app.scss";

const App = () => {
  return (
    <div className="appContainer">
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
