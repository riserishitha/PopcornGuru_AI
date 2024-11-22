import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const [genre, setGenre] = useState('');
  const [language, setLanguage] = useState('');
const navigate=useNavigate();
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
    <div className='bg-blue-400 p-5'>
    <button onClick={()=>{navigate("/login")}}>Login</button>
    </div>

      <div className='mt-5 mb-5 border-blue-400 rounded-3xl border-2 justify-self-center p-2'>
        Welcome to PopcornGuru! <br />
        Your ultimate AI companion for personalized movie recommendations. <br />
        Simply select your preferred genre and language, and I will whip up a
        list of films that will make your next movie night unforgettable. <br />
        Get ready to discover your perfect watch, handpicked just for you!
      </div>
      
      <div className='justify-self-center'>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className='mb-5 border-blue-400 rounded-3xl border-2 p-2'
            placeholder='Genre'
          />
          <br />
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className='mb-5 border-blue-400 rounded-3xl border-2 p-2'
            placeholder='Language'
          />
          <br />
        <button onClick={getRecommendations} className='border-blue-400 rounded-3xl border-2 p-2 justify-self-center bg-blue-400 text-white'>Get Recommendations</button>
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
 