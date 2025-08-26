import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

const ContactMe = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xqapopdp");

  if (state.succeeded) {
    navigate("/thank-you");
    return null;
  }

  return (
    <section className="contact--section" id="Contact">
      <div className="container contact__inner">
        {" "}
        <div>
          <h2>Kontakta mig</h2>
          <p className="text-lg">
            Kontakta gärna mig här eller direkt via LinkedIn.
          </p>
        </div>
        <form
          className="contact--form--container"
          onSubmit={handleSubmit}
          method="POST"
          action="https://formspree.io/f/xqapopdp"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-row">
            {" "}
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
              <ValidationError
                prefix="E-post"
                field="email"
                errors={state.errors}
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              {" "}
              <span className="text-md">Telefonnummer</span>
              <input
                type="tel"
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
            <ValidationError
              prefix="Meddelande"
              field="message"
              errors={state.errors}
            />
          </label>

          <div>
            <button
              className="btn btn-primary contact--form--btn"
              type="submit"
              disabled={state.submitting}
            >
              Skicka
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
