import * as React from 'react';
import Grid from '@mui/material/Grid';
import MovieSearch from './MovieSearch';
import MovieResults from './MovieResults';
import ActorResults from './ActorResults';

function App() {
  const [movie, setMovie] = React.useState(null);
  const [actor, setActor] = React.useState(null);

  return (
    <div className="App">
      <Grid container>
        <MovieSearch setMovie={setMovie} />
        {movie && <MovieResults movie={movie} setActor={setActor} />}
        {actor && <ActorResults actor={actor} />}
      </Grid>
    </div>
  );
}

export default App;
