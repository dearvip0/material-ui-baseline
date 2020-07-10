import React from 'react';
import { makeStyles, Grid, CardActionArea, Card, CardContent, Typography, Hidden, CardMedia } from '@material-ui/core';
import PropStyles from "prop-types";
const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
}));
const FeaturedPost = (props) => {
    const classes = useStyles();
    const { post } = props;
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
              </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia
                            className={classes.cardMedia}
                            image={post.image}
                            title={post.imageTitle}
                        />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    )
}
FeaturedPost.propTypes = {
    post: PropStyles.object,
};
export default FeaturedPost
