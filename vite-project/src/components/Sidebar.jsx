import React, { useState } from "react";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : "close"}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide" : "..."}
      </button>

      {isOpen && (
        <div className="sidebar-content">
          <h3>Categories</h3>
          <ul>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Luxury</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Smart Watches</a></li>
          </ul>

        </div>
      )}
    </div>
  );
}

export default Sidebar;
