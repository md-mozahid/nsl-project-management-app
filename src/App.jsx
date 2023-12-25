import { Routes, Route } from "react-router-dom";
import AddProject from "./pages/addProject";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import CraneUpdate from "./pages/craneUpdate";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-form" element={<AddProject />} />
        <Route path="crane-update" element={<CraneUpdate />} />
      </Routes>
    </>
  );
}

export default App;
