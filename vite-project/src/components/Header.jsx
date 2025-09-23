import ThemeToggle from "./ThemeToggle.jsx";
function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>Watchify</h1>
      </div>

      <nav className="navbar">
        <a  href="Home.jsx">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
}

export default Header;
