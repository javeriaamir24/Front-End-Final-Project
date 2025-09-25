import Sidebar from "../components/Sidebar.jsx"; 
import Header from "../components/Header.jsx";
import Display from "../components/Display.jsx";
import Footer from "../components/Footer.jsx";
import "../App.css";

function Home({ darkMode, setDarkMode,addToCart }) {
  return (
    <div className={`home ${darkMode ? "dark" : "light"}`}>
      <Sidebar />

      <div className="main-content">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="home-main">
          <h2>Welcome to Watchify</h2>
          <p>Style at your own wrist ;)</p>
          <h3>Featured Watches</h3>

          <Display addToCart={addToCart} />

          <Footer />
        </main>
      </div>
    </div>  
  );
}

export default Home;
