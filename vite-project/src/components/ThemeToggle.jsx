function ThemeToggle({ darkMode, setDarkMode }){
    return(
        <div className="actions">
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞" : "🌙"}
        </button>
        <button className="cart-btn">Cart</button>
      </div>
    )
}
export default ThemeToggle;