import { useParams, Link } from "react-router";
import products from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

function Category({ darkMode, addToCart }) {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (prod) =>
      prod.category.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase()
  );

  return (
    <div className={`category-page ${darkMode ? "dark" : "light"}`}>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Watches</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((prod, index) => (
            <ProductCard
              key={index}
              name={prod.name}
              price={prod.price}
              image={prod.image}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>

      <Link to="/">
        <button className="back-home-btn">Go Back Home</button>
      </Link>
    </div>
  );
}

export default Category;
