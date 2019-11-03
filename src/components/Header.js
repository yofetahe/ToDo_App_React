import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

const Header = () => {

    const classes = useStyles();

    return (
        // <nav>
        //     <div className="nav-wrapper container">
        //         <a href="#!" className="brand-logo">To Do List</a>
        //         <ul className="right hide-on-med-and-down">
        //             {/* <li><a href="sass.html"><i className="material-icons left">search</i>Link with Left Icon</a></li> */}
        //             {/* <li><a href="badges.html"><i className="material-icons right">view_module</i>Link with Right Icon</a></li> */}
        //         </ul>
        //     </div>
        // </nav>

        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    To-Do Management
                </Typography>
                {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;