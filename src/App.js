import React from "react";
import SignIn from "./containers/SignIn";
import NavBar from "./components/NavBar";
import ResetPass from "./containers/ResetPass";
import { Success } from "./components/Modal";
import "./App.scss";

const App = () => {
  return (
    <div className="main-app">
      <div className="header-holder">
        <NavBar />
      </div>
      <div className="content-holder">
        <div className="main-content-box">
          <div className="scrollable-container">
            {/*<Success value='RESET SUCCESSFULLY' />*/}
            <SignIn />
            {/* <ResetPass /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
