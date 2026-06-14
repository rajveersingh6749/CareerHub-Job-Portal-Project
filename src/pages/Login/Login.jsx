import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="login_container">
      <div className="login_card">
        <h3 className="title">Sign in to CareerHub</h3>

        <p className="subtitle">Welcome back! Please sign in to continue</p>

        <button className="google_btn">Continue with Google</button>

        <div className="divider">
          <span>or</span>
        </div>

        <p>
          {" "}
          <label>Email address</label>
        </p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
        />

        <button className="continue_btn">Continue</button>

        <p className="signup_text">
          Don't have an account?
          <Link to="/signup" className="sign_up_btn">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
