import { useEffect } from "react";
import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {[
          {
            title: "Talk-a-tive : Real-Time Chat Application",
            desc: "Built a full-stack real-time chat app using the MERN stack and Socket.io, supporting both one-on-one and group messaging. Integrated features like JWT authentication, live typing indicators, notification system, group creation with admin controls, and responsive design to ensure smooth user engagement across devices.",
            github: "https://github.com/Manan-Joshi750/Talk-a-tive__A_Chatting_Application",
            tech: ["HTML5", "TailWind CSS", "JavaScript", "MERN"],
          },
          {
            title: "Get Me A Chai : Creator Support Platform",
            desc: "Developed a Patreon-style platform using MERN stack and Next.js, enabling users to subscribe to creators for exclusive content. Implemented secure login, tier-based subscriptions, creator dashboards, payment integration, and responsive UI to deliver a seamless supporter–creator experience.",
            github: "https://github.com/Manan-Joshi750/Get_Me_A_Chai",
            tech: ["JavaScript", "MERN", "HTML5", "TailWind CSS"],
          },
          {
            title: "Food Delivery Website : React-Powered Ordering UI",
            desc: "Created a responsive food delivery web app using React.js and Vite. Users can explore food items, manage cart, and place orders with a seamless checkout flow. Includes secure authentication, intuitive UI, and a scalable front-end architecture optimized for both desktop and mobile.",
            github: "https://github.com/Manan-Joshi750/Food_Delivery",
            tech: ["React.js", "Vite.js", "HTML5", "CSS3 & TailWind CSS"],
          },
          {
            title: "MindEase : Your Mental Health Companion",
            desc: "Developed a full-stack mental wellness platform using MERN. Features include an interactive chatbot, mental health questionnaires, and curated resources to support well-being. Focused on user privacy, empathetic design, and accessibility to provide a secure and supportive experience.",
            github: "https://github.com/Manan-Joshi750/MindEase",
            tech: ["MERN", "HTML, HTML5", "CSS, CSS3", "JavaScript"],
          },
          {
            title: "Career Connect : MERN-Based Job Portal",
            desc: "Built a job portal using the MERN stack enabling job seekers to browse and apply for jobs, while employers can post listings and manage applicants. Integrated JWT authentication, dynamic job listings, application tracking, role-specific dashboards, and Cloudinary image uploads—all wrapped in a responsive design.",
            github: "https://github.com/Manan-Joshi750/Job_Portal_Application",
            tech: ["JWT Authentication", "JavaScript", "MERN", "HTML5 & CSS3"],
          },
          {
            title: "LinkTree Clone : Personal Link Hub with Next.js",
            desc: "Built a personalized link management platform using the MERN stack and Next.js. Users can securely authenticate, customize their profiles, add social media links, and track link clicks with built-in analytics. Fully responsive design ensures seamless access across devices.",
            github: "https://github.com/Manan-Joshi750/BitTree-LinkHub",
            tech: ["Next.js", "MERN", "TailWind CSS", "HTML5 & CSS3"],
          },
        ].map((project, index) => (
          <div
              className="project"
              key={index}
              data-aos="zoom-in-up"
              data-aos-duration="900"
              data-aos-easing="ease-out-back"
              data-aos-delay={index * 180}
            >
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
            <footer>
              <ul className="tech-list">
                {project.tech.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </footer>
          </div>
        ))}
      </div>
    </Container>
  );
}
