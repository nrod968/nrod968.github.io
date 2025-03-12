import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
    return (
        <Router> {/* No basename needed if using a user GitHub Pages repo */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
