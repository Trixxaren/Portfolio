const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hej, jag är Robin</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">FrontEnd</span> <br />
            Developer
          </h1>
          <p className="hero--section--description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <button className="btn- btn-primary">Kontakta mig</button>
      </div>
      <div className="hero--section--image">
        <img src="./profilbild.png" alt="Hero Section" />
      </div>
    </section>
  );
};

export default HeroSection;
