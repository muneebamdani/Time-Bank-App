import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css"
import "./css/all.min.css"
import "./css/boxicons.min.css"
import "./css/feather.css"
import "./css/fontawesome.min.css"
import "./css/jquery.fancybox.min.css"
import "./css/owl.carousel.min.css"
import "./css/select2.min.css"
import "./css/swiper.min.css"
import Home from "./pages/Home";
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn";
import About from "./pages/About";
// import Team from "./pages/Team";
// import TeamDetails from './pages/components/team-components/TeamDetails'
import AllGigs from "./pages//AllGigs";
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
        <Route path="/all-gigs" element={<AllGigs/>}/>
      </Routes>
    </Router>
  );
};

export default App;
