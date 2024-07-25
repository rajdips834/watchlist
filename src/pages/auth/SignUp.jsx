import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/MyContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/firebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import "./Signup.css"; // Import your CSS file

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const context = useContext(myContext);
  const { loading, setLoading } = context;

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const signup = async () => {
    setLoading(true);
    if (name === "" || email === "" || password === "") {
      setLoading(false);
      return toast.error("All fields are required");
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Signup successfull");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
      window.location.href = "/";
    } catch (error) {
      toast.error("Signup Failed");
      console.log(error);
      setLoading(false);
    }
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
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className="signup-input"
            placeholder="Name"
            required
          />
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
          {error && <h2 className="error-message">{error}</h2>}
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="signup-input"
            placeholder="Password"
          />
        </div>
        <div className="signup-button-container">
          <button
            disabled={error != null}
            onClick={signup}
            className={`signup-button ${error ? "disabled" : ""}`}
          >
            Signup
          </button>
        </div>
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
