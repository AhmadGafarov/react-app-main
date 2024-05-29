import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveList } from '../../redux/slices/savedListsSlice';
import "./addedMovies.css";

const AddedMovies = ({ cart, removeFromCart }) => {
  const [listName, setListName] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    if (listName.trim() === '' || cart.length === 0) {
      alert('Please enter a list name or add films to the list.');
      return;
    }
    dispatch(saveList({ listName, movies: cart }));
    setListName('');
  };

  return (
    <div className='added-movies-container'>
      <input
        name='movie-input'
        type='text'
        placeholder='Create a new list'
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />
      {cart.length > 0 ? (
        cart.map((movie) => (
          <div key={movie.imdbID} className='movie-item'>
            <div>
              <h3>{movie.Title} ({movie.Year})</h3>
            </div>
            <button onClick={() => removeFromCart(movie)} className='remove-button'>x</button>
          </div>
        ))
      ) : (
        <p className='item-warning'>No movies added to the list.</p>
      )}
      <div className='action-buttons'>
        <button onClick={handleSave}>Save</button>
        <button><Link to='/saved'>Go to Basket</Link></button>
      </div>
    </div>
  );
};

export default AddedMovies;
