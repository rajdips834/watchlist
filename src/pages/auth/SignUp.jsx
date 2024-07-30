import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/MyContext";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import "./Signup.css"; // Import your CSS file

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, setLoading, setUser, setIsLoggedIn } = context;

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const signup = () => {
    setUser(email);
    localStorage.setItem("user", email);
    navigate("/");
    setIsLoggedIn(true);
  };

  return (
    <div className="signup-container">
      {loading && <Loader />}
      <div className="signup-form">
        <div className="">
          <h1 className="signup-title">Signup</h1>
        </div>

        <div>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => {
              if (!isValidEmail(e.target.value)) {
                setError("Email is invalid");
              } else {
                setError(null);
              }

              setEmail(e.target.value);
            }}
            name="email"
            className="signup-input"
            placeholder="Email"
          />
        </div>

        <button
          disabled={error != null}
          onClick={signup}
          className={`signup-button ${error ? "disabled" : ""}`}
        >
          Signup
        </button>
        <div>
          <h2 className="signup-footer">
            Have an account{" "}
            <Link className="login-link" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
