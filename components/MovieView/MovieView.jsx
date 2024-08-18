// src/components/MovieView/MovieView.jsx
import React from 'react';

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div className="movie-view">
      <h2>{movie.title}</h2>
      <img src={movie.imageUrl} alt={movie.title} />
      <p>{movie.description}</p>
      <p>
        <strong>Genre: </strong>{movie.genre.name} - {movie.genre.description}
      </p>
      <p>
        <strong>Director: </strong>{movie.director.name} (Born: {movie.director.birth})
      </p>
      <p>{movie.director.bio}</p>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
