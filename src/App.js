import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShoppingMenu from "./components/ShoppingMenu";

function App() {
  return (
    <div className="App">
      <Home />
      <ShoppingMenu />
    </div>
  );
}

export default App;
