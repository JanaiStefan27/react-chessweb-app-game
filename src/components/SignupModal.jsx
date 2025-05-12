// src/components/SignupModal.jsx
import React, { useState } from "react";
import "./SignupModal.css";

const SignupModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
        <form>
          {!isLogin && <input type="text" placeholder="Username" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isLogin ? "Log In" : "Create Account"}</button>
        </form>

        <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Log In"}
        </button>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
