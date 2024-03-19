import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// Assuming you have a directory of muscle images
const InstructionPage = () => {
  const { exerciseName } = useParams();
  const [exercise, setExercise] = useState(null);
  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/exercises?name=${exerciseName}`, {
          headers: {
            'X-Api-Key': 'mgS819STNx1KpuKbeAkddCtzAHrj9WgTMEsAwevC'
          }
        });
        setExercise(response.data[0]); // Assuming exerciseName is unique and returns only one exercise
      } catch (error) {
        console.error('Request failed:', error);
      }
    };
    fetchExercise();
  }, [exerciseName]);
  // Get the selected exercise name from local storage
  //const storedExerciseName = localStorage.getItem('selectedExercise');
  // Mapping of exercise names to video file paths
  const videoPaths = {
    'Incline Hammer Curls': '/incline.mp4',
    'Wide-grip barbell curl': '/incline.mp4',
    'EZ-bar spider curl': '/incline.mp4',
    'Hammer Curls ': '/incline.mp4',
    'EZ-Bar Curl': '/incline.mp4',
    'Zottman Curl': '/incline.mp4',
    'Biceps curl to shoulder press': '/incline.mp4',
    'Barbell Curl': '/incline.mp4',
    'Concentration curl': '/incline.mp4',
    'Flexor Incline Dumbbell Curls': '/incline.mp4',
    // Add more exercise names and corresponding video file paths as needed
  };
  return (
    <div className="instruction-page">
      {exercise ? (
        <>
          <h2>{exercise.name}</h2>
          <p>Type: {exercise.type}</p>
          <p>Equipment: {exercise.equipment}</p>
          {/* Display muscle image */}
          <p>Difficulty: {exercise.difficulty}</p>
          <div className="video-container">
            {/* Use HTML5 video element to display the video */}
            <video width="560" height="315" controls>
              <source src={videoPaths[exercise.name]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="instructions">
            <h3>Instructions:</h3>
            <p>{exercise.instructions}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default InstructionPage;