import React, { Component } from "react";
import "../Styles/sidebar.css";
import { Dropdown } from "react-bootstrap";

export default class Sidebar extends Component {
  render() {
    return (
        <html lang="en">
          <head>
            <meta charset="utf-8"></meta>
            <title>Cannabis News API Privacy Policy</title>
            <meta name="description" content="Complete reference documentation for the Cannabis News API. Includes representative code snippets and examples for our Python, Java, PHP, Node.js, Go, Ruby, and .NET client libraries"></meta>
          </head>
          <body id="api-reference" class="api-ref">
            <div id="sidebar" class="d-block d-md-none d-lg-none">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic-menu">
                    Navigate to...
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/Developers/#intro">Introduction</Dropdown.Item>
                    <Dropdown.Item href="/Developers/#authentication">Authentication</Dropdown.Item>
                    <Dropdown.Item href="/Developers/#errors">Errors</Dropdown.Item>
                    <Dropdown.Item href="/Developers/#endpoints">Endpoints</Dropdown.Item>
                    <Dropdown.Item href="/Developers/#libraries">Libraries</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div id="sidebar" class="d-none d-sm-none d-md-block">
                <nav role="navigation" class="sidebar-nav" id="Sidebar-scroll">
                    <div class="sidebar-nav-group NavGroup-shown">
                      <ul class="sidebar-nav-times loaded"> 
                        <li class>
                          <a class="sidebar-nav-item hoverable selected" href="/Developers/#intro">Introduction</a>
                        </li>
                        <li class>
                          <a class="sidebar-nav-item hoverable selected" href="/Developers/#authentication">Authentication</a> 
                        </li>
                        <li class>
                          <a class="sidebar-nav-item hoverable selected" href="/Developers/#errors">Errors</a>
                        </li>
                        <li class>
                          <a class="sidebar-nav-item hoverable selected" href="/Developers/#endpoints">Endpoints</a>
                        </li>
                        <li class> 
                          <a class="sidebar-nav-item hoverable selected" href="/Developers#libraries">Libraries</a>
                        </li>                            
                    </ul>
                  </div>
              </nav>
            </div>
          </body>  
      </html>  
    );
  }
}
