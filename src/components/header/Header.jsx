import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sean Natty</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div >
          <img className="me" src={ME} alt="" />
        </div>

        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
      </div>
    </header>
  );
};

export default Header;
