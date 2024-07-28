import logo from "./logo.svg";
import "./App.css";
import MyState from "./context/MyState";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import PlaylistDetails from "./pages/playlistDetails/PlaylistDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/details/DetailsPage";
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/playlist/:title" element={<PlaylistDetails />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
