import "./App.css";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Features from "./Components/Features";
import Interface from "./Components/Interface";
import Perfectly from "./Components/Perfectly";
import Customers from "./Components/Customers";
import Blog from "./Components/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/interface" element={<Interface />} />
        <Route path="/perfectly" element={<Perfectly />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* <Header /> */}
    </>
  );
}

export default App;
