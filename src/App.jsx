import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import HomeMapa from "./HomeMapa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomeMapa" element={<HomeMapa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
