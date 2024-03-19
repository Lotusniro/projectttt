import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ExerciseCard from './ExerciseCard';

const muscleImages = {
  biceps: '/logo.webp',
  // Add other muscle images as needed
};

const MainPage = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/exercises', {
        params: {
          difficulty: selectedDifficulty
        },
        headers: {
          'X-Api-Key': 'mgS819STNx1KpuKbeAkddCtzAHrj9WgTMEsAwevC'
        }
      });
      setExercises(response.data);
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return (
    <>
      <div className="filter-options">
        
     
        
        <label>
          Difficulty Level:
          <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
            <option value="">Select Difficulty Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            {/* Options for difficulty levels */}
          </select>
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="main-page">
        {/* Display filtered exercises */}
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} muscleImages={muscleImages} />
        ))}
      </div>
      <Link to="/store">Go to Store</Link>
    </>
  );
};

export default MainPage;
