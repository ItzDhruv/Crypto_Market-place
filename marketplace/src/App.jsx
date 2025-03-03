import { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import "./index.css";

const mockCryptoAssets = [
  { id: 1, name: "Bitcoin", symbol: "BTC", price: 30000, change: 1.2 },
  { id: 2, name: "Ethereum", symbol: "ETH", price: 2000, change: -0.5 },
  { id: 3, name: "Solana", symbol: "SOL", price: 100, change: 2.1 },
  { id: 3, name: "Aptos", symbol: "SOL", price: 200, change: 2.1 },
];

function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`} style={{ backgroundColor: sidebarOpen ? "#2563eb" : "white" }}>
      <div className="sidebar-header">
        <h2 className="sidebar-title">
          Categories <button onClick={toggleSidebar} className="close-btn"><X size={16} /></button>
        </h2>
      </div>
      <ul className="sidebar-menu">
        <li>NFTs</li>
        <li>Tokens</li>
        <li>Metaverse</li>
      </ul>
    </aside>
  );
}

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <button onClick={toggleSidebar} className="menu-btn">
        <Menu size={24} />
      </button>
      <h1>Blockchain Marketplace</h1>
      <ShoppingCart size={24} />
    </nav>
  );
}

function Card({ asset }) {
  return (
    <div className="card">
      <h2>
        {asset.name} ({asset.symbol})
      </h2>
      <p>Price: ${asset.price}</p>
      <p className={asset.change >= 0 ? "price-up" : "price-down"}>
        {asset.change}%
      </p>
      <button className="buy-btn">Buy</button>
    </div>
  );
}

export default function Marketplace() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="main-container">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="content">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="card-container">
          {mockCryptoAssets.map((asset) => (
            <Card key={asset.id} asset={asset} />
          ))}
        </div>
      </div>
    </div>
  );
}
