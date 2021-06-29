import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer';
import { Grid, Box, Typography, Switch, ButtonBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PricingFAQ from './PricingFAQ/PricingFAQ';
import './pricing.css';

import PricePlanCard from './PricingCard/PricingCard';
import PricingFeature from './PricingFeature/PricingFeature';


import FeatureImage1 from '../../assets/images/feature-image-1.png';
import FeatureImage2 from '../../assets/images/feature-image-2.png';
import FeatureImage3 from '../../assets/images/feature-image-3.png';
import FeatureImage4 from '../../assets/images/feature-image-4.png';

import NetFlix from '../../assets/images/netflix.png';
import AirBnb from '../../assets/images/airbnb.png';
import FitBit from '../../assets/images/fitbit.png';
import Google from '../../assets/images/google.png';
import Uber from '../../assets/images/uber.png';

import Wave from '../../assets/images/Wave.png';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import QuestionImage from '../../assets/images/question-image.png';
import CombinedShapeBottom from '../../assets/images/Combined Shape-bottom.png';
import CombinedShapeTop from '../../assets/images/shape-top.png';

const styles = theme => ({
    pricingPlanHeroTextContainer: {
        paddingTop: 150,
        [theme.breakpoints.down("sm")]: {
            paddingTop: 20,
        }
    },
    pricingPlanHeroText: {
        fontWeight: "bold",
        fontSize: "72px",
        textAlign: "center",
        color: "white",
        marginBottom: 10,
        [theme.breakpoints.down("xs")]: {
            fontSize: "35px",
        }
    },
    pricingPlanHeroLongText: {
        fontSize: "19px",
        textAlign: "center",
        color: "#FFFFFF",
        maxWidth: "50%",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "90%",
            fontSize: 13
        },
        margin: "auto"
    },
    pricingPlanSwitchLabel: {
        fontWeight: "bold",
        fontSize: 16,
        marginRight: 5
    },
    pricingPlanCardContainer: {
        marginTop: -160,
        maxWidth: "80%",
        margin: "auto"

    },
    subscriptionPlanContainer: {
        position: "relative",
        marginTop: "2%",
        maxWidth: "40%",
        margin: "auto",
        marginBottom: 80,
        [theme.breakpoints.down("md")]: {
            maxWidth: "70%",
        }
    },

    pricingPlanAllFeaturesButton: {
        background: "#FDDE69",
        minWidth: 200,
        minHeight: 60
    },
    pricingPlanRectangle: {
        position: "absolute",
        bottom: 20,
        right: 45,
    },
    pricingPlanAllFeaturesButtonTitle: {
        fontWeight: "bolder"
    },
    pricingPlanRectangleForSubscription: {
        position: "absolute",
        top: 50,
        left: 45,
    },
    featureBoxContainer: {
        maxWidth: "80%",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "100%",
        }
    },
    subscriptionPlanFeaturesHeroTextContainer: {
        maxWidth: "35%",
        [theme.breakpoints.down("md")]: {
            maxWidth: "80%",
            textAlign: "left"
        }
    },
    subscriptionPlanFeaturesHeroText: {
        fontWeight: "bold",
        fontSize: 52,
        [theme.breakpoints.down("md")]: {
            fontSize: 35,
        },
        zIndex: 99999,
    },
    QuestionImageContainer: {
        position: "absolute",
        left: -70,
        [theme.breakpoints.down("md")]: {
            position: "relative",
            left: 0

        }
    },
    questionImage: {
        marginTop: 100,
        [theme.breakpoints.down("md")]: {
            width: "95%",
            height: "95%",
            marginLeft: "70%",
            marginTop: -30,
            borderRadius: 20
        },
        [theme.breakpoints.down("sm")]: {
            width: "95%",
            height: "95%",
            marginLeft: "35%",
            marginTop: -30,
            borderRadius: 20
        },
        [theme.breakpoints.down("xs")]: {
            width: "95%",
            height: "95%",
            marginLeft: "2.5%",
            marginTop: -30,
            borderRadius: 20
        },
    },
    pricingplanMoreQuestionHeroBox: {
        marginTop: "20%",
        marginLeft: "15%",
        color: "white",
        [theme.breakpoints.down("md")]: {
            marginTop: "10%",
            marginLeft: "25%",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "10%",
            marginLeft: "15%",
        },
    },
    moreQuestionTitle: {
        maxWidth: "60%",
        fontWeight: "bold"
    },
    moreQuestionDescription: {
        maxWidth: "80%",
        fontSize: 24,
        marginTop: 15
    },
    moreQuestionIconTitle: {
        fontSize: 18,
        marginLeft: 13
    },
    weHelpedContainer: {
        background: "rgba(61, 52, 210, 0.04)",
        minHeight: 500,
    },
    waveTextContainer: {
        maxWidth: "60%",
        marginLeft: "10%",
        textAlign: "left"
    },
    waveTitle: {
        fontWeight: "bold",
        fontSize: 52,
        [theme.breakpoints.down("sm")]: {
            fontSize: 40
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 30
        },
    },
    appLogoContainer: {
        marginTop: 30,
        maxWidth: "90%",
        margin: "auto"
    },
    otherAppsLogoImages: {
        marginLeft: 30
    },
    getQuoteButton: {
        background: "#03004D",
        borderRadius: "10px",
        minWidth: 200,
        minHeight: 30,
        [theme.breakpoints.down("md")]: {
            marginTop: "2%",
            marginLeft: "5%"
        },
    },
    getQuoteButtonTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
});

const PricingPlanSwitch = withStyles((theme) => ({
    root: {
        width: 48,
        height: 26,
        borderRadius: 48,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 5,
        color: "green",
        '&$checked': {
            transform: 'translateX(22px)',
            color: "green",
            '& + $track': {
                opacity: 1,
                backgroundColor: "white",
                borderColor: "white",
            },
        },
    },
    thumb: {
        width: 15,
        height: 15,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid lightgrey`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: "white",
    },
    checked: {},
}))(Switch);

class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            basicList: [
                { title: "Single project use" },
                { title: "Basic Dashboard" },
            ],
            essentialList: [
                { title: "Unlimited project use" },
                { title: "Advanced dashboard" },
                { title: "All components included" },
                { title: "Advanced insight" },
            ],
            premiumList: [
                { title: "Unlimited project use" },
                { title: "Advanced Dashboard" },
                { title: "Mutlivariate components" },
                { title: "Phone Support" },
                { title: "Guaranteed 100% uptime" },
                { title: "Unlimited users" },
            ],
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <Box>
                <Box className="PricingPlanHeaderContainer">
                    <Header />
                    <Grid direction="column">
                        <Box className={classes.pricingPlanHeroTextContainer}>
                            <Typography className={classes.pricingPlanHeroText}>
                                Our pricing plan made simple.
                        </Typography>
                            <Typography className={classes.pricingPlanHeroLongText}>
                                All types of businesses need access to development resources, so we give you the option to decide how much you need to use.
                        </Typography>
                            <Box color="white" mt={3} maxWidth="96%" margin="auto">
                                <Grid container justify="center" alignItems="center" spacing={3}>
                                    <Typography className={classes.pricingPlanSwitchLabel} >Monthly</Typography>
                                    <Grid item>
                                        <PricingPlanSwitch checked={this.state.checked} onChange={() => this.setState({ checked: !this.state.checked })} />
                                    </Grid>
                                    <Typography className={classes.pricingPlanSwitchLabel} >Annualy</Typography>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
                <Grid container item justify="center" className={classes.pricingPlanCardContainer}>
                    <Grid item xs={12} md={4} >
                        <PricePlanCard
                            amount={0}
                            amountColor="#000000"
                            time="month"
                            title="Free Forever"
                            description="All the basics for businesses that are just getting started."
                            buttonLabel="Get standard"
                            listItem={this.state.basicList}
                            height={400}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PricePlanCard
                            amount={99}
                            amountColor="#01C48D"
                            time="month"
                            title="Developer"
                            description="Better for growing businesses that want more customers."
                            buttonLabel="Get essential"
                            listItem={this.state.essentialList}
                            btnBgColor="#03004D"
                            height={460}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PricePlanCard
                            amount={339}
                            amountColor="#3D34D2"
                            time="month"
                            title="Enterprise"
                            description="Advanced features for pros who need more customization."
                            buttonLabel="Get premium"
                            listItem={this.state.premiumList}
                            height={700}
                        />
                    </Grid>
                </Grid>
                <Box className={classes.subscriptionPlanContainer}>
                    <Typography align="center" className={classes.subscriptionPlanFeaturesHeroText}>All subscription plans include
                    <span style={{ borderBottom: "3px solid orange" }}> these features</span> </Typography>
                </Box>
                <Box className={classes.featureBoxContainer} margin="auto">
                    <Grid container justify="center">
                        <Grid item direction="column" sm={12} md={6} justify="center">
                            <PricingFeature
                                title="Feature 1"
                                description="Materials, education and campaigns to help you share with current and future clients."
                                image={FeatureImage1}
                            />
                            <PricingFeature
                                title="Feature 3"
                                description="Materials, education and campaigns to help you share with current and future clients."
                                image={FeatureImage3}
                            />
                        </Grid>
                        <Grid item direction="column" sm={12} md={6}>
                            <PricingFeature
                                title="Feature 2"
                                description="Materials, education and campaigns to help you share with current and future clients."
                                image={FeatureImage2}
                            />
                            <PricingFeature
                                title="Feature 4"
                                description="Materials, education and campaigns to help you share with current and future clients."
                                image={FeatureImage4}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={5} mb={10}>
                    <Grid container item justify="center">
                        <ButtonBase className={classes.pricingPlanAllFeaturesButton}>
                            <Typography className={classes.pricingPlanAllFeaturesButtonTitle}>All features</Typography>
                        </ButtonBase>
                    </Grid>
                </Box>
                <Box mb={7} className={classes.subscriptionPlanFeaturesHeroTextContainer} margin="auto" position="relative">
                    <Typography align="center" className={classes.subscriptionPlanFeaturesHeroText}>
                        <span style={{ borderBottom: "3px solid orange" }}>Some questions </span>
                         they ask us often
                        </Typography>
                </Box>
                <Box mb={20} position="realtive">
                    <img
                        src={CombinedShapeTop}
                        alt="Combined Shape Bottom"
                        style={{ marginLeft: "8%" }}
                    />
                    <PricingFAQ
                        question="How do I pay for the Essentials or Premium plan?"
                        answer="You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle."
                    />
                    <PricingFAQ
                        question="Can I cancel my Essentials or Premium plan subscription at any time?"
                    />
                    <PricingFAQ
                        question="We need to add new users to our team. How will that be billed?"
                    />
                    <PricingFAQ
                        question="My team wants to cancel its subscription. How do we do that? Can we get a refund?"
                    />
                    <PricingFAQ
                        question="Do you offer discounts for non-profit organizations or educational institutions?"
                    />
                    <img
                        src={CombinedShapeBottom}
                        alt="Combined Shape Bottom"
                        style={{ marginLeft: "30%" }}
                    />
                </Box>
                <Box className="pricingPlanMoreQuestionImageBg">
                    <Grid container>
                        <Grid item lg={4}>
                            <Box className={classes.QuestionImageContainer}>
                                <img
                                    src={QuestionImage}
                                    className={classes.questionImage}
                                    alt="QuestionImage"

                                />
                            </Box>
                        </Grid>
                        <Grid item lg={8} justify="center">
                            <Box className={classes.pricingplanMoreQuestionHeroBox}>
                                <Typography variant="h2" className={classes.moreQuestionTitle}>Still have any questions?</Typography>
                                <Typography className={classes.moreQuestionDescription}>
                                    If you cannot find answer to your question in our FAQ, you can always contact us. We wil answer to you shortly!
                                </Typography>
                                <Box mt={3} bre>
                                    <Grid container direction="column">
                                        <Box>
                                            <Grid container alignItems="center">
                                                <PhoneInTalkIcon />
                                                <Typography className={classes.moreQuestionIconTitle}>support@asatera.com</Typography>
                                            </Grid>
                                        </Box>
                                        <Box mt={2}>
                                            <Grid container alignItems="center">
                                                <EmailOutlinedIcon />
                                                <Typography className={classes.moreQuestionIconTitle}>+1 (2345) 678-90-12</Typography>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={5}>
                    <img
                        src={Wave}
                        alt="wave"
                        style={{ width: "100%" }}
                    />
                </Box>
                <Box className={classes.weHelpedContainer}>
                    <Box className={classes.waveTextContainer}>
                        <Typography className={classes.waveTitle}>Through the years we helped a lot of companies. Are you ready to become our partner?</Typography>
                    </Box>
                    <Grid container justify="space-between" alignItems="center" className={classes.appLogoContainer}>
                        <Box ml={6}>
                            <img
                                src={NetFlix}
                                className={classes.otherAppsLogoImages}
                                alt="NetFlix"
                            />
                            <img
                                src={AirBnb}
                                className={classes.otherAppsLogoImages}
                                alt="Airbnb"
                            />
                            <img
                                src={FitBit}
                                className={classes.otherAppsLogoImages}
                                alt="Fitbit"
                            />
                            <img
                                src={Google}
                                className={classes.otherAppsLogoImages}
                                alt="Google"
                            />
                            <img
                                src={Uber}
                                className={classes.otherAppsLogoImages}
                                alt="Uber"
                            />
                        </Box>
                        <ButtonBase className={classes.getQuoteButton}>
                            <Typography className={classes.getQuoteButtonTitle}>Get a free quote</Typography>
                        </ButtonBase>
                    </Grid>
                </Box>
                <Footer />
            </Box>
        );
    }
}

export default withStyles(styles)(Pricing);
