import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./componets/Details";
import Home from "./pages/Home";
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
