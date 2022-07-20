import "./portfolio.css";
import FYPImg from "../../assets/FYPImg.jpg";
import CalcImg from "../../assets/CalcImg.jpg";
import EcomImg from "../../assets/EcomImg.jpg";

const Portfolio = () => {

const portfolioData = [
  {
    id: 1,
    image: FYPImg,
    title: "My Final Year Project",
    github: "https://github.com/SNatty98/finalproject",
    demo: ""
  },
  {
    id: 1,
    image: FYPImg,
    title: "My Final Year Project",
    github: "https://github.com/SNatty98/finalproject",
    demo: ""
  },

]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container">
        <div className="portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img className="portfolio__image" src={FYPImg} alt="" />
            </div>
            <h3>Portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/SNatty98/Calculator"
                className="btn"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://github.com/SNatty98/Calculator"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img className="portfolio__image" src={FYPImg} alt="" />
            </div>
            <h3>Portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/SNatty98/Calculator"
                className="btn"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://github.com/SNatty98/Calculator"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img className="portfolio__image" src={FYPImg} alt="" />
            </div>
            <h3>Portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/SNatty98/Calculator"
                className="btn"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://github.com/SNatty98/Calculator"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
