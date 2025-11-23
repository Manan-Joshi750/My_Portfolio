import { useEffect } from "react";
import { Container } from "./styles";
import MananJoshi from "../../assets/MJ.png";
import python from "../../assets/python.svg";
import cIcon from "../../assets/C-icon.png";
import cppIcon from "../../assets/CPP-icon.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import mongoIcon from "../../assets/mongodb-icon.png";
import typescriptIcon from "../../assets/typescript-icon.svg";
import viteIcon from "../../assets/vitejs-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import bootstrap5Icon from "../../assets/bootstrap-5-logo-icon.png";
import codingImage from "../../assets/coding.png";
import tailwindIcon from "../../assets/tailwind-icon.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* About Me Section */}
      <Container id="about">
        {/* Text from left → fade-right */}
        <div className="about-text">
          <h2 data-aos="fade-right">About me</h2>
          <p data-aos="fade-right" data-aos-delay="100">
            Hi there! I'm Manan, an inquisitive problem-solver passionate about Data Structures, Web Development, and Mathematics.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            I craft responsive web applications using the MERN stack, solve algorithmic challenges, and apply mathematical thinking to real-world problems.
          </p>

          <div className="education" data-aos="fade-right" data-aos-delay="300">
            <h3>Education:</h3>
            <h4>B.Tech in Information Technology (IT)</h4>
            <p>NIT Jalandhar | 2023 - 2027</p>
            <p>8.30 CGPA</p>
          </div>

          <div className="experience" data-aos="fade-right" data-aos-delay="400">
            <h3>Experience:</h3>
            <div style={{ marginBottom: "1.5rem" }}>
              <h4>Data Analyst Intern (Python & SAS)</h4>
              <p>Edulyt India | June 2025 - July 2025</p>
              <p>Remote</p>
            </div>
            <div>
              <h4>C++ Programming Intern</h4>
              <p>CodeAlpha | May 2025</p>
              <p>Remote</p>
            </div>
          </div>

          <h3 data-aos="fade-right" data-aos-delay="500">Here are my main skills:</h3>
          <div className="hard-skills">
            {[
              python,
              cIcon,
              jsIcon,
              reactIcon,
              typescriptIcon,
              viteIcon,
              cppIcon,
              mongoIcon,
              nodeIcon,
              htmlIcon,
              cssIcon,
              boostrapIcon,
              tailwindIcon,
              bootstrap5Icon,
            ].map((icon, i) => (
              <div
                className="hability"
                key={i}
                data-aos="fade-up"
                data-aos-delay={100 + i * 50}
              >
                <img src={icon} alt="Skill icon" />
              </div>
            ))}
          </div>
        </div>

        {/* Image from right → fade-left */}
        <div className="about-image" data-aos="fade-left" data-aos-delay="600">
          <img src={MananJoshi} alt="Manan Joshi" />
        </div>
      </Container>

      {/* Coding Profiles Section */}
      <Container id="coding-profiles">
        {/* Image from left → fade-right */}
        <div className="about-image" data-aos="fade-right">
          <img src={codingImage} alt="Coding Profiles Information" />
        </div>

        {/* Text from right → fade-left */}
        <div className="about-text" data-aos="fade-left">
          <h2>Coding Profiles</h2>
          <p>
            I’m actively sharpening my problem-solving skills:<br />
            <strong>• 1400+ problems on LeetCode</strong><br />
            <strong>• 750+ on CodeChef</strong><br />
            <strong>• 800+ on GeeksforGeeks</strong><br />
            <strong>• 50+ on Codeforces</strong><br />
            <br />
            • I hold the <strong style={{ color: "var(--green)" }}>Knight</strong> badge on <strong>LeetCode</strong> (<strong>2050+</strong>)<br />
            • <strong style={{ color: "#00ffd0ff" }}>Specialist</strong> rank on <strong>Codeforces</strong> (<strong>1600+</strong>)<br />
            • <strong style={{ color: "#570dd8e9" }}>4⭐ coder</strong> on <strong>CodeChef</strong> (<strong>1800+</strong>)
          </p>
        </div>
      </Container>
    </>
  );
}
