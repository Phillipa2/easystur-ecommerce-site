import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import Shop from "./pages/shop.jsx";
import Services from "./pages/services.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Contact from "./pages/contact.jsx";

export default function App() {
  return (
    <div className="es-root">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}