import * as React from 'react';
import ActorResults from './ActorResults';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@mui/material/Grid';
import MovieSearch from './MovieSearch';
import MovieResults from './MovieResults';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { useFetch } from './hooks/useFetch';

const styles = (theme) => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

function App({ classes }) {
  const [movie, setMovie] = React.useState(null);
  const [actor, setActor] = React.useState(null);
  const [data, loading] = useFetch(
    'https://api.themoviedb.org/3/person/1136406/movie_credits?api_key=0fc84c560b8494a92b6da05ace76f427&language=en-US'
  );

  return (
    <div className="App">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Movie App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        {/* <div>{loading && <div>I'm loading!!!</div>}</div> */}
        {/* <div>{data && <div>{JSON.stringify(data)}</div>}</div> */}
        <MovieSearch setMovie={setMovie} />
        {movie && <MovieResults movie={movie} setActor={setActor} />}
        {actor && <ActorResults actor={actor} />}
      </Grid>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </div>
  );
}

export default withStyles(styles)(App);
