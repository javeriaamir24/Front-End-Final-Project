import { Link } from "react-router";

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? ( <p>No items yet!</p> ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} width="60" />
                <div>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h3>Total: ${total}</h3>
            <Link to = "/cart/checkout">
            <button className="checkout-btn">Checkout</button>
            </Link>
          </div>
        </>
      )}

      <Link to="/">
        <button className="back-home-btn">Continue Shopping</button>
      </Link>
    </div>
  );
}

export default Cart;
