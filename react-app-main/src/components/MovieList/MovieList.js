import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, addToCart, removeFromCart } from '../../redux/slices/moviesSlice';
import SearchBar from '../SearchBar/SearchBar';
import AddedMovies from '../AddedMovies/AddedMovies';
import './movieList.css';

function MovieList() {
  const dispatch = useDispatch();
  const { movies, cart, notFound, searchText } = useSelector((state) => state.movies);

  useEffect(() => {
    if (searchText) {
      dispatch(fetchMovies(searchText));
    }
  }, [dispatch, searchText]);

  const handleSearch = (text) => {
    const trimmedText = text.trim();
    dispatch(fetchMovies(trimmedText));
  };

  return (
    <div className="movies-container">
      <div>
        <SearchBar onSearch={handleSearch} />
        {notFound ? (
          <div className="not-found-message">Not Found</div>
        ) : (
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <div>
                <h2 className='movie-title'>{movie.Title} ({movie.Year})</h2>
                <img className='movie-poster' src={movie.Poster} alt={movie.Title} />
              </div>
              <div>
                <button className='add-button' onClick={() => dispatch(addToCart(movie))}>ADD TO LIST</button>
                <br />
                <button className='imdb-button' onClick={() => window.open(`https://www.imdb.com/title/${movie.imdbID}`, '_blank')}>GO TO IMDB</button>
              </div>
            </div>
          ))
        )}
      </div>
      <AddedMovies cart={cart} removeFromCart={(movie) => dispatch(removeFromCart(movie))} />
    </div>
  );
}

export default MovieList;
