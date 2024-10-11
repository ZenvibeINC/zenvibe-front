import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Landing from "./Views/Landing";
import Cart from "./Views/Cart";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
