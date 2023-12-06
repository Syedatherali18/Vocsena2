import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/", {
        email,
        password,
      });

      if (response.data === "exist") {
        history("/home", { state: { id: email } });
      } else if (response.data === "notexist") {
        alert("User has not signed up");
      }
    } catch (error) {
      alert("Wrong details");
      console.log(error);
    }
  }

  return (
    <div>
      <Header/>
      <div className="login-container">
        <div className="login">
          <h1>Login</h1>

          <form>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit" onClick={submit}>
              Login
            </button>
          </form>

          <div className="login-divider">
            <span>OR</span>
          </div>

          <Link to="/signup">Signup Page</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
