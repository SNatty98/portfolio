import "./portfolio.css";
import FYPImg from "../../assets/FYPImg.png";
import CalcImg from "../../assets/CalcImg.png";
import BlogImg from "../../assets/BlogImg.png";

const portfolioData = [
  {
    id: 1,
    image: FYPImg,
    title: "My Final Year Project",
    github: "https://github.com/SNatty98/finalproject",
  },
  {
    id: 2,
    image: CalcImg,
    title: "Calculator",
    github: "https://github.com/SNatty98/Calculator",
  },
  {
    id: 3,
    image: BlogImg,
    title: "Blog",
    github: "https://github.com/SNatty98/react-blog",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container">
        <div className="portfolio__container">
          {portfolioData.map(({ id, image, title, github }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img className="portfolio__image" src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    GitHub
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
