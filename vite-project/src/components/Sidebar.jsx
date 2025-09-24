import  { useState } from "react";
import { Link } from "react-router";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : "close"}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "*_*" : "¬_¬"}
      </button>

      {isOpen && (
        <div className="sidebar-content">
          <h3>Categories</h3>
          <ul>
            <li><Link to="/category/men">Men</Link></li>
            <li><Link to="/category/women">Women</Link></li>
            <li><Link to="/category/luxury">Luxury</Link></li>
            <li><Link to="/category/sports">Sports</Link></li>
            <li><Link to="/category/smart">Smart Watches</Link></li>
            <li><Link to="/category/kids">Kids</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;

