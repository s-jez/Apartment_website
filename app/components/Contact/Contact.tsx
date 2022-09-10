import React from "react";
import Form from "./ContactForm";
import ContactMaps from "./ContactMaps";

const Contact = () => {
  return (
    <section>
      <Form />
      <ContactMaps />
      <div>
        <article>
          <h4>Dane kontaktowe</h4>
          <p>Tel: 12345678</p>
        </article>
        <article>
          <h4>Zarezerwuj apartament</h4>
          <p>Sprawdź dostępność na booking.com</p>
        </article>
      </div>
    </section>
  );
};

export default Contact;
