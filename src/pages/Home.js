import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
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
