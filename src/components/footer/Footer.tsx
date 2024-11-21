import React from "react";
import "../../services/styles/itemS/footerStyle.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p className="bottom-p-first">© 2024 Patricia Urquiola</p>

          <p>John Doe Architecture Ltd. (architecture)</p>
<p>via Roma, 12 - 00100 Rome Italy</p>
<p className="bottom-p">VAT No. 12345678901</p>

<p>Jane Smith Design Co. (product design)</p>
<p>via Firenze, 89 - 50100 Florence Italy</p>
<p className="bottom-p">VAT No. 98765432101</p>

          <p className="font-bold">
            <a href="/privacy-policy">Privacy policy</a>
          </p>
          <p className="font-bold">
            <a href="/cookie-policy">Cookie policy</a>
          </p>
          <p className="font-bold">
            <a href="/whistleblowing">Whistleblowing</a>
          </p>
        </div>
        <div className="footer-icons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="footer-icon" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="footer-icon" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
