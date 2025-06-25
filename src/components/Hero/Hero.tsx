import { useEffect } from "react";
import { Container } from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";

import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import Hello from '../../assets/Hello.gif';
import telegram from '../../assets/telegram.svg';

export function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container id="home">
      <div className="hero-text">
        <p data-aos="fade-up">
          Hello <img src={Hello} alt="Hello" width="20px" />, I'm
        </p>
        <h1 data-aos="fade-up" data-aos-delay="200">Manan Joshi</h1>
        <h3 data-aos="fade-up" data-aos-delay="400">
          DSA & Web Dev Enthusiast
        </h3>
        <h3 data-aos="fade-up" data-aos-delay="400">
          Math-Driven Logical Thinker
        </h3>
        <p className="small-resume" data-aos="fade-up" data-aos-delay="600">
          Pre-Final Year | Actively Upskilling
        </p>
        <div data-aos="fade-up" data-aos-delay="800">
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
        </div>
        <div className="social-media" data-aos="fade-up" data-aos-delay="1000">
          <a
            href="https://www.linkedin.com/in/mananj27/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/Manan-Joshi750"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=916283453432&text=Hello+Manan%2C+I+found+your+contact+through+your+portfolio+site."
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="Whatsapp" />
          </a>
          <a
            href="https://t.me/Manan_Joshi_027"
            target="_blank"
            rel="noreferrer"
          >
            <img src={telegram} alt="telegram" />
          </a>
        </div>
      </div>

      <div className="hero-image" data-aos="fade-left" data-aos-delay="1000">
        <img src={Illustration} alt="Ilustração" />
      </div>
    </Container>
  );
}