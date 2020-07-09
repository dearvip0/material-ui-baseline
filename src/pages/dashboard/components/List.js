import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Typography from '@material-ui/core/Typography';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from "@material-ui/core";
import {
    Assignment as AssignmentIcon,
    Dashboard as DashboardIcon,
    BarChart as BarChartIcon,
    Layers as LayersIcon,
    People as PeopleIcon,
    ShoppingCart as ShoppingCartIcon,
    ExpandLess,
    ExpandMore,
} from "@material-ui/icons";

const breadcrumbNameMap = {
    "/Dashboard": "Dashboard",
    "/Customers": "Customers",
    "/Reports": "Reports",
};

function ListItemLink(props) {
    const { icon, to, open, ...orther } = props;
    const primary = breadcrumbNameMap[to];
    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}
function MyListItemIcon(props) {
    const { icon, primary, to, open, ...orther } = props;
    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
        [to],
    );
    return (
        <ListItem button component={renderLink}>
            {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
            <ListItemText primary={primary} />
            {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
        </ListItem>
    );
}
MyListItemIcon.propTypes = {
    icon: PropTypes.element,
    open: PropTypes.bool,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}
ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
    root: {
        width: 360,
    },
});

export default function ListRouter() {
    const classes = useStyles();

    return (
        <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
            <div className={classes.root}>
                <Route>
                    {({ location }) => (
                        <Typography gutterBottom>Current route: {location.pathname}</Typography>
                    )}
                </Route>
                <Paper elevation={0}>
                    <List>
                        <MyListItemIcon to="/Dashboard" primary="Dashboard" icon={<DashboardIcon />} />
                        <MyListItemIcon to="/Customers" primary="Customers" icon={<PeopleIcon />} />
                        <MyListItemIcon to="/Reports" primary="Reports" icon={<BarChartIcon />} />
                    </List>
                    <Divider />
                    <List aria-label="main mailbox folders">
                        <ListItemLink to="/inbox" primary="Inbox" icon={<InboxIcon />} />
                        <ListItemLink to="/drafts" primary="Drafts" icon={<DraftsIcon />} />
                    </List>
                    <Divider />
                </Paper>
            </div>
        </MemoryRouter>
    );
}
