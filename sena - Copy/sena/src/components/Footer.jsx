import React from 'react';
import "./Home.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="newsletter">
          <h2>Subscribe Our Newsletter</h2>
          <div className="form">
            <input className="form-control" placeholder="Email here" />
            <button className="btn">Submit</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="footer-about">
              <h3>About Us</h3>
              <p>
                "Vocsena's here to help you every step of the way, no matter where you are. Think of us as your trusted partners, ready to assist whenever you encounter difficulties or need advice. We're committed to providing you with flexible and reliable support, so keep us in mind whenever you feel stuck or in need of assistance."
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className="container footer-menu">
        <div className="f-menu">
          <a href="">Terms of use</a>
          <a href="">Privacy policy</a>
          <a href="">Career</a>
          <a href="">Help</a>
          <a href="">FQAs</a>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; <a href="/">Vocsena</a>, All Right Reserved.</p>
          </div>
          <div className="col-md-6">
            <p>Designed By Syed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
