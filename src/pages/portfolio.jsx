import "./portfolio.css";

const ITEMS = [
  "Corporate rebrand — logo suite",
  "Event roll-up banners, x12",
  "Staff uniform screen print run",
  "Conference ID cards & lanyards",
  "Restaurant menu + business cards",
  "Branded mug gift set",
];

export default function Portfolio() {
  return (
    <div className="es-section">
      <div className="es-eyebrow">Portfolio</div>
      <h2 className="es-display es-h2">Recent work</h2>
      <div className="es-gallerygrid">
        {ITEMS.map((t) => (
          <div className="es-gitem" key={t}>{t}</div>
        ))}
      </div>
    </div>
  );
}