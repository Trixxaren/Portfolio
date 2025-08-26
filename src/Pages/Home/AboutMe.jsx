const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./utomhus.png" alt="About Me"></img>
      </div>

      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills--section--heading">Om mig</h1>
          <p className="text-md">
            Jag är en lösningsorienterad och nyfiken person med ett stort
            intresse för teknik, människor och problemlösning. Just nu utbildar
            jag mig till front-end utvecklare på Jensen Yrkeshögskola, där jag
            fördjupar mig i HTML, CSS, JavaScript, React.js, TS, Tailwind, NPM,
            Git & GitHub, Figma, Agila projektmetoder som t ex. Scrum & Kanban.
            Mitt mål är att skapa användarvänliga och smarta digitala lösningar
            och jag ser fram emot att kombinera mina nya tekniska färdigheter
            med mina tidigare erfarenhet inom sälj och marknad. Vill även
            fortsätta utvecklas inom fullstack och It-projektledare.
          </p>
          <p className="text-md">
            Tdigare var jag Key Account Manager på Viaplay Group Radio, där jag
            ansvarade för strategiska samarbeten med några av Sveriges största
            företag. Jag har en stark känsla för att bygga relationer, skapa
            värde och driva projekt från idé till resultat, något jag nu tar med
            mig in i framtiden som utvecklare.
          </p>
          <p className="text-md">
            En målinriktad doer som trivs i team, med stort eget ansvar. Drivs
            av utveckling, både på det personliga och tekniska planet. Där nästa
            steg just nu är ut på praktik där jag får växa som utvecklare och
            bidra med mina kunskaper.
          </p>
          <a
            href="https://drive.google.com/file/d/18NIb5lOB8Xqs0khjda3A_mRYyscITeVk/view"
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
