import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Submit from "./pages/Submit.jsx";
import Category from "./pages/Category.jsx";
import Cart from "./pages/Cart.jsx";
import CheckOut from "./pages/CheckOut.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);

    setNotification(`${product.name} added to cart `);

    setTimeout(() => setNotification(""), 1500);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Router>
        {notification && <div className="notification">{notification}</div>}

        <Routes>
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                addToCart={addToCart}
                cart={cart}
              />
            }
          />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="/submit" element={<Submit darkMode={darkMode} />} />
          <Route
            path="/category/:category"
            element={<Category darkMode={darkMode} addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart}  />} />
          <Route path = "/cart/checkout" element={<CheckOut darkMode={darkMode}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
