import React from 'react';
import Navbar from './components/Navbar';
import Detect from './components/Detect';
import About from './components/About';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import Home from './components/Home';
import Contactus from './components/Contactus';
import Login from './components/Login';
// Make sure to import Home if you want to use it
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carsousel from './components/Carsousel';
// import Blog from './components/Blog'

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/home" element={
            <>
              <Home/>
            </>
          } />
          <Route path="/" element={
            <>
            <Carsousel/>
            <Detect/>
            </>
            }/>
          <Route path="/about" element={<About />} />
          {/* <Route path="/blog" element={<Blog/>}/> */}
          <Route path="/faqs" element={<Faqs/>} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
