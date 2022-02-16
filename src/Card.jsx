import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  // eslint-disable-next-line no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ArtistCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
	<Card sx={{ maxWidth: 345 }}>
		<CardHeader
		// avatar={
		// 	<Avatar sx={{ bgcolor: red[500] }} aria-label="artist card">
		// 	R
		// 	</Avatar>
		// }
		action={
			<IconButton aria-label="settings">
			<MoreVertIcon />
			</IconButton>
		}
		subheader="Artist Name"
		/>
		<CardMedia
		component="img"
		height="194"
		image="https://media.npr.org/assets/artslife/movies/2009/08/cold-souls/giamatti-4508e94c2609b7fda149bcf93c4ab2103b504ee3-s1100-c50.jpg"
		alt="Artist name"
		/>
		<CardContent>
		<Typography variant="body" color="text.secondary" fontWeight='fontWeightSmall'>
			Top 3 movies they've been in.
		</Typography>
		</CardContent>
		<CardActions disableSpacing>
		<IconButton aria-label="add to favorites">
			<FavoriteIcon />
		</IconButton>
		<IconButton aria-label="share">
			<ShareIcon />
		</IconButton>
		<ExpandMore
			expand={expanded}
			onClick={handleExpandClick}
			aria-expanded={expanded}
			aria-label="show more"
		>
			<ExpandMoreIcon />
		</ExpandMore>
		</CardActions>
		<Collapse in={expanded} timeout="auto" unmountOnExit>
		<CardContent>
			<Typography paragraph variant="body">Bio:</Typography>
			<Typography paragraph variant="body">
			Quick bio could go here
			</Typography>
		</CardContent>
		</Collapse>
	</Card>
  );
}

export default ArtistCard;