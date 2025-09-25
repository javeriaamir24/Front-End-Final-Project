import { Link } from "react-router";

function CheckOut(){
    return(
<div className= "CheckOut"> 
    <h1>Order Has been Placed</h1>
    <h4>Thank You</h4>
    <Link to="/">
        <button className="back-home-btn">Continue Shopping</button>
      </Link>
</div>
    );
}
export default CheckOut;