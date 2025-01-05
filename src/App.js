import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import CoachingProgram from './components/pages/CoachingProgram';
import Testimonials from './components/pages/Testimonials';
import SignUp from './components/pages/SignUp';
import UserForm from './components/questionnaire/UserForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/coachingProgram' element={<CoachingProgram />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/questionnaire' element={<UserForm />} />
      </Routes>  
      <Footer />
    </Router>
  );
}

export default App;
