import React, { useEffect, useState } from "react";
import portfolioData from "../../data/index.json"; // Importera JSON-filen från rätt plats

const MyPortfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Här kan vi sätta data till state från den importerade JSON-filen
    setProjects(portfolioData.portfolio);
  }, []);

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container--box">
        <div className="portfolio--container">
          <h1 className="section--heading">Mina projekt</h1>
        </div>
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
              <img src={`./${project.src}`} alt={project.title} />
            </div>
            <div className="portfolio--section--card--content">
              <h3 className="portfolio--section--title">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MyPortfolio;
