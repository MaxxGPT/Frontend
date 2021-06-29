import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: 20
        }
    },
    contentContainer: {
        marginLeft: 10,

        [theme.breakpoints.down("md")]: {
            marginLeft: 40
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 40
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: 40
        }
    },
    featureTitle: {
        fontSize: 24,
        marginTop: 10,
        fontWeight: "bold",

    },
    featureDescription: {
        color: "#999999",
        marginTop: 10,
        fontSize: 15,
        maxWidth: "80%"
    }
}));


const PricingPlanFeature = props => {
    const classes = useStyles();
    return (
        <Box mb={5} className={classes.container}>
            <Grid container alignItems="center" justify="center">
                <Grid item xs={2}>
                    <img
                        src={props.image}
                        alt={props.title}
                        className={classes.featureImage}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Box mt={4} className={classes.contentContainer}>
                        <Typography className={classes.featureTitle}>{props.title}</Typography>
                        <Typography className={classes.featureDescription}>{props.description}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default PricingPlanFeature