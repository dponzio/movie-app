import React from 'react';
import ArtistCard from './Card';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import { MovieCreation } from '@mui/icons-material';
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

function Movie({ classes, movie }) {
  const movieId = '245891';

  const [data, loading] = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=0fc84c560b8494a92b6da05ace76f427&language=en-US`
  );

  const [cast, castLoading] = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0fc84c560b8494a92b6da05ace76f427&language=en-US`
  );

  // Get alternative images for artist
  // https://api.themoviedb.org/3/person/6384/images?api_key=0fc84c560b8494a92b6da05ace76f427

  console.log(cast);

  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        {data && (
          <main>
            {/* Hero unit */}
            <div className={classes.heroUnit}>
              <div className={classes.heroContent}>
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  {data.original_title}
                </Typography>
                <Card style={{ border: 'none', boxShadow: 'none' }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={`https://www.themoviedb.org/t/p/w1280${data.poster_path}`}
                    alt="Movie Banner"
                  />
                  <br />
                </Card>
                <Typography
                  variant="h6"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  {data.overview}
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={10} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary">
                        First Button
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Another button
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Third button
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
            <div className={classNames(classes.layout, classes.cardGrid)}>
              {/* End hero unit */}
              {cast && (
                <Grid container spacing={8}>
                  {cast.cast.map((card) => (
                    <Grid item key={card.id} sm={6} md={4} lg={3}>
                      <ArtistCard artist={card} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </div>
          </main>
        )}
      </div>
    </React.Fragment>
  );
}

Movie.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Movie);
