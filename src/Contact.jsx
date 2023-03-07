import React from "react";

let Contact = () => (
  <section className="contactContainer">
    <h1 className="courseTitle contactTitle">Contact Form</h1>
    <form>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Mobile" />
      <textarea cols="30" rows="5" placeholder="Message"></textarea>
      <input type="button" value="Submit" className="formBtn" />
    </form>
  </section>
);

export default Contact;
