import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componets/Home";
import Details from "./componets/Details";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
