import React from "react";
import { useState } from "react";
import "./styles/styles.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Perform signup logic here
    console.log("Signing up with email:", email, "and password:", password);
  };

  return (
    <div className="signup-page">
      <h1>Create an Account</h1>
      <div className="signup-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignupPage;
