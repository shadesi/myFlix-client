// src/components/MainView/MainView.jsx
import React, { useState } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieView } from '../MovieView/MovieView';

export const MainView = () => {
  // Mock data for movies
  const [movies] = useState([
    {
      _id: '1',
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      imageUrl: 'https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg/70',
      genre: { name: 'Science Fiction', description: 'Futuristic, imaginative content' },
      director: { name: 'Christopher Nolan', bio: 'British-American film director.', birth: '1970' }
    },
    {
      _id: '2',
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of his reality.',
      imageUrl: 'https://via.placeholder.com/150',
      genre: { name: 'Action', description: 'Exciting physical activity' },
      director: { name: 'Lana Wachowski', bio: 'American filmmaker.', birth: '1965' }
    },
    {
      _id: '3',
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, and others intertwine.',
      imageUrl: 'https://via.placeholder.com/150',
      genre: { name: 'Crime', description: 'Dark and suspenseful' },
      director: { name: 'Quentin Tarantino', bio: 'American film director.', birth: '1963' }
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
  }

  return (
    <div className="main-view">
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} onMovieClick={setSelectedMovie} />
      ))}
    </div>
  );
};
