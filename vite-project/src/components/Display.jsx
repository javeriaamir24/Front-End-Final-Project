import ProductCard from "./ProductCard.jsx";
import products from "../data/products.js"; 
function Display(){
    return(
    <div className="product-grid">
          {products.map((prod, index) => (
            <ProductCard
              key={index}
              name={prod.name}
              price={prod.price}
              image={prod.image}
            />
          ))}
        </div>);
}
export default Display