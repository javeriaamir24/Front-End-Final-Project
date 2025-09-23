
function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h4 className="product-name">{name}</h4>
      <p className="product-price">${price}</p>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
}

export default ProductCard;
