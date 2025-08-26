import React, { useEffect, useState } from "react";
import portfolioData from "../../data/index.json";

const MyPortfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolioData.portfolio);
  }, []);

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="container portfolio__inner">
        {" "}
        <div>
          <h2>Mina projekt</h2>{" "}
        </div>
        <div className="portfolio--section--container">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="portfolio--section--card"
              target="_blank"
              rel="noreferrer"
            >
              <div className="portfolio--section--img">
                <img src={`/${project.src}`} alt={project.title} />{" "}
              </div>
              <div className="portfolio--section--card--content">
                <h3 className="portfolio--section--title">{project.title}</h3>
                <p className="text-md">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
