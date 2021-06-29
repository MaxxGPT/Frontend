import React from "react";
//import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import { Row, Col, Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar"

const Developers = () => (
  
  <Container>
    <NavigationBar />
    <Row>
      <Col md={3}>
        <Sidebar />
      </Col>
      <Col>
      <section class="method first-of-group" id="intro">
        <div>
          <div class="MethodCopyTtitle">
            <h3 class="MethodCopyTitle-anchor">API Reference</h3>
          </div>
          <br></br>
          <br></br>
          <p class="IntroSection-firstPara">
            The AsaTera API is organized around{" "}
            <a href="https://en.wikipedia.org/wiki/Representational_state_transfer">
              REST
            </a>
            . Our API has predictable resource-oriented URLs, accepts
            form-encoded request bodies, returns{" "}
            <a href="https://www.json.org/json-en.html">JSON-encoded</a>{" "}
            responses, and uses standard HTTP response codes.
          </p>
          <br></br>
          
          <p>
            By default, the Stripe API Docs demonstrate using curl to interact
            with the API over HTTP. Select one of our official client libraries
            to see examples in code.
          </p>
          <br></br>
          <br></br>

          <p class="csat-widget">
            <span class="csat-widget text">Was this section helpful?</span>
            <span class="csat-button csat-button-yes common-Button"> Yes</span>
            <span class="csat-button csat-button-no common-Button"> No</span>
          </p>
          </div>
        </section>
        <br></br>
        <hr />
        <br></br>
        <section class="method firt of group" id="authentication">
        <div>
          <div class="methodCopyTitle">
            <h3 class="MethodCopyTitle-anchor">Authentication</h3>
          </div>
          <br></br>
          <br></br>

          <p>
            The AsaTera API uses API keys to authenticate requests. You can view
            and manage your API keys in the{" "}
            <a href="http://localhost/Dashboard">User Dashboard</a>.
          </p>
          <br></br>

          <p>
            Your API key carries many privileges, so be sure to keep them
            secure! Do not share your key in publicly accessible areas such as
            GitHub, client-side code, and so forth.
          </p>
          <br></br>
          <p>
            Authentication to the API is performed via HTTP Basic Auth. Provide
            your API key as the basic auth value. You do not need to provide a
            password.
          </p>
          <br></br>
          <p>
            API request must be made over HTTPS. Calls made over plan HTTP will
            fail. API request without authentication will also fail.
          </p>
          <br></br>
          <br></br>
          <p class="csat-widget">
            <span class="csat-widget text">Was this section helpful?</span>
            <span class="csat-button csat-button-yes common-Button"> Yes</span>
            <span class="csat-button csat-button-no common-Button"> No</span>
          </p>
        </div>
        </section>
        <br></br>
        <hr />
        <br></br>
        <section class="method first-of-group" id="errors">
        <div>
        <div class="MethodCopyTitle">
          <h3 class="MethodCopyTitle-anchor">Errors</h3>
        </div>
        <br></br>
        <br></br>
          <p>
            AsaTera uses conventional HTTP response codes to indicate the
            success or failure of an API request. In general: Codes in the 2xx
            range indicate success. Codes in the 4xx range indicate an error
            that failed given the information provided (e.g., a required
            parameter was omitted, etc.) Codes in the 5xx range indicate an
            error with AsaTera’s servers (there are rare).
          </p>
          <br></br>
          <h4>Handling Errors</h4>
          <br></br>
          <p>
            Our Client libraries raise exceptions for many reasons, such as
            invalid parameters, authentication errors, and network
            unavailability. We recommend writing code that gracefully handles
            all possible API exceptions.
          </p>
          <br></br>
          <br></br>
          <p class="csat-widget">
            <span class="csat-widget text">Was this section helpful?</span>
            <span class="csat-button csat-button-yes common-Button"> Yes</span>
            <span class="csat-button csat-button-no common-Button"> No</span>
          </p>
          </div>
          </section>
          <br></br>
          <hr />
          <br></br>

          <section class="method first-of-group" id="endpoints">
          <div>      
          <div class="MethodCopyTitle">
            <h3 class="MethodCopyTitle-anchor">Endpoints</h3>
          </div>
          <br></br>
          <br></br>
          <p>AsaTera API has 2 main endpoints:</p>
          <br></br>
          <p>
            Articles. /articles – returns all articles. Information displayed
            are title, author, date published, content, summarization of
            content, URL to image, metadata, to include named entities,
            location, categories, and more). We index every recent news and blog
            article published by over 10,000 different sources large and small.
            You can search through them with this endpoint. This endpoint is
            best suited for news analysis and article discovery, but can be used
            to retrieve articles for display too.
          </p>
          <br></br>
          <p>
            Sources. /sources – returns information including name, description,
            location, and url) about the sources we index. This list could be
            piped directly through to your users when showing them what options
            are available.
          </p>
          <br></br>
          <br></br>
          <p class="csat-widget">
            <span class="csat-widget text">Was this section helpful?</span>
            <span class="csat-button csat-button-yes common-Button"> Yes</span>
            <span class="csat-button csat-button-no common-Button"> No</span>
          </p>
          </div>
          </section>
          <br></br>
          <hr />
          <br></br>   
          <section class="method first-of-group" id="libraries">
          <div>
          <div class="MethodCopyTitle">    
            <h3 class="MethodCopyTitle-anchor">Client Libraries</h3>
          </div>  
          <br></br>    
          <p>
            AsaTera has official libraries for different programming languages.
            Use a client library to quickly and easily get started with AsaTera
            API without worrying about the underlying setup.
          </p>
          <br></br>
          <p>We have libraries for the following languages:</p>
          <br></br>    
          <ul>
            <li>Node.js</li>
            <li>Ruby</li>
            <li>Python</li>
            <li>PHP</li>
            <li>Curl</li>
            <li>Java</li>
            <li>C#</li>
            <br></br>
          </ul>
          <p class="csat-widget">
            <span class="csat-widget text">Was this section helpful?</span>
            <span class="csat-button csat-button-yes common-Button"> Yes</span>
            <span class="csat-button csat-button-no common-Button"> No</span>
          </p>
        </div>
        </section>
        <br></br>
        <br></br>
      </Col>
    </Row>
  </Container>
);
export default Developers;
