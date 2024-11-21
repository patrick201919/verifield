import React from "react";
import "../../services/styles/itemS/footerStyle.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p className="bottom-p-first">© 2024 Patricia Urquiola</p>

          <p>Patricia Urquiola S.p.A. (architecture)</p>
          <p>via Bartolomeo Eustachi, 45 - 20129 Milan Italy</p>
          <p className="bottom-p">VAT No. 04378340964</p>

          <p>Patricia Urquiola Design S.r.l. (product design)</p>
          <p>via Bartolomeo Eustachi, 45 - 20129 Milan Italy</p>
          <p className="bottom-p">VAT No. 06506690962</p>

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
