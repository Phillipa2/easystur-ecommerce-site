import { Link } from "react-router-dom";
import { SERVICES } from "../data/services";
import "./services.css";

export default function Services() {
  return (
    <div className="es-section">
      <div className="es-eyebrow">Services</div>
      <h2 className="es-display es-h2">What we can produce for you</h2>
      <p className="es-lead">
        These are quote-based — tell us your brief and quantities, and we'll come
        back with pricing and turnaround.
      </p>

      <div className="es-servicelist">
        {SERVICES.map((s) => (
          <div className="es-servicerow" key={s.id}>
            <h4 className="es-display">{s.name}</h4>
            <p>{s.desc}</p>
            <Link to="/contact" className="es-btn outline">Request quote</Link>
          </div>
        ))}
      </div>
    </div>
  );
}