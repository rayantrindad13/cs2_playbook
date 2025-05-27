import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeMapa from "./pages/HomeMapa";
import Mirage from "./pages/Mirage";
import Dust from "./pages/Dust";
import Nuke from "./pages/Nuke";

import { Provider } from "react-redux";
import { store } from "./store";
import Popup from "./components/Popup";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HomeMapa" element={<HomeMapa />} />
          <Route path="/Mirage" element={<Mirage />} />
          <Route path="/Dust-2" element={<Dust />} />
          <Route path="/Nuke" element={<Nuke />} />
        </Routes>
        <Popup />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
