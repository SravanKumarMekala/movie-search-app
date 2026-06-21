import React from 'react';

function MovieModal({ movie, imgUrl, onClose, onAddFavourite, isFavourite }) {
  const poster = movie.poster_path
    ? `${imgUrl}${movie.poster_path}`
    : 'https://via.placeholder.com/200x300?text=No+Image';

  const directors = movie.credits?.crew
    ?.filter(p => p.job === 'Director')
    .map(p => p.name)
    .join(', ') || 'N/A';

  const cast = movie.credits?.cast
    ?.slice(0, 4)
    .map(p => p.name)
    .join(', ') || 'N/A';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <div className="modal-content">
          <img src={poster} alt={movie.title} />
          <div className="modal-details">
            <h2>{movie.title}</h2>
            <p><strong>Year:</strong> {movie.release_date?.split('-')[0]}</p>
            <p><strong>Genre:</strong> {movie.genres?.map(g => g.name).join(', ')}</p>
            <p><strong>Director:</strong> {directors}</p>
            <p><strong>Cast:</strong> {cast}</p>
            <p><strong>Rating:</strong> ⭐ {movie.vote_average?.toFixed(1)}/10</p>
            <p><strong>Runtime:</strong> {movie.runtime} mins</p>
            <p><strong>Overview:</strong> {movie.overview}</p>
            <button
              className={isFavourite ? 'fav-btn active' : 'fav-btn'}
              onClick={() => onAddFavourite(movie)}
            >
              {isFavourite ? '❤️ Added to Favourites' : '🤍 Add to Favourites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;