import React from "react";
import "./ResetPass.scss";

const ResetPass = () => {
  return (
    <div className="form-wrapper-main">
      <div className="form-wrapper form-reset">
        <form className="form-content form-content-reset">
          <div className="title-holder">
            <h1 className="title-h1-text title-h1-text-reset">
              Forgot your password?
            </h1>
          </div>
          <div className="SignIn-Wrap-Cont-Wrapper">
            <div className="inp-holder inp-holder-email">
              <div className="SignIn-error-cont error-visible">
                <p className="SignIn-Wrap-error">Email not found*</p>
              </div>
              <input
                placeholder="Enter your Email"
                type="mail"
                className="inp-v"
                required
                id="inp-v-id"
              />
            </div>

            <div className="btn-holder">
              <button className="btn-v" type="submit" value="reset">
                Reset
              </button>
            </div>
          </div>
        </form>

        <div className="pmr-info-b">
          <p>
            Made with <i className="_icon-heart-icon"></i>
            by PandaMR
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
