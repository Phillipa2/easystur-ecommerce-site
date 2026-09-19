import { useState } from "react";
import { CATEGORIES, PRODUCTS } from "../data/products";
import "./shop.css";

export default function Shop() {
  const [cat, setCat] = useState("all");
  const filtered = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);

  return (
    <div className="es-section">
      <div className="es-eyebrow">Shop</div>
      <h2 className="es-display es-h2">Products</h2>
      <p className="es-lead">
        Ready-made items ship as-is. Print-on-demand items open a customization
        step for your logo or design before checkout.
      </p>

      <div className="es-catbar">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            className={"es-catbtn" + (cat === c.key ? " active" : "")}
            onClick={() => setCat(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="es-grid">
        {filtered.map((p) => (
          <div className="es-card" key={p.id}>
            <div className="swatchbar" />
            <div className="body">
              <div className="imgph">Product photo</div>
              <div className="type">{p.type}</div>
              <h4>{p.name}</h4>
              <div className="price">{p.price}</div>
              <button className="es-cardbtn">
                {p.type === "Ready-made" ? "Add to cart" : "Customize & add"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}