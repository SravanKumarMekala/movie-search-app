import React from 'react';

function MovieCard({ movie, imgUrl, onViewDetails, onAddFavourite, isFavourite }) {
  const poster = movie.poster_path
    ? `${imgUrl}${movie.poster_path}`
    : 'https://via.placeholder.com/200x300?text=No+Image';

  return (
    <div className="movie-card">
      <img
        src={poster}
        alt={movie.title}
        onClick={() => onViewDetails(movie.id)}
      />
      <div className="movie-info">
        <h3 onClick={() => onViewDetails(movie.id)}>{movie.title}</h3>
        <p>{movie.release_date?.split('-')[0]}</p>
        <div className="card-buttons">
          <button className="details-btn" onClick={() => onViewDetails(movie.id)}>
            Details
          </button>
          <button
            className={isFavourite ? 'fav-btn active' : 'fav-btn'}
            onClick={() => onAddFavourite(movie)}
          >
            {isFavourite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;