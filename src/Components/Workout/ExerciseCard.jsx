import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise, muscleImages }) => {
  const { name, type, muscle, equipment, difficulty } = exercise;

  const handleClick = () => {
    localStorage.setItem('selectedExercise', name);
  };

  return (
    <div className="exercise-card">
      {/* Display muscle image */}
      <img src={muscleImages[muscle]} alt={muscle} />
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Muscle: {muscle}</p>
      <p>Equipment: {equipment}</p>
      <p>Difficulty: {difficulty}</p>
      <Link to={`/instructions/${name}`} onClick={handleClick}>View Instructions</Link>
    </div>
  );
};

export default ExerciseCard;
