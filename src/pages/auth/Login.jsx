import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import myContext from "../../context/data/myContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import "./Login.css"; // Import your CSS file

const Login = () => {
  const context = useContext(myContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, setLoading } = context;
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const login = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result.user));
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Loader />}
      <div className="login-container">
        <div className="login-box">
          <div>
            <h1 className="login-header">Login</h1>
          </div>
          <div>
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
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="login-input"
              placeholder="Password"
            />
            {error && <h2 className="error-message">{error}</h2>}
          </div>
          <div className="login-button-container">
            <button
              disabled={error != null}
              onClick={login}
              className={`login-button ${
                error == null ? "enabled" : "disabled"
              }`}
            >
              Login
            </button>
          </div>
          <div>
            <h2 className="signup-link">
              Don't have an account{" "}
              <Link className="signup-link-text" to={"/signup"}>
                Signup
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
