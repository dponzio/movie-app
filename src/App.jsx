import * as React from 'react';
import Grid from '@mui/material/Grid';
import MovieSearch from './MovieSearch';
import MovieResults from './MovieResults';
import ActorResults from './ActorResults';
import { useFetch } from './hooks/useFetch';

function App() {
  const [movie, setMovie] = React.useState(null);
  const [actor, setActor] = React.useState(null);
  const [data, loading] = useFetch(
    'https://api.themoviedb.org/3/person/1136406/movie_credits?api_key=0fc84c560b8494a92b6da05ace76f427&language=en-US'
  );

  return (
    <div className="App">
      <Grid container>
        <div>{loading && <div>I'm loading!!!</div>}</div>
        <div>{data && <div>{JSON.stringify(data)}</div>}</div>
        <MovieSearch setMovie={setMovie} />
        {movie && <MovieResults movie={movie} setActor={setActor} />}
        {actor && <ActorResults actor={actor} />}
      </Grid>
    </div>
  );
}

export default App;
