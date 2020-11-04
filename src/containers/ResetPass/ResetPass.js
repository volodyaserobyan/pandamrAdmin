import React from "react";
import "./ResetPass.scss";

const ResetPass = () => {
  return (
    <div className="form-wrapper">
      <form className="form-content">
        <div className="title-holder">
          <h1 className="title-h1-text">FORGOT YOUR PASSWORD</h1>
        </div>
        <div className="ResetPass-Cont-Wrapper">
          <div className="inp-holder">
            <input
              placeholder="Enter new Password"
              type="password"
              className="inp-v"
            />
          </div>
          <div className="inp-holder">
            <input
              placeholder="Respeat Password"
              type="password"
              className="inp-v"
            />
          </div>
          <div className="btn-holder">
            <button className="btn-v" type="submit" value="RESET">
              Login
            </button>
          </div>
        </div>
      </form>
      <div className="pmr-info-b">
        <p>
          Made with{" "}
          <img
            src="https://static.pandamr.com/fs/userFiles/main/media/icon-ionic-ios-heart.png?1602242531369"
            alt=""
          />{" "}
          by PandaMR
        </p>
      </div>
    </div>
  );
};

export default ResetPass;
