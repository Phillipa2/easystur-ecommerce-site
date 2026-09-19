// All product data lives here, separate from the Shop component.
// Why: shop.js should be about *how* products are displayed,
// not *what* the products are. If you later fetch this from a
// real backend/API, you only change this file.

export const CATEGORIES = [
  { key: "all", label: "All Products" },
  { key: "apparel", label: "Apparel" },
  { key: "banners", label: "Banners" },
  { key: "ids", label: "ID Cards & Lanyards" },
  { key: "cards", label: "Business Cards" },
  { key: "merch", label: "Mugs & Merch" },
];

export const PRODUCTS = [
  { id: 1, name: "Classic Cotton Tee — Plain", cat: "apparel", type: "Ready-made", price: "KSh 700" },
  { id: 2, name: "Custom Printed T-Shirt", cat: "apparel", type: "Print on demand", price: "From KSh 900" },
  { id: 3, name: "Corporate Polo Shirt", cat: "apparel", type: "Ready-made / Branded", price: "KSh 1,200" },
  { id: 4, name: "Roll-up Banner (85x200cm)", cat: "banners", type: "Print on demand", price: "KSh 4,500" },
  { id: 5, name: "PVC Flex Banner", cat: "banners", type: "Print on demand", price: "From KSh 300/sqft" },
  { id: 6, name: "PVC ID Card + Lanyard Set", cat: "ids", type: "Print on demand", price: "KSh 350" },
  { id: 7, name: "Custom Woven Lanyard", cat: "ids", type: "Print on demand", price: "KSh 250" },
  { id: 8, name: "Premium Business Cards (100pc)", cat: "cards", type: "Print on demand", price: "KSh 1,500" },
  { id: 9, name: "Plain Ceramic Mug", cat: "merch", type: "Ready-made", price: "KSh 450" },
  { id: 10, name: "Branded Photo Mug", cat: "merch", type: "Print on demand", price: "KSh 700" },
  { id: 11, name: "Branded Tote Bag", cat: "merch", type: "Print on demand", price: "KSh 600" },
  { id: 12, name: "Custom Hoodie", cat: "apparel", type: "Print on demand", price: "From KSh 2,200" },
];