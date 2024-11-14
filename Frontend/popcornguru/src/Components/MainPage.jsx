import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './App.css';

function MainPage() {
  const [genre, setGenre] = useState('');
  const [language, setLanguage] = useState('');
const{next}=useNavigate();
  const [movies, setMovies] = useState([]);

  const getRecommendations = async () => {
    try {
      const response = await axios.post('http://localhost:5000/recommend', {
        genre,
        language,
      });
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movie recommendations:', error);
    }
  };

  return (
    <>
      <h1>POPCORNGURU - AI🍿</h1>
      <img
        src="https://compote.slate.com/images/b6fcede3-4025-454e-b32c-e722afdf1ba1.jpg"
        height="300px"
        alt="Popcorn"
      />
      <br />
            <button onClick={()=>{next("/login")}}>Login</button>

      <h4>
        Welcome to PopcornGuru! <br />
        Your ultimate AI companion for personalized movie recommendations. <br />
        Simply select your preferred genre and language, and I will whip up a
        list of films that will make your next movie night unforgettable. <br />
        Get ready to discover your perfect watch, handpicked just for you!
      </h4>
      
      <div>
        <label>
          Genre:
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </label>
        <label>
          Language:
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </label>
        <button onClick={getRecommendations}>Get Recommendations</button>
      </div>
      <h2>Movie Recommendations:</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul> 
    </>
  );
}

export default MainPage;
 