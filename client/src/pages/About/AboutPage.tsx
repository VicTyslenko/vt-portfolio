import Button from "../../components/Button/Button";
import "./aboutPage.scss";
const AboutPage = () => {
  const someFn = () => {};
  return (
    <div className="about-page-container">
      <div className="image-wrapp">
        <img src="/img/portfolio-image.JPG" alt="portfolio" />
      </div>
      <div className="about-info">
        <h1 className="title">About me</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sunt
          doloribus nobis, veniam suscipit esse odio. Porro cum ex enim
          aspernatur! Tenetur ex voluptatum nesciunt libero obcaecati soluta
          consequuntur ullam labore, eum, sed officia nihil rem qui explicabo
          exercitationem atque.
        </p>
        <Button type="button" onClick={someFn} className="about-btn">
          Read more
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
