
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./boot-template.css"; // your custom css

const CoffeeShop = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="#home">
            COFFEE SHOP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#product">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <button className="btn btn-sm">Sign In</button>
          </div>
        </div>
      </nav>

      {/* Home */}
      <section
        id="home"
        className="text-white text-center d-flex flex-column justify-content-center"
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Start Your Day the Coffee Way</h1>
          <p className="lead">Organic Beans. Traditional Taste</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center mt-5">
            <div className="col-lg-6 mb-3 mb-lg-0 d-flex justify-content-center">
              <div id="about-img" className="w-100 rounded"></div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-3">ABOUT US</h2>
              <p>
                LA Coffee is a popular coffee brand known for its rich coffee
                culture. The image representing it is warm and inviting, often
                featuring a steaming cup of coffee placed in a cozy,
                aesthetically pleasing setting. Surrounded by elegant décor and
                soft lighting, the image perfectly captures the essence of
                comfort and relaxation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="product py-5">
        <div className="container">
          <h1 className="text-center mb-5">OUR PRODUCT</h1>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img
                  src="/cold.jpg"
                  className="card-img-top"
                  alt="Cold Coffee"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Cold Coffee</h5>
                  <a href="#" className="btn signin">
                    Order Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img
                  src="/hot.jpg"
                  className="card-img-top"
                  alt="Hot Coffee"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Hot Coffee</h5>
                  <a href="#" className="btn signin">
                    Order Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img src="/tea.jpg" className="card-img-top" alt="Tea" />
                <div className="card-body text-center">
                  <h5 className="card-title">Tea</h5>
                  <a href="#" className="btn signin">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5">
        <div className="container box">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0">
              <img
                src="/contact.jpeg"
                alt="Contact"
                className="img-fluid rounded w-100"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h1 className="mb-4">CONTACT US</h1>
              <form>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Enter your email"
                />
                <textarea
                  className="form-control mb-3"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
                <button type="submit" className="btn signin">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoffeeShop;
