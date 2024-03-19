import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
// import Navbar from './Components/Navbar/navbar.jsx'
import ExerciseCard from './Components/Workout/ExerciseCard.jsx'
import InstructionPage from './Components/Workout/InstructionPage.jsx'
import MainPage from './Components/Workout/MainPage.jsx'
function App() {
   return (
    <div>
         <Router>
      <div className="App">
     
        <Routes> {/* Wrap Routes around Route components */}
          <Route path="/" element={<MainPage />} /> {/* Use "element" prop to specify component */}
          <Route path="/instructions/:exerciseName" element={<InstructionPage />} /> {/* Use "element" prop to specify component */}
        </Routes>
      </div>
    </Router>
    </div>
    );
}
export default App;