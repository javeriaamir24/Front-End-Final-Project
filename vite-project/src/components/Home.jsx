import { useState } from "react";   
import Sidebar from "./Sidebar.jsx"; 
import Header from "./Header.jsx";
import Display from "./Display.jsx";
import Footer from "./Footer.jsx";
import "../App.css";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`home ${darkMode ? "dark" : "light"}`}>
      <Sidebar />

      <div className="main-content">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="home-main">
          <h2>Welcome to Watchify</h2>
          <p>Style at your own wrist ;)</p>
          <h3>Featured Watches</h3>

          <Display />

          <Footer />
        </main>
      </div>
    </div>  
  );
}

export default Home;
