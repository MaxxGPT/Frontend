import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';

import Tick from '../../../assets/images/tick.png';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: 15
    },
    pricingPlanListIcon: {
        width: "10%",
        marginRight: 5
    },
    pricingPlanListItem: {
        fontSize: 16,
        marginLeft: 4
    }
}));


const PricingPlanListItem = props => {
    const classes = useStyles();
    return (
        <Grid container item justify="flex-start" alignItems="center" className={classes.root}>
            <img
                src={Tick}
                alt="Tick"
                className={classes.pricingPlanListIcon}
            />
            <Typography className={classes.pricingPlanListItem}>{props.title}</Typography>
        </Grid>
    )
}
export default PricingPlanListItem