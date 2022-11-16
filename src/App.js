import Home from "./pages/Home";
import PlaceToStay from "./pages/PlaceToStay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Wallet from "./components/Wallet";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/accomondation" element={<PlaceToStay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
