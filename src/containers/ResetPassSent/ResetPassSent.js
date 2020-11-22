import React from "react";
import successImg from "../../assets/images/successimg.png";
import "./ResetPassSent.scss";

const ResetPassSent = () => {
  return (
    <div className="form-wrapper-main">
      <div className="form-wrapper success-wrapper">
        <div className="form-content form-content-success">
          <div className="success-img">
            <img src={successImg} alt="Successfully reset" />
          </div>
          <span className="reset-success-title">Password reset email sent</span>
          <p className="reset-success-text">
            An email has been sent to your email address. Follow the directions
            in the email to reset your password.
          </p>
        </div>
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

export default ResetPassSent;
