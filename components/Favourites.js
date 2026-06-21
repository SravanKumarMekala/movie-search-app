import React from 'react';

function Favourites({ favourites, imgUrl, onRemove, onViewDetails }) {
  if (favourites.length === 0) {
    return (
      <div className="empty-favourites">
        <p>❤️ No favourites yet! Search for movies and add them here.</p>
      </div>
    );
  }

  return (
    <div className="movies-grid">
      {favourites.map(movie => (
        <div className="movie-card" key={movie.id}>
          <img
            src={movie.poster_path
              ? `${imgUrl}${movie.poster_path}`
              : 'https://via.placeholder.com/200x300?text=No+Image'}
            alt={movie.title}
            onClick={() => onViewDetails(movie.id)}
          />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split('-')[0]}</p>
            <div className="card-buttons">
              <button className="details-btn" onClick={() => onViewDetails(movie.id)}>
                Details
              </button>
              <button className="remove-btn" onClick={() => onRemove(movie.id)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favourites;