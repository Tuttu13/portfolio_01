import React from "react";
import { Routes, Route } from "react-router-dom";

import Top from "./pages/homes/top";
import Profile from "./pages/homes/profile";
import Skill from "./pages/homes/skill";
import Production from "./pages/homes/production";
import Contact from "./pages/homes/contact";
import Blog from "./pages/homes/blog";
import NoMatch from "./pages/nomatch";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/production" element={<Production />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;