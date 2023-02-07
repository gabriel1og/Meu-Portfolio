import React from "react";
import "./portfolio.css";
import p1 from "../../assets/CRUD.png";
import p2 from "../../assets/FinancesManagement.png";
import p3 from "../../assets/JogoMemoria Projeto.png";
import p4 from "../../assets/IMC Projeto.png";
import { FaNodeJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTypescript, SiStyledcomponents, SiPostgresql } from "react-icons/si";
import { CgWebsite } from 'react-icons/cg'

const data = [
  {
    id: 1,
    image: p1,
    title: "CRUD",
    github: "https://github.com/gabriel1og/CRUD-System",
    demo: "https://crud-system-henna.vercel.app/",
    languages: [<FaReact size={30} />, <FaNodeJs size={30} />, <SiPostgresql size={30} />],
  },
  {
    id: 2,
    image: p2,
    title: "Finances Management",
    github: "https://github.com/gabriel1og/Finances-Management",
    demo: "https://finances-management-beta.vercel.app/",
    languages: [
      <FaReact size={30} />,
      <SiTypescript size={30} />,
      <SiStyledcomponents size={36} />,
    ],
  },
  {
    id: 3,
    image: p3,
    title: "Memory Game",
    github: "https://github.com/gabriel1og/Memory-Game-Project",
    demo: "https://memory-game-project-mu.vercel.app/",
    languages: [
      <FaReact size={30} />,
      <SiTypescript size={30} />,
      <SiStyledcomponents size={36} />,
    ],
  },
  {
    id: 4,
    image: p4,
    title: "BMI calculation",
    github: "https://github.com/gabriel1og/Projeto-Calculo-IMC",
    demo: "https://projeto-calculo-imc.vercel.app/",
    languages: [<FaReact size={30} />, <SiTypescript size={30} />],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container projects">
        {data.map(({ id, image, title, github, demo, languages }) => {
          return (
            <div class="card" key={id}>
              <div class="img-section">
                <img src={image} alt="" />
              </div>
              <div class="card-content">

                <div className="title">
                  <h3>{title}</h3>
                </div>

                <div className="languages">{languages}</div>

                <div className="buttons">
                  <a
                    href={github}
                    className="btn github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                    <FaGithub />
                  </a>
                  <a
                    href={demo}
                    className="btn demo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                    <CgWebsite />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Portfolio;
