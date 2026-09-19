import { Link } from "react-router-dom";
import "./home.css";

const SWATCHES = ["Apparel", "Banners", "ID Cards", "Biz Cards", "Mugs", "Logos", "Lanyards", "Branding"];

export default function Home() {
  return (
    <>
      <div className="es-hero">
        <div>
          <div className="es-eyebrow">Printing & Branding, Nairobi</div>
          <h1 className="es-display hero-title">
            Branded work that<br />holds up in daylight.
          </h1>
          <p className="es-lead">
            From a single custom tee to a full corporate rollout — apparel, banners,
            ID cards, business cards and promotional merchandise, printed or ready-made.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="es-btn accent">Browse products</Link>
            <Link to="/services" className="es-btn outline">Request a service</Link>
          </div>
        </div>

        <div className="es-swatchgrid">
          {SWATCHES.map((s, i) => (
            <div
              key={s}
              className="es-swatch"
              style={{
                background: i % 2 === 0 ? "var(--navy)" : "var(--marigold)",
                color: i % 2 === 0 ? "var(--paper)" : "var(--navy)",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>

      <div className="es-section" style={{ paddingTop: 0 }}>
        <div className="es-pathgrid">
          <div className="es-pathcard">
            <div className="tag">Buy now</div>
            <h3 className="es-display pathcard-title">Shop products</h3>
            <p className="es-lead">
              Plain or customized apparel, mugs, ID cards and more — pick a product,
              choose print or plain, add to cart.
            </p>
            <Link to="/shop" className="es-btn">Go to shop</Link>
          </div>
          <div className="es-pathcard">
            <div className="tag">Talk to us first</div>
            <h3 className="es-display pathcard-title">Get a service done</h3>
            <p className="es-lead">
              Logo design, full corporate branding or bulk production — tell us the
              brief and get a quote.
            </p>
            <Link to="/services" className="es-btn">View services</Link>
          </div>
        </div>
      </div>
    </>
  );
}