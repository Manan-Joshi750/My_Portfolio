import { Container } from "./styles";
import MananJoshi from "../../assets/MJ.png";
import python from "../../assets/python.svg"
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
import ScrollAnimation from "react-animate-on-scroll";
import codingImage from "../../assets/coding.png";
import tailwindIcon from "../../assets/tailwind-icon.svg";

export function About() {
  return (
    <>
      <Container id="about">
        <div className="about-text">
          <ScrollAnimation animateIn="fadeInLeft">
            <h2>About me</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
            <p>
              Hi there! I'm Manan, an inquisitive problem-solver passionate about Data Structures, Web Development, and Mathematics.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <p>
              I craft responsive web applications using the MERN stack, solve algorithmic challenges, and apply mathematical thinking to real-world problems.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={400}>
            <div className="education">
              <h3>Education:</h3>
              <h4> Bachelor of Technology (B.Tech) in Information Technology (IT)</h4>
              <p>Dr. B.R. Ambedkar National Institute of Technology, Jalandhar (NIT Jalandhar) | 2023 - 2027</p>
              <p>8.41 CGPA</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={550}>
            <div className="experience">
              <h3>Experience:</h3>
              <div style={{ marginBottom: "1.5rem" }}>
                <h4>C++ Programming Intern</h4>
                <p>CodeAlpha | May 2025</p>
                <p>Remote</p>
              </div>
              <div>
                <h4>Data Analyst Intern (Python & SAS)</h4>
                <p>Edulyt India | June 2025</p>
                <p>Remote</p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
            <h3>Here are my main skills:</h3>
          </ScrollAnimation>
          <div className="hard-skills">
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
                <img src={python} alt="python" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
                <img src={cIcon} alt="C" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
                <img src={jsIcon} alt="JavaScript" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                <img src={reactIcon} alt="React" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
                <img src={typescriptIcon} alt="Typescript" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
                <img src={viteIcon} alt="Vite" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
                <img src={cppIcon} alt="CPP" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
                <img src={mongoIcon} alt="MongoDB" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
                <img src={nodeIcon} alt="Node" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
                <img src={htmlIcon} alt="HTML" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
                <img src={cssIcon} alt="CSS" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
                <img src={boostrapIcon} alt="Bootstrap" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
                <img src={tailwindIcon} alt="TailWind CSS" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
                <img src={bootstrap5Icon} alt="Bootstrap 5" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="about-image">
          <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
            <img src={MananJoshi} alt="Manan Joshi" />
          </ScrollAnimation>
        </div>
      </Container>

      {/* Coding Profiles Section */}
      <Container id="coding-profiles">
        <div className="about-image">
          <ScrollAnimation animateIn="fadeInLeft" delay={0.21 * 1000}>
            <img src={codingImage} alt="Coding Profiles Information" />
          </ScrollAnimation>
        </div>

        <div className="about-text">
          <ScrollAnimation animateIn="fadeInRight">
            <h2>Coding Profiles</h2>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInRight" delay={0.1 * 1000}>
            <p>
              I’m actively sharpening my problem-solving skills:<br />
              <strong>• 1000+ problems on LeetCode</strong><br />
              <strong>• 500+ on CodeChef</strong><br />
              <strong>• 300+ on GeeksforGeeks</strong><br />
              <strong>• 100+ on Codeforces</strong><br />
              <br />
              • I hold the <strong style={{ color: "var(--green)" }}>Knight</strong> badge on <strong>LeetCode</strong> (<strong>1933</strong>)<br />
              • <strong style={{ color: "#00FFFF" }}>Specialist</strong> rank on <strong>Codeforces</strong> (<strong>1439</strong>)<br />
              • <strong style={{ color: "#87CEEB" }}>3⭐ coder</strong> on <strong>CodeChef</strong> (<strong>1738</strong>)
            </p>
          </ScrollAnimation>
        </div>
      </Container>
    </>
  )
}
