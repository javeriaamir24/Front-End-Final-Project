import { Link } from "react-router";
function Submit() {
  return (

    <div className="submit-page">
      <h1>Message Sent!</h1>
      <p>Your message has been sent. Our team will contact you shortly.</p>
      
      <Link to="/">
        <button className="back-home-btn">Go Back Home</button>
      </Link>
    </div>
  );
}

export default Submit;