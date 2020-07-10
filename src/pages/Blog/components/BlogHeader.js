import React from 'react'
import { Toolbar, makeStyles, Button, Typography, IconButton } from '@material-ui/core';
import { Search as SearchIcon } from "@material-ui/icons";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const useStyle = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

const BlogHeader = (props) => {
    const classes = useStyle();
    const { sections, title } = props;
    return (

        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Button size="small">Subscribe</Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small">
                    Sign up
        </Button>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                className={classes.toolbarSecondary}
            >
                {sections.map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.url}
                        className={classes.toolbarLink}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}
BlogHeader.prototype = {
    sections: PropTypes.array,
    title: PropTypes.string,
}
export default BlogHeader
