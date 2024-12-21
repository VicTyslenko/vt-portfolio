import { lazy } from "react";

export namespace LazyRoutes {
  export const ContactPage = lazy(() => import("pages/contact/contact-page").then(({ ContactPage }) => ({ default: ContactPage })));
  export const AboutPage = lazy(() => import("pages/about/about-page").then(({ AboutPage }) => ({ default: AboutPage })));
  export const ServicesPage = lazy(() =>
    import("pages/services/services-page/services-page").then(({ ServicesPage }) => ({ default: ServicesPage }))
  );
  export const ProjectsPage = lazy(() => import("pages/projects/projects-page").then(({ ProjectsPage }) => ({ default: ProjectsPage })));
}
