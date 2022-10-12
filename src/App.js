import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Developers from "./Developers";
import Pricing from "./components/Pricing/Pricing";
import { Login } from "./pages/Login";
import { Forgot } from "./Forgot";
import { NoMatch } from "./NoMatch";
import { Privacy } from "./Privacy";
import { Terms } from "./Terms";
import { NavigationBar } from "./components/NavigationBar";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { ChangePassword } from "./ChangePassword";
import { ProfileUser } from "./pages/ProfileUser";
import { NewSource } from "./sources/NewSource";
import { UpdateSource } from "./sources/UpdateSource";
import { SourceList } from "./sources/SourceList";
import { RegisterComplete } from "./pages/RegisterComplete"
import { Subscription } from "./pages/Subscription"
import "./Styles/custom.scss";
class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          {/* {window.location.pathname !== "/Pricing" &&
            <NavigationBar />
          } */}
          <Router>
            <Routes>
              <Route exact path="/" element={ <Home/> } />
              <Route path="/developers" element={ <Developers/> } />
              <Route path="/Pricing" element={ <Pricing/> } />
              <Route path="/login" element={ <Login/> } />
              <Route path="/forgot" element={ <Forgot/> } />
              <Route path="/privacy" element={ <Privacy/> } />
              <Route path="/terms" element={<Terms/> } />
              <Route path="/register" element={ <Register/> } />
              <Route path="/register-complete" element={ <RegisterComplete/> } />
              <Route path="/dashboard" element={ <Dashboard/> } />
              <Route path="/profile/subscription" element={ <Subscription/> } />
              <Route path="/profile/password" element={ <ChangePassword/> } />
              <Route path="/profile/user" element={ <ProfileUser/> } />
              <Route exact path="/sources" element={ <SourceList/> } />
              <Route path="/sources/new" element={ <NewSource />} />
              <Route path="/sources/update/:id" element={ <UpdateSource/> } />
              <Route element={ <NoMatch/> } />
            </Routes>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
