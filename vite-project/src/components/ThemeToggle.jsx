import {Link} from  "react-router";
function ThemeToggle({ darkMode, setDarkMode }){
    return(
        <div className="actions">
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞" : "🌙"}
        </button>
        <Link to="/cart">
          <button className="cart-btn">Cart</button>
          </Link>
      </div>
    )
}
export default ThemeToggle;