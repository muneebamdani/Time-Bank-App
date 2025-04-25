import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./pages/Home";
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import AllGigs from "./pages/components/gigs/AllGigs";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/gigs/all-gigs" element={<AllGigs/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
