import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, ButtonBase, Typography, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import OvalSmall from '../../assets/images/Oval-small.png';
import { request } from "../../services/Request";
import MenuIcon from '@material-ui/icons/Menu';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    pricingPlanMenuItem: {
        color: "white",
        marginRight: 25,
        marginTop: 10,
        '&:focus': {
            outline: "none !important"
        }
    },
    rightSideMenuIcon: {
        '&:focus': {
            outline: "none !important"
        },
        color: "white"
    },
    pricingPlanMenuItemTitle: {
        fontSize: 18
    },
    pricingPlanSignUpButton: {
        background: "#FDBC2A",
        borderRadius: 10,
        minWidth: 100,
        minHeight: 40
    },
    pricingPlanSignUpButtonTitle: {
        color: "#000000",
        fontWeight: "bold"
    },
    pricingPlanHeaderOval: {
        position: "absolute",
        top: 0,
        left: 0,
        [theme.breakpoints.down("xs")]: {
            width: 150,
        }
    },
    headerLogo: {
        [theme.breakpoints.down("xs")]: {
            width: 100,
        }
    },
    pricingPlanHeaderOvalSmall: {
        position: "absolute",
        top: 150,
        right: 220,
        [theme.breakpoints.down("xs")]: {
            top: 50,
            right: 50,
        }
    },
    rightSideNavContainer: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    rightSideMenuContainer: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    headerBalanceContainer: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    mobileVewNav: {
        position: "absolute",
        top: "14%",
        width: "100%",
        zIndex: 99
    },

}));

const Header = props => {
    const classes = useStyles();
    const history = useHistory();
    const [isLogin, setLogin] = useState(false);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        request("/api/users/me", { noRedirect: true }).then((result) => {
            if (result.data) {
                setLogin(true);
            }
        });
    });

    return (
        <Box>
            <Grid container alignItems="center">
                <Grid container item md={3} xs={3}>
                    <Box m={3}>
                        <a href="/">
                            <img
                                src={Logo}
                                className={classes.headerLogo}
                                alt="Logo"
                            />
                        </a>
                    </Box>
                </Grid>
                <Grid className={classes.headerBalanceContainer} container item md={4} sm={false} xs={false}></Grid>
                {open &&
                    <Box boxShadow={3} bgcolor="white" pl={3} className={classes.mobileVewNav}>
                        <List component="nav" aria-label="mobile view nav">
                            <ListItem button component="a" href="/pricing">
                                <ListItemText primary="Pricing" />
                            </ListItem>
                            <ListItem button component="a" href="/developers">
                                <ListItemText primary="Developer" />
                            </ListItem>
                            <ListItem button component="a" href="/register">
                                <ListItemText primary="Sign Up" />
                            </ListItem>
                            <ListItem button component="a" href="/login">
                                <ListItemText primary="Sign In" />
                            </ListItem>
                        </List>
                    </Box>
                }
                <Grid container item md={5} sm={9} xs={9} alignItems="center" justify="flex-end">
                    <Box className={classes.rightSideMenuContainer} mr={4}>
                        <IconButton className={classes.rightSideMenuIcon} onClick={() => setOpen(!open)}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Grid container alignItems="center" className={classes.rightSideNavContainer}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={10} className={classes.pricingPlanMenuContainer}>
                            <Grid container alignItems="center">
                                <ButtonBase
                                    onClick={() => history.push("/Pricing")}
                                    className={classes.pricingPlanMenuItem}>
                                    <Typography className={classes.pricingPlanMenuItemTitle}>Pricing</Typography>
                                </ButtonBase>
                                <ButtonBase
                                    onClick={() => history.push("/developers")}
                                    className={classes.pricingPlanMenuItem}>
                                    <Typography className={classes.pricingPlanMenuItemTitle}>Developer</Typography>
                                </ButtonBase>
                                <ButtonBase
                                    onClick={() => isLogin ? history.push("/dashboard") : history.push("/login")}
                                    style={isLogin ? {padding:"0px 15px"}: {padding:"0px 0px"}}
                                    className={`${classes.pricingPlanMenuItem} ${isLogin && classes.pricingPlanSignUpButton}`} 
                                    >
                                        
                                    <Typography className={isLogin ? classes.pricingPlanSignUpButtonTitle : classes.pricePlanMenuItemTitle}>{isLogin ? "test@asatera.com" : "Login"}</Typography>
                                </ButtonBase>
                                {!isLogin &&
                                    <ButtonBase
                                        onClick={() => history.push("/register")}
                                        className={`${classes.pricingPlanMenuItem} ${classes.pricingPlanSignUpButton}`}
                                        style= {{ padding : "0px 15px"}}>
                                        <Typography className={classes.pricingPlanSignUpButtonTitle}>Get API Key</Typography>
                                    </ButtonBase>
                                }
                            </Grid>
                            <img
                                className={classes.pricingPlanHeaderOvalSmall}
                                src={OvalSmall}
                                alt="Oval Small Right"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    );
}

export default Header;