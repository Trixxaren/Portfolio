const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">FrontEnd</span> <br />
            Developer
          </h1>
          <p className="hero--section--description">
            Robin Vikström
            <br /> Stockholm Sweden
          </p>
        </div>
        {/* <button className="btn btn-primary">Kontakta mig</button> */}
      </div>
      <div className="hero--section--image">
        <img src="./profilbild.png" alt="Profilbild på mig" />
      </div>
    </section>
  );
};

export default HeroSection;
