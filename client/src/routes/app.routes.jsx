import { Routes, Route } from "react-router-dom";
import { Main } from "../components";
import { RouteEnum } from "shared/models/routes.models";
import { LazyRoutes } from "./lazy.routes";
import { Suspense } from "react";

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={RouteEnum.START} element={<Main />} />
          <Route path={RouteEnum.ABOUT} element={<LazyRoutes.AboutPage />} />
          <Route path={RouteEnum.PROJECTS} element={<LazyRoutes.ProjectsPage />} />
          <Route path={RouteEnum.CONTACTS} element={<LazyRoutes.ContactPage />} />
          <Route path={RouteEnum.SERVICES} element={<LazyRoutes.ServicesPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
