import ContactSection from "../ContactSection/ContactSection";
import "../../../../styles/global.scss";
import "./footerSection.scss";

const FooterSection = () => {
  return (
    <section className="footer-container">
      <div className="global-container">
        <ContactSection />
        <div className="footer-wrapp">
          <h1 className="title">VTyslenko</h1>
          <div className="icons-block">Icons</div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
