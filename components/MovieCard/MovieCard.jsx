// src/components/MovieCard/MovieCard.jsx
import React from 'react';

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div className="movie-card" onClick={() => onMovieClick(movie)}>
      <h3>{movie.title}</h3>
      <img src={movie.imageUrl} alt={movie.title} />
    </div>
  );
};
