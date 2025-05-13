// src/components/SignupModal.jsx
import React, { useState } from "react";
import "./SignupModal.css";

const SignupModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    const { username, email, password } = formData;

    if (!email || !password || (!isLogin && !username)) {
      setMessage("Please fill in all required fields.");
      return;
    }

    if (isLogin) {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (
        savedUser &&
        savedUser.email === email &&
        savedUser.password === password
      ) {
        setMessage("Login successful! ✅");
      } else {
        setMessage("Invalid email or password ❌");
      }
    } else {
      const newUser = { username, email, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      setMessage("Account created successfully! 🎉");
    }

    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
        </form>

        {message && <p className="message">{message}</p>}

        <button
          className="toggle-btn"
          onClick={() => {
            setIsLogin(!isLogin);
            setMessage("");
          }}
        >
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
