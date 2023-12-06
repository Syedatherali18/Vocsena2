import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        name,
        email,
        password,
      });

      if (response.data === "exist") {
        setPopupMessage("User already exists");
        setShowPopup(true);
      } else if (response.data === "notexist") {
        navigate("/home", { state: { name, email } });
      }
    } catch (error) {
      setPopupMessage("Error: something went wrong");
      setShowPopup(true);
      console.error(error);
    }
  }

  return (
    <div>
      <Header/>
      <div className="signuppage">
        <h1 className="heading">Signup</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button type="submit" onClick={handleSubmit} className="btn">
            Signup
          </button>
        </form>
        <div className="or-section">
          <p className="or-text">OR</p>
        </div>
        <Link to="/login" className="link">
          Login Page
        </Link>

        {/* Popup Message */}
        <div className={`popup-message ${showPopup ? "active" : ""}`}>
          <div className="popup-message-content">{popupMessage}</div>
          <div className="popup-message-close">
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
