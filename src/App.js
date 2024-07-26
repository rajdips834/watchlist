import logo from "./logo.svg";
import "./App.css";
import MyState from "./context/MyState";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import Details from "./pages/details/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
