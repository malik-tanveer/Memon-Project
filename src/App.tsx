import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Tanveer from "./pages/Tanveer";
import Maroof from "./pages/Maroof";
import About from "./pages/About";
import Help from "./pages/Help";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tanveer" element={<Tanveer />} />
        <Route path="maroof" element={<Maroof />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
        <Route path="*" element={<Notfound />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App;