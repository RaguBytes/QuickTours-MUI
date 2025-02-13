/* eslint-disable react/prop-types */
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const TourCard = ({imageSrc, contentText, starValue, cardTitle, cardAlt}) => {
  return (
    <Card sx={{ maxWidth: 700, marginBottom:'20px' }}>
        <CardHeader title={cardTitle} />
        <CardMedia component="img" height="194" image={imageSrc} alt={cardAlt} />
        <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               {contentText}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
            <Rating name="simple-controlled" value={starValue} />
        </CardActions>
  </Card>
  )
}

export default TourCard