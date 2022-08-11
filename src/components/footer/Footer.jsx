import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social__icons">
        <a href="https://www.facebook.com/sean.natty" target="_blank">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com/sean.natty98/?hl=en" target="_blank">
          <AiOutlineInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/sean-natty-37119a195/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
