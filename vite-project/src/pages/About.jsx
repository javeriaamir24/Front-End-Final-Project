import { Link } from "react-router";

function About({ darkMode }) {
  return (
    <div className={`about-page ${darkMode ? "dark" : "light"}`}>
      <h1>About Watchify</h1>
      <p>
        Welcome to Watchify, your ultimate destination for stylish, high-quality watches. 
        We believe that a watch is not just a timepiece—it's a statement of personality, style, 
        and elegance.
      </p>
      <p>
        Our collection includes a wide variety of designs: from classic analog watches 
        to modern smartwatches. Every watch is crafted with precision and care, ensuring 
        you get the perfect accessory for every occasion.
      </p>
      <p>
        Whether you’re looking for something sleek and minimalistic or bold and statement-making, 
        Watchify has something for everyone. Explore our featured collections and find your perfect match!
      </p>

      <Link to="/">
        <button className="back-home-btn">Go Back Home</button>
      </Link>
    </div>
  );
}

export default About;
