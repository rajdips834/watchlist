import logo from "./logo.svg";
import "./App.css";
import MyState from "./context/MyState";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <MyState>
      <div className="App"></div>
    </MyState>
  );
}

export default App;
