import data from "../../data/index.json";

const MySkills = () => {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My skills</p>
        <h2 className="skills--section--heading">My expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
