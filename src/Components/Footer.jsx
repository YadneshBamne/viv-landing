import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-3" style={{ background:'black' }}>
      <div className="container">
        <div className="row align-items-start">

          {/* Logo / Brand */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">ViV</h4>
            <p className="small">
              Visualize. Interact. Venture. The future starts here.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-3 mb-4">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white-50 text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-white-50 text-decoration-none">About</a></li>
              <li><a href="#projects" className="text-white-50 text-decoration-none">Projects</a></li>
              <li><a href="#contact" className="text-white-50 text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5>Newsletter</h5>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control rounded-start"
                  placeholder="Your email"
                />
                <button className="btn btn-light rounded-end" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5"><FaFacebookF /></a>
              <a href="#" className="text-white fs-5"><FaTwitter /></a>
              <a href="#" className="text-white fs-5"><FaInstagram /></a>
              <a href="#" className="text-white fs-5"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-top border-secondary pt-3 mt-3 small text-white-50">
          &copy; {new Date().getFullYear()} ViV. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
