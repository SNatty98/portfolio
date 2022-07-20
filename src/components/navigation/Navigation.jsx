import "./navigation.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
import { useState } from "react";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : "notActive"}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : "notActive"}
      >
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : "notActive"}>
        <BiBook />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : "notActive"}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : "notActive"}>
        <BiMessageRounded />
      </a>
    </nav>
  );
};

export default Navigation;
