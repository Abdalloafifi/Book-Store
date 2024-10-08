import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-medai-text">Follow us on social media</div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <i style={{ color: "#c0392b" }} className="bi bi-instagram"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "blue" }} className="bi bi-telegram"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "#2980b9" }} className="bi bi-facebook"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "red" }} className="bi bi-youtube"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "skyblue" }} className="bi bi-twitter"></i>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Usefull Links</h3>
          <ul className="footer-links">
            <li className="footer-link"> <Link to="/">Home</Link></li>
            <li className="footer-link"><Link to="/authors">Authors</Link> </li>
            <li className="footer-link"><Link to="about/">About Us</Link> </li>
            <li className="footer-link"><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill"></i>
              Tanta Rushdi Street with Shawky
            </div>
            <div className="footer-address-item">
              <i className="bi bi-telephone-fill"></i>
              01211810733
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill"></i>
              abdo.afifi20007@gmail.com
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <p className="footer-description">
          This is a training page for using React and does not contain anything related to the back-end.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
