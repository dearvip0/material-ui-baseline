import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0),
    },
}));
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const BlogFooter = (props) => {
    const classes = useStyles();
    const { description, title } = props;
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg" >
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p">
                    {description}
                </Typography>
                <Copyright />
            </Container>
        </footer>
    )
};
export default BlogFooter
