import logo from "./logo.svg";
import "./App.css";
import MyState from "./context/MyState";
import Home from "./pages/home/Home";

function App() {
  return (
    <MyState>
      <Home />
    </MyState>
  );
}

export default App;
