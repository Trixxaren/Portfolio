const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./profilbild.png" alt="About Me"></img>
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Robin Vikström</p>
          <h1 className="skills--section--heading">Om mig</h1>
          <p className="hero--section-description">
            Jag utbildar mig just nu till front-end utvecklare på Jensens YH.
            Datorer och spel har alltid varit ett stort intresse för mig, och
            jag ser fram emot att nu arbeta i en yrkesroll där jag kan kombinera
            passion och teknisk kompetens. Jag är övertygad om att mitt driv,
            engagemang och min problemlösningsförmåga kommer att vara till stor
            nytta i min framtida karriär. Jag har kompetens inom HTML, CSS,
            JavaScript, React, Miro och Figma, och utvecklar kontinuerligt mina
            kunskaper inom moderna verktyg och tekniker.
          </p>
          <p className="hero--section-description">
            Tidigare arbetade jag som storkundsansvarig på Viaplay Group Radio,
            där jag samarbetade med några av Sveriges största företag för att
            identifiera deras utmaningar och använda radioannonsering för att
            stärka deras varumärkeskännedom och ROI. Jag var involverad i både
            radioreklam, sponsorskap och event med våra stationer RIX FM, STAR
            FM, Bandit Rock och Lugna Favoriter. Under min tid där lyckades vi
            uppnå konkreta resultat, som ökade varumärkeskännedom och
            kundlojalitet för våra största kunder.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
