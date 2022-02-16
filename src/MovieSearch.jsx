import React from 'react';

function MovieSearch({ setMovie }) {
  const onSubmit = (event) => {
    event.preventDefault();
    setMovie('The Matrix');
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Search for an actor" />
    </form>
  );
}

export default MovieSearch;
