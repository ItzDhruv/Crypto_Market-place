import { Menu, ShoppingCart } from "lucide-react";
import PrivyButton from './PrivyButton'
export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <button onClick={toggleSidebar} className="menu-btn">
        <Menu size={24} />
      </button>
      <h1 id="dd-title">DD Marketplace</h1>
      <PrivyButton/>
    </nav>
  );
}