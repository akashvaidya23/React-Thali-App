import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
