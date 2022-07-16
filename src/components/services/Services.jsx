import "./services.css";
import { BsCheck2 } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="services__container">
        <article className="service">
          <div className="first__list">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Wireframing</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>User flows</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Prototyping</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Responsive design</p>
              </li>
            </ul>
          </div>
        </article>
        <div className="second__list">
          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Strong problem solving skills</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Creative ability</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Teachable</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Professional communication</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Attention to detail</p>
              </li>
            </ul>
          </article>
        </div>
        <div className="third__list">
          <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Portfolio's</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>E-Commerce</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Personal</p>
              </li>
              <li>
                <BsCheck2 className="service__list-icon" />
                <p>Project</p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
