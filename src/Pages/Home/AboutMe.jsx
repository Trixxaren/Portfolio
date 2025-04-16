const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./kostym.png" alt="About Me"></img>
      </div>

      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills--section--heading">Om mig</h1>
          <p className="text-md">
            Jag är en lösningsorienterad och nyfiken person med ett stort
            intresse för teknik, människor och problemlösning. Just nu utbildar
            jag mig till front-end utvecklare på Jensen Yrkeshögskola, där jag
            fördjupar mig i HTML, CSS, JavaScript, React, Tailwind, Figma och
            Miro mm. Mitt mål är att skapa användarvänliga och smarta digitala
            lösningar och jag ser fram emot att kombinera mina nya tekniska
            färdigheter med mina tidigare erfarenhet inom marknadsföring,
            kundrelationer och affärsutveckling.
          </p>
          <p className="text-md">
            Innan jag valde att byta bana jobbade jag som Key Account Manager på
            Viaplay Group Radio, där jag ansvarade för strategiska samarbeten
            med några av Sveriges största företag. Jag har en stark känsla för
            att bygga relationer, skapa värde och driva projekt från idé till
            resultat, något jag nu tar med mig in i techvärlden.
          </p>
          <p className="text-md">
            Jag är en målinriktad doer som trivs i team, men också tar stort
            eget ansvar. Jag drivs av utveckling, både på det personliga och
            tekniska planet och just nu söker jag en praktikplats där jag får
            växa som utvecklare, bidra med min bakgrund och fortsätta lära
            tillsammans med andra engagerade människor.
          </p>
          <a
            href="https://drive.google.com/file/d/1AsfKNEUvlGgaWHfHZX7NCmM_RdqsjpV6/view?usp=drive_link"
            download
          >
            <button className="btn btn-black">Ladda ner CV</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
