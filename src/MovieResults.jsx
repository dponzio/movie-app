import React from 'react';

export default function MovieResults({ movie, setActor }) {
  return (
    <div>
      You have selected {movie}
      <button
        onClick={() => {
          setActor('Keanu Reeves');
        }}
      >
        Push me
      </button>
    </div>
  );
}
