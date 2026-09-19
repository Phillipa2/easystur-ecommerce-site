import { useState } from "react";
import "./contact.css";

const initialForm = { name: "", contact: "", need: "Custom apparel printing", details: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Quote request:", form);
    setSubmitted(true);
  }

  return (
    <div className="es-section">
      <div className="es-eyebrow">Contact</div>
      <h2 className="es-display es-h2">Get a quote or ask a question</h2>

      <div className="es-contactgrid">
        <form onSubmit={handleSubmit}>
          <div className="es-field">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" />
          </div>

          <div className="es-field">
            <label htmlFor="contact">Email or phone</label>
            <input id="contact" name="contact" type="text" value={form.contact} onChange={handleChange} placeholder="How we reach you" />
          </div>

          <div className="es-field">
            <label htmlFor="need">What do you need?</label>
            <select id="need" name="need" value={form.need} onChange={handleChange}>
              <option>Custom apparel printing</option>
              <option>Graphic & logo design</option>
              <option>Banners / roll-up banners</option>
              <option>PVC ID cards & lanyards</option>
              <option>Business cards & branding</option>
              <option>Mugs & promotional merch</option>
            </select>
          </div>

          <div className="es-field">
            <label htmlFor="details">Details / quantity</label>
            <textarea id="details" name="details" rows="4" value={form.details} onChange={handleChange} placeholder="Tell us about the order" />
          </div>

          <button type="submit" className="es-btn accent">Send request</button>
          {submitted && <p className="sent-note">Thanks — we'll get back to you shortly.</p>}
        </form>

        <div>
          <div className="es-infoblock">
            <strong>Visit us</strong>
            <p className="es-lead">Nairobi, Kenya — exact location on request.</p>
          </div>
          <div className="es-infoblock">
            <strong>Call or WhatsApp</strong>
            <p className="es-lead">+254 7XX XXX XXX</p>
          </div>
          <div className="es-infoblock">
            <strong>Turnaround</strong>
            <p className="es-lead">Most print-on-demand orders: 2–5 working days depending on quantity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}