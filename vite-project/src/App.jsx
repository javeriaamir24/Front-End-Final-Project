
import { useState } from "react";
import { BrowserRouter as Router,Routes,Route} from 'react-router';
import Home from "./pages/Home.jsx";

import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Submit from "./pages/Submit.jsx";
import Category from "./pages/Category.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Router>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="/submit" element={<Submit darkMode={darkMode} />} />
          <Route path="/category/:category" element={<Category darkMode={darkMode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

