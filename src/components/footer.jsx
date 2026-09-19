import "./footer.css";

export default function Footer() {
  return (
    <footer className="es-footer">
      <div className="cols">
        <div>
          <h5>EASYSTUR Printing & Branding</h5>
          <p className="small">
            Custom apparel, banners, ID cards, business cards and branded merchandise.
          </p>
        </div>
        <div>
          <h5>Shop</h5>
          <p className="small">Apparel · Banners · ID Cards · Business Cards · Merch</p>
        </div>
        <div>
          <h5>Contact</h5>
          <p className="small">Nairobi, Kenya<br />+254 7XX XXX XXX</p>
        </div>
      </div>
      <div className="fine">© 2026 EASYSTUR Printing & Branding. All rights reserved.</div>
    </footer>
  );
}