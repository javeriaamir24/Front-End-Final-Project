import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle.jsx";
function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>Watchify</h1>
        <h2>by Javeria Aamir</h2>
      </div>

      <nav className="navbar">
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
</nav>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      
    </header>
  );
}

export default Header;
