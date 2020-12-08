import React from "react";
import SignIn from "./containers/SignIn";
import NavBar from "./components/NavBar";
import Dashboard from "./containers/Dashboard";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ResetPass from "./containers/ResetPass";
import ResetPassSent from "./containers/ResetPassSent";
import { IsDenied } from "./components/Modal";
import { SendNotification } from "./components/Modal";
import { Invintation } from "./components/Modal";
import { Success } from "./components/Modal";
import { ImageCropper } from "./components/Modal";
import { Confirm } from "./components/Modal";
import "./App.scss";

const App = () => {
  return (
    <div className="main-app">
      <div className="header-holder">
        <NavBar />
      </div>
      <div className="content-holder">
        <BrowserRouter>
          <div className="main-content-box">
            {/* {<ImageCropper />} */}
            {/* {<Confirm />} */}
            {<Dashboard />}
            {/* <Success value="reset successfully" /> */}
            {/* <SignIn /> */}
            {/* <ResetPass />*/}
            {/* <ResetPassSent /> */}
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
