import { useState } from "react";
import "./index.css";
import Sidebar  from "./components/ui/sidebar";
import Navbar  from "./components/ui/navbar";
import Card from "./components/ui/card";

const mockCryptoAssets = [
  { id: 1, name: "Bitcoin", symbol: "BTC", price: 30000, change: 1.2 },
  { id: 2, name: "Ethereum", symbol: "ETH", price: 2000, change: -0.5 },
  { id: 3, name: "Solana", symbol: "SOL", price: 100, change: 2.1 },
];

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
