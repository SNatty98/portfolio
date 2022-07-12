import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>JSX</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Tailwind</h4>
              <small className="text-light">Beginner</small>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>NodeJS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Axios</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>JSX</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>PHP</h4>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>JUnit Testing</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>MySQL</h4>
              <small className="text-light">Basic</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
