import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import MovieModal from './components/MovieModal';
import Favourites from './components/Favourites';
import './index.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('search');

  const searchMovies = async (query) => {
    if (!query) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        setMovies(data.results);
      } else {
        setMovies([]);
        setError('No movies found. Try a different search!');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  const fetchMovieDetails = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`);
      const data = await res.json();
      setSelectedMovie(data);
    } catch (err) {
      console.error('Error fetching details');
    }
  };

  const addToFavourites = (movie) => {
    if (!favourites.find(f => f.id === movie.id)) {
      setFavourites([...favourites, movie]);
    }
  };

  const removeFromFavourites = (id) => {
    setFavourites(favourites.filter(f => f.id !== id));
  };

  const isFavourite = (id) => favourites.some(f => f.id === id);

  return (
    <div className="app">
      <header className="header">
        <h1>🎬 MovieSearch</h1>
        <p>Search, explore and save your favourite movies</p>
      </header>

      <div className="tabs">
        <button
          className={activeTab === 'search' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('search')}
        >
          🔍 Search
        </button>
        <button
          className={activeTab === 'favourites' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('favourites')}
        >
          ❤️ Favourites ({favourites.length})
        </button>
      </div>

      {activeTab === 'search' && (
        <div className="search-section">
          <SearchBar onSearch={searchMovies} />
          {loading && <div className="loading">🔄 Searching movies...</div>}
          {error && <div className="error">❌ {error}</div>}
          <div className="movies-grid">
            {movies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                imgUrl={IMG_URL}
                onViewDetails={fetchMovieDetails}
                onAddFavourite={addToFavourites}
                isFavourite={isFavourite(movie.id)}
              />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'favourites' && (
        <Favourites
          favourites={favourites}
          imgUrl={IMG_URL}
          onRemove={removeFromFavourites}
          onViewDetails={fetchMovieDetails}
        />
      )}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          imgUrl={IMG_URL}
          onClose={() => setSelectedMovie(null)}
          onAddFavourite={addToFavourites}
          isFavourite={isFavourite(selectedMovie.id)}
        />
      )}
    </div>
  );
}

export default App;