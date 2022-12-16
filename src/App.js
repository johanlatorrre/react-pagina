import { React } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Template from "./components/Template";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";



function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="template" element={<Template />} />
          <Route path="about" element={<About />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
