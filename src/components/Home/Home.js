import React from 'react'
import Header from '../Header/Header';
import Footer from "../Footer";
import MachineLearningCard from './Card/Card';
import HowWeUse from './HowWeUse/HowWeUse';
import './home.css';

import { useNavigate } from 'react-router-dom';

import HeaderHeroImage from '../../assets/images/home-hero-image.png';
import PreProcessing from '../../assets/images/home-pre-processing.png';
import Clustering from '../../assets/images/home-clustering.png';
import SentimentAnalysis from '../../assets/images/home-sentiment-analysis.png';
import HomeDotsRight from '../../assets/images/home-dots.png';
import HomeChevron from '../../assets/images/home-chevron-down.png';
import HomeDotsLeft from '../../assets/images/home-dots-left.png';
import HomeMachineOval from '../../assets/images/home-maching-oval.png';
import HomeDevelopeFirstLeft from '../../assets/images/home-developer-first.png';
import HomeDevelopeFirstSyntaxScreen from '../../assets/images/home-developer-first-code-syntax.png';
import HomeHowWeWorkTopOval from '../../assets/images/home-how-we-work-oval.png';
import DeveloperFirstSmallOval from '../../assets/images/developer-first-small-oval.png';
import DeveloperFirstLargeOval from '../../assets/images/developer-first-large-oval.png';
import HomeHowWeWorkLocation from '../../assets/images/home-how-location.png';
import HomeHowWeWorkTopics from '../../assets/images/home-how-topics.png';
import HomeHowWeWorkSantiment from '../../assets/images/home-how-santiment.png';
import HomeHowWeWorkOrginization from '../../assets/images/home-how-organization.png';
import HomeHowWeWorkPeople from '../../assets/images/home-how-people.png';
import HomeHowWeWorkFeatures from '../../assets/images/home-how-features.png';
import HomeImproving from '../../assets/images/home-improving.png';
import HomeImprovingDots from '../../assets/images/home-improving-dots.png';
import HomeKindAPI from '../../assets/images/home-kind-api.png';
import Wave from '../../assets/images/Wave.png';



import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Hidden } from '@material-ui/core';
const Home = () => {
    const history = useNavigate()
    return (
        <div>
            <header className="home__HeaderContainer">
                <Header />
                <Container fluid>
                    <Row>
                        <Col md={7} sm={12}>
                            <div className="home__leftSideContainer">
                                <h1 className="home__headerHeroTextTitle">
                                    Analyze Global <span className="home__headerHeroTextSpan">Cannabis</span> News through a Rest API
                            </h1>
                                <p className="home__headerHeroTextDescription">
                                    With over 30k news sources, from all 50 states and their cities. Articles are enhanced with metadata derived from machine learning algorithms, and updated daily.
                            </p>
                                <Button
                                    bsPrefix="home__getStarted"
                                    onClick={() => history.push("/register")}
                                >Get Started</Button>
                            </div>
                        </Col>
                        <Hidden xsDown>
                            <Col md={5}>
                                <Image
                                    src={HeaderHeroImage}
                                    alt="home-hero-image"
                                    fluid
                                    style={{ width: 600, marginTop: 50 }}
                                />
                            </Col>
                        </Hidden>
                    </Row>
                </Container>
                <Hidden smUp>
                    <img
                        src={HomeChevron}
                        alt="Chevron Down"
                        className="header__chavron_down"
                    />
                </Hidden>
            </header>
            <section className="section__machineLearning">
                <h1>Asatera REST API Machine Learning</h1>
                <h3>We use the following ML algorithms to do the following</h3>
                <div className="machineLearning__innerContainer">
                    <img
                        src={HomeDotsRight}
                        alt="dots group"
                        className="machineLearning__dotsTopLeft"
                    />
                    <img
                        src={HomeDotsLeft}
                        alt="dots group"
                        className="machineLearning__dotsBottomRight"
                    />
                    <Hidden smDown>
                        <img
                            src={HomeMachineOval}
                            alt="dost"
                            className="machineLearning__ovalBottomRight"
                        />
                    </Hidden>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <MachineLearningCard
                                    image={PreProcessing}
                                    title="Pre-processing"
                                    description="LDA & TFIDF Vectorizer for text preprocessing and topic extraction."
                                />
                            </Col>
                            <Col md={4}>
                                <MachineLearningCard
                                    image={Clustering}
                                    title="Clustering"
                                    description="Scipy’s Implementation of Hierarchical Clustering for clustering similar topics."
                                />
                            </Col>
                            <Col md={4}>
                                <MachineLearningCard
                                    image={SentimentAnalysis}
                                    title="Sentiment Analysis"
                                    description="Multinomial Naive Bayes for sentiment classification."
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section className="section__developer_first">
                <img
                    src={DeveloperFirstSmallOval}
                    alt="Oval"
                    className="section__developer_first_oval"
                />
                <img
                    src={DeveloperFirstLargeOval}
                    alt="Oval"
                    className="section__developer_first_oval"
                />
                <div className="section__developer_first_heroBoxContainer">
                    <Row>
                        <Col>
                            <Hidden mdUp>
                                <Image
                                    src={HomeDevelopeFirstLeft}
                                    alt="Developer First Pulling Code"
                                    fluid
                                />
                            </Hidden>
                        </Col>
                    </Row>
                    <h1>Developers First</h1>
                    <p>We believe the best way to analyze news at scale is through code. We strive to provide clear and concise documentation so developers can get up and running with AsaTera in just a couple of minutes.</p>
                </div>
                <Container fluid>
                    <Row>
                        <Hidden mdDown>
                            <Col md={{ span: 5, offset: 1 }}>
                                <Image
                                    src={HomeDevelopeFirstLeft}
                                    alt="Developer First Pulling Code"
                                    fluid
                                    style={{ height: "90%" }}
                                />
                            </Col>
                            <Col md={1}></Col>
                        </Hidden>
                        <Col md={5}>
                            <Image
                                src={HomeDevelopeFirstSyntaxScreen}
                                alt="Developer First Code Syntax Screen"
                                fluid
                                style={{ marginTop: 60 }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section__how_we_use">
                <div className="home__how_we_use_title_container">
                    <Hidden smDown>
                        <img
                            src={HomeHowWeWorkTopOval}
                            alt="dost"
                            className="howWeWork__ovalTopCenter"
                        />
                    </Hidden>
                    <h1>How do we we use Machine Learning To Provide Relevant Information About Articles:</h1>
                    <Container>
                        <Row sm={12}>
                            <Col lg={4}>
                                <HowWeUse
                                    image={HomeHowWeWorkLocation}
                                    title="Location"
                                    description="Down to the latitude and longitude of the exact place mentioned in the article"
                                />
                            </Col>
                            <Col lg={4}>
                                <HowWeUse
                                    image={HomeHowWeWorkTopics}
                                    title="Topics"
                                    description="Main categoires like Art & Culture, Politics & Government to Crime & Safety, plus more than 50 Subcategories"
                                />
                            </Col>
                            <Col lg={4}>
                                <HowWeUse
                                    image={HomeHowWeWorkSantiment}
                                    title="Sentiment"
                                    description="Positive, neutral and negative "
                                />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 30 }}>
                            <Col lg={4}>
                                <HowWeUse
                                    image={HomeHowWeWorkPeople}
                                    title="People"
                                    description="List of people mentioned in the article."
                                />
                            </Col>
                            <Col lg={4}>
                                <HowWeUse
                                    image={HomeHowWeWorkOrginization}
                                    title="Organization"
                                    description="List of organization mentioned in the article "
                                />
                            </Col>
                            <Col lg={4}>
                                <HowWeUse
                                    image={HomeHowWeWorkFeatures}
                                    title="iOs Apps"
                                    description="Lorem Impsum is a sample text for improving reading"
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section className="section__improving">
                <Container fluid style={{ paddingLeft: 0, marginLeft: 0 }}>
                    <Row>
                        <Col md={6} style={{ paddingRight: 0, paddingLeft: 0 }}>
                            <Image
                                src={HomeImproving}
                                alt="CONSTANTLY IMRPOVING"
                                fluid
                            />
                            <Image
                                fluid
                                src={HomeImprovingDots}
                                alt="CONSTANTLY IMRPOVING DOTS"
                                className="home__improving__dots_right_bottom"
                            />
                        </Col>
                        <Col md={5}>
                            <div className="home__improving_textContainer">
                                <h1>Constantly Improving</h1>
                            </div>
                            <Hidden smUp>
                                <h6 className="home__improving__xs__text">
                                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
                            </h6>
                            </Hidden>
                            <p>
                                AsaTera is always improving by adding new News sources. Our engineers constantly iterate every facet of the AsaTera stack.
                        </p>
                            <Button
                                bsPrefix="section__improving_readMore">
                                Read Docs
                        </Button>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Container>
            </section>
            <section className="section__kind_api">
                <Container fluid>
                    <Row>
                        <Col xs={{ span: 12, order: 2 }} md={{ span: 5, offset: 1, order: 1 }} >
                            <div className="home__kind_api_textContainer">
                                <h1>One of a Kind
                            API offering</h1>
                            </div>
                            <Hidden smUp>
                                <h6 className="home__improving__xs__text">
                                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
                            </h6>
                            </Hidden>
                            <p>
                                Building with AsaTera means you will have access to metadata-enhanced cannabis news at scale that you cannot find anywhere else.
                    </p>
                            <Hidden smUp>
                                <div style={{ flex: 1, justifyContent: 'space-between' }}>
                                    <Button bsPrefix="section__kind_api_viewPricing">Our services</Button>
                                    <Button bsPrefix="section__kind_api_howItWorks">How it works</Button>
                                </div>
                            </Hidden>
                            <Hidden smDown>
                                <Button
                                    onClick={() => window.location.pathname("/pricing")}
                                    bsPrefix="section__kind_api_viewPricing">View Pricing</Button>
                            </Hidden>
                        </Col>
                        <Col style={{ paddingLeft: 0, paddingRight: 0 }} xs={{ span: 12, order: 1 }} md={{ span: 5, offset: 1, order: 2 }}>
                            <Image
                                src={HomeKindAPI}
                                alt="CONSTANTLY IMRPOVING"
                                fluid
                            />
                            <Image
                                fluid
                                src={HomeImprovingDots}
                                alt="CONSTANTLY IMRPOVING DOTS"
                                className="home__kind_api_dots_left_bottom"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section__create_account">
                <div>
                    <img
                        src={Wave}
                        alt="wave"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="home__create_account_container">
                    <Container>
                        <Row>
                            <Col md={8}>
                                <h1>Ready to get Started? Create an account and get your API key today.</h1>
                            </Col>
                            <Col md={{ span: 2, offset: 0 }}>
                                <Button
                                    bsPrefix="section__create_account_getAQuote">
                                    Get a free quote
                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home;