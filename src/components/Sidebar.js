import React, { Component } from "react";
import "../Styles/sidebar.css";
//import { Nav } from "react-bootstrap";

export default class Sidebar extends Component {
  render() {
    return (
        <html lang="en">
          <head>
            <meta charset="utf-8"></meta>
            <title>AsaTera API Reference</title>
            <meta name="description" content="Complete reference documentation for the AsaTera API. Includes representative code snippets and examples for our Python, Java, PHP, Node.js, Go, Ruby, and .NET client libraries"></meta>
          </head>
          <body id="api-reference" class="api-ref">
            <div id="sidebar">
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
