
import { X } from "lucide-react";
export default function Sidebar({ sidebarOpen, toggleSidebar }) {
    return (
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">
           <span id="catg">Categories</span>  <button onClick={toggleSidebar} className="close-btn"><X size={16} /></button>
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