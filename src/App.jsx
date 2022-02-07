import * as React from 'react';
import './App.css';
import ArtistCard from './Card';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function App() {
  // Using grid layouts: https://www.youtube.com/watch?v=GYTN5JdkLSQ&ab_channel=TheNetNinja
  return (
    <div className="App">
      <Grid container>
        <Grid item md={2}>
          <Paper>
            <ArtistCard />
          </Paper>
        </Grid>
        <Grid item md={2}>
          <Paper>
            <ArtistCard />
          </Paper>
        </Grid>
        <Grid item md={2}>
          <Paper>
            <ArtistCard />
          </Paper>
        </Grid>
        <Grid item md={2}>
          <Paper>
            <ArtistCard />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
