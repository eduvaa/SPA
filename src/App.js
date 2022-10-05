import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Navbar />
     <Header />
     <div classname='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     </div>
     <Footer />
    </>
  );
}

export default App;
