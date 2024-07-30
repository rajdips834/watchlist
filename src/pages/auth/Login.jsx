import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import myContext from "../../context/MyContext";
import { Link } from "react-router-dom";
import "./Login.css"; // Import your CSS file
import { setUserId } from "firebase/analytics";

const Login = () => {
  const context = useContext(myContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setIsLoggedIn } = context;
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const login = () => {
    setUser(email);
    navigate("/");
    setIsLoggedIn(true);
  };

  return (
    <div>
      <div className="login-container">
        <h1 className="login-header">Login</h1>
        =
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            if (!isValidEmail(e.target.value)) {
              setError("Email is invalid");
            } else {
              setError(null);
            }
            setEmail(e.target.value);
          }}
          className="login-input"
          placeholder="Email"
        />
        <button
          disabled={error != null}
          onClick={login}
          className={`login-button ${error == null ? "enabled" : "disabled"}`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
