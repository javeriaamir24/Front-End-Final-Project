import products from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

function Display( {addToCart}) {
  return (
    <div className="product-grid">
      {products.map((prod, index) => (
        <ProductCard
          key={index}
          name={prod.name}
          price={prod.price}
          image={prod.image}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Display;
