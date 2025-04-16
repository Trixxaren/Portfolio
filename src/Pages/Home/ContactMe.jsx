import React from "react";

const ContactMe = () => {
  return (
    <section className="contact--section" id="Contact">
      <div>
        <h2>Kontakta mig</h2>
        <p className="text-lg">
          Kontakta gärna mig här eller direkt via LinkedIn.
        </p>
      </div>
      <form
        className="contact--form--container"
        name="contact" // Formulärets namn
        method="POST" // HTTP-metod
        data-netlify="true" // Aktiverar Netlify form
        action="/thank-you" // Skickas hit efter submit
      >
        {/* Netlify kräver detta dolda inputfält */}
        <input type="hidden" name="form-name" value="contact" />

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
            <span className="text-md">Telefonnummer</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Meddelande</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Skriv ditt meddelande..."
            required
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn" type="submit">
            Skicka
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
