import { ContactSection } from "..";
import "./footerSection.scss";

const FooterSection = () => {
  return (
    <section className="footer-container">
      <ContactSection />
      <div className="footer-wrapp">
        <h1 className="title">VTyslenko</h1>
        <div className="icons-block">Icons</div>
      </div>
    </section>
  );
};

export default FooterSection;
