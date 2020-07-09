import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dashboard from "./dashboard/Dashboard";

const styles = theme => ({
    button: {
        margin: theme.spacing(1)
    },
    input: {
        display: "none"
    }
});

const FlatButtons = props => {
    return (
        <Dashboard />
    );
};

FlatButtons.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FlatButtons);
