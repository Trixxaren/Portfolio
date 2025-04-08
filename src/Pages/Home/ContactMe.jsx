const ContactMe = () => {
  return (
    <section className="contact--section" id="Contact">
      <div>
        <h2>Kontakta mig</h2>
        <p className="text-lg">
          Kontakta gärna mig här eller direkt via LinkedIn.
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Förnamn</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Efternamn</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">E-post</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Telefon nummer</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        {/* <label htmlFor="choose-topic" className="contact--label"> addera denna vid senare tillfälle
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Item Praktikplats</option>
            <option>Item Bygg mig en hemsida</option>
            <option>Item Något mera?</option>
          </select>
        </label> */}
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Meddelande</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Skriv ditt meddelande..."
          />
        </label>
        {/* <label htmlFor="checkbox" className="checkbox--label"> Lägg till denna vid senare tillfälle iaf den behövs
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label> */}
        <div>
          <button className="btn btn-primary contact--form--btn">Skicka</button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
