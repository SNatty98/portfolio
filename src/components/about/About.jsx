import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GoProject } from "react-icons/go";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className="aboutImg" src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Aston Graduate</h5>
              <small>Computer Science with Business</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Final Year Project</h5>
              <small>React-Based Web Application</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            vel accusamus, tenetur modi totam distinctio iure dicta sed animi
            amet. Consequuntur similique praesentium pariatur rerum ratione
            voluptate deleniti non corporis!
          </p>
          <a href="#contact" className="btn btn__primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
