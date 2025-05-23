import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeMapa from "./pages/HomeMapa";
import Mirage from "./pages/Mirage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomeMapa" element={<HomeMapa />} />
        <Route path="/Mirage" element={<Mirage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
