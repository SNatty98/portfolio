import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sean-natty-37119a195/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/SNatty98" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
