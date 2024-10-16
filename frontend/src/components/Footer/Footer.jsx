import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

const Footer = () => {
  // Function to copy text to clipboard and show a toast notification
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success(`${text} copied to clipboard!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div className="lp-footer p-14">
      <div className="footer-den-info">
        <img
          src={require("../../assets/buzzsols-logo-white.png")}
          className="w-24 mb-2"
          alt=""
        />
        <p className="w-full mt-2">
          Where technology meets <span style={{ color: "rgb(199, 47, 72)" }}>buzz</span>
        </p>
      </div>
      <div className="footer-links">
        <h5 className="font-medium mb-2" style={{ color: "rgb(199, 47, 72)" }}>
          Quick Links
        </h5>
        <Link to="/" className="pt-1">Home</Link>
        <Link to="/services" className="pt-1">Services</Link>
        <Link to="/book-an-appointment" className="pt-1">Book An Appointment</Link>
        <Link to="/contact-us" className="pt-1">Contact Us</Link>
      </div>
      <div className="footer-follow-us">
        <h5 className="font-medium mb-2" style={{ color: "rgb(199, 47, 72)" }}>
          Follow Us
        </h5>
        <div>
        <div className='my-2 mt-3 text-sm'>
        <i class="fa-solid fa-envelope mr-1" style={{color: "rgb(199, 47, 72)"}}></i> buzzsols1122@gmail.com
        </div>
        <div className='my-2 text-sm'>
        <i class="fa-solid fa-phone mr-1" style={{color: "rgb(199, 47, 72)"}}></i> +92 321 5211814
        </div>
        <div className='my-2 text-sm'>
        <i class="fa-brands fa-linkedin mr-1" style={{color: "rgb(199, 47, 72)"}}></i> <a style={{color:"white", fontSize: "inherit"}} href="www.linkedin.com/company/buzz-sol/">Buzz Solutions</a>
      </div>
        </div>
      </div>
      <ToastContainer /> {/* ToastContainer to display notifications */}
    </div>
  );
};

export default Footer;
