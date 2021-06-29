import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, Divider, ButtonBase } from '@material-ui/core';

import PricingPlanListItem from '../PricingPlanListItem/PricingPlanListItem';

const useStyles = makeStyles(theme => ({
    pricingPlanBoxContainer: props => ({
        borderRadius: 12,
        margin: "0 10px",
        background: " #FFFFFF",
        boxShadow: " 0px 10px 10px rgba(3, 0, 77, 0.04)",
        border: "1px solid lightgrey",
        maxWidth: 270,
        maxHeight: props.height + "px",
        [theme.breakpoints.down("md")]: {
            maxWidth: "auto",
            maxHeight: (props.height + 30) + "px",
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: "25%"
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: "15%"
        },
        zIndex: 999,
        marginBottom: 15
    }),
    pricingPlainInnerBox: {
    },
    pricingPlanAmount: props => ({
        fontWeight: "bold",
        fontSize: 40,
        color: props.amountColor
    }),
    pricingPlanAmountTime: {
        color: "#999999",
        fontSize: 16
    },
    pricingPlanOfferTitle: {
        fontSize: 30,
        fontWeight: "bold",
    },
    pricingPlanOfferDescription: {
        color: "#999999",
        fontSize: 16,

    },
    pricingPlanButtonStyle: props => ({
        border: "1px solid #03004D",
        color: props.btnBgColor ? "white" : "#03004D",
        padding: "10px 20px",
        width: 220,
        background: "#FFFFFF",
        boxShadow: " 0px 20px 40px rgba(3, 0, 77, 0.04)",
        borderRadius: 12,
        backgroundColor: props.btnBgColor || "transparent",
        [theme.breakpoints.down("md")]: {
            maxWidth: 200,
        },
    })
}));


const PricingCard = props => {
    const classes = useStyles(props);
    return (
        <Box p={3} bgcolor="white" className={classes.pricingPlanBoxContainer}>
            <Box className={classes.pricingPlainInnerBox}>
                <Typography className={classes.pricingPlanAmount}>${props.amount}
                    <Typography className={classes.pricingPlanAmountTime} component="span">/{props.time}</Typography>
                </Typography>
                <Typography className={classes.pricingPlanOfferTitle}>{props.title}</Typography>
                <Typography className={classes.pricingPlanOfferDescription}>
                    {props.description}
                </Typography>
                <Box mt={2} mb={2}>
                    <Divider />
                </Box>
                <Box>
                    <Grid container direction="column">
                        {props.listItem.map((l, i) => (
                            <PricingPlanListItem title={l.title} />
                        ))}
                    </Grid>
                </Box>
                <Box mt={3}>
                    <ButtonBase className={classes.pricingPlanButtonStyle}>
                        <Typography>{props.buttonLabel}</Typography>
                    </ButtonBase>
                </Box>
            </Box>
        </Box>
    )
}
export default PricingCard;