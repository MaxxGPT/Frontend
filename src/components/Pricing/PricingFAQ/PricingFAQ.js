import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';


import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({

    root: {
        padding: "10px 10px 20px 5px"
    },
    container: {
        maxWidth: "80%",
        margin: "auto",
        marginTop: 24
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: "10px",
        [theme.breakpoints.down("xs")]: {
            fontSize: 15,
            textAlign: "left"
        }
    },
    subHeading: {
        fontSize: 16,
        color: "#999999",
        maxWidth: "50%",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "95%",
            fontSize: 12
        }
    },
    questionButtonStyle: {
        "&:focus": {
            outline: "none !important"
        }
    }
}));


const PricingFAQ = props => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Accordion className={classes.root}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{props.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.subHeading}>{props.answer}</Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
export default PricingFAQ