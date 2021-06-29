import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { request } from "../services/Request";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
nav.astra-nav {
    background: transparent !important;
    padding: 10px 50px;
}
.dRXXgI .navbar {
  background: transparent !important;
}
img.logo-img {
    width: auto;
    height: 50px;
}

nav.astra-nav .nav-item a {
    font-family: Circular Std;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: left;
    color: black !important;
    font-family: "Roboto", "Helvetica", "Arial";
    padding: 8px 25px;
    border-radius: 10px;
}
nav.astra-nav .nav-item a.sign-in.nav-link {
    background: #FDBC2A;
    color: black !important;
    margin-left: 20px;
}
.nav-over {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
        overflow: visible;
}
img.over-1,img.over-2  {
    position: absolute;
    top: 0;
    left: 0;
    transform:none !important;
}
.sm-show{
  display:none !important;
}
a.z-index-9.navbar-brand {
    z-index: 9999;
}

@media screen and (max-width:768px){
.sm-show{
  display:block !important;
}
img.logo-img {
    display: none;
}
.nav-over {
  
    display: none;
}
nav.astra-nav {
    background: #03004D!important;
    padding: 10px 50px;
}
button.navbar-toggler {
    border: none !important;
    outline: none !important;
}
nav.astra-nav .navbar-toggler-icon {
    background-image: url('/assets/menu.png');
    width: 20px;
    height: 17px;
}
nav.astra-nav .nav-item a.sign-in.nav-link {
    background: none;
    color: white !important;
    margin-left: 0;
}
 nav.astra-nav .nav-item a {
    
    color: white !important;
    
}
div#basic-navbar-nav {
    margin-top: 20px;
}
}
@media screen and (max-width:500px){
img.logo-img.sm-show {
    width: auto;
    height: 35px;
}
 nav.astra-nav {
    background: #03004D!important;
    padding: 10px 20px;
}
}
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    request("/api/users/me", { noRedirect: true }).then((result) => {
      if (result.data) {
        setLogin(true);
        console.log(isLogin);
      }
    });
  });

  const logout = () => {
    request("/api/register/logout", {}).then((result) => {
      window.location.href = "/login";
    });
  };

  if (window.location.pathname.match(/register*/) || window.location.pathname.match(/login/) || window.location.pathname.match(/forgot/)) {
    return null;
  }

  return (
    <Styles>
      <Navbar expand="md" className="astra-nav">
        <div className="nav-over">
          <img src="/assets/Oval.png" alt="Asatera" className="over-1" />
          <img src="/assets/Oval2.png" alt="Asatera" className="over-2" />
        </div>
        <Navbar.Brand href="/" className="z-index-9"> <img src="/assets/logo.png" alt="logo" className="logo-img" />
          <img src="/assets/logo-2.png" alt="logo" className="logo-img sm-show" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Item>
              <Nav.Link href="/Pricing">Pricing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/developers">Developer</Nav.Link>
            </Nav.Item>
            {!isLogin && (
              <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav.Item>
            )}

            {isLogin && (
              <Nav.Item>
                <Nav.Link href="/dashboard"  className="sign-in">test@asatera.com</Nav.Link>
              </Nav.Item>
            )}

            {!isLogin && (
              <Nav.Item>
                <Nav.Link href="/register" className="sign-in">Get API Key</Nav.Link>
              </Nav.Item>
            )}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
export default NavigationBar;