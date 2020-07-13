import React from 'react'
import { makeStyles, Grid, Divider, Typography } from '@material-ui/core'
import Markdown from './Markdown';
import PropStyles from "prop-types";
const useStyles = makeStyles(theme => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(2),
    }
}));
const Main = (props) => {
    const classes = useStyles();
    const { posts, title } = props;
    return (
        <Grid item xs={11} md={8}>
            <Typography variant="h6" guiterBottom>
                {title}
                <Divider />
                {posts.map((post) => (
                    <Markdown className={classes.markdown} key={post.substring(0, 40)} >{post}</Markdown>
                ))}
            </Typography>
        </Grid>
    );
}
Main.propTypes = {
    posts: PropStyles.array,
    title: PropStyles.string,
};
export default Main
