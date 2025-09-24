import { useNavigate, Link } from "react-router";

function Contact({ darkMode }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
navigate("/submit"); 
  };

  return (
    <div className={`contact-page ${darkMode ? "dark" : "light"}`}>
      <h1>Contact Watchify</h1>
      <p>Have questions or feedback? We'd love to hear from you!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" placeholder="Your Name" required />
        </label>

        <label>
          Email:
          <input type="email" placeholder="Your Email" required />
        </label>

        <label>
          Message:
          <textarea placeholder="Your Message" required></textarea>
        </label>
        <button type="submit">Send Message</button>
        <Link to="/">
          <button type="button" className="back-home-btn">Go Back Home</button>
        </Link>
      </form>
    </div>
  );
}

export default Contact;
