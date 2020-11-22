import React, { useState } from "react";
import eyeImgOff from "../../assets/images/eye-off.png";
import eyeImgOn from "../../assets/images/eye-on.png";
import Button from "../../components/Form/Button";
import { Success } from "../../components/Modal";
import Signin from "./SignIn.scss";

const SignIn = () => {
  const [isPassword, setIsPassword] = useState(true);
  return (
    <div className="form-wrapper-main">
      <div className="form-wrapper form-signIn">
        <form className="form-content form-content-signIn">
          <div className="title-holder">
            <h1 className="title-h1-text">Log in</h1>
          </div>
          <div className="SignIn-Wrap-Cont-Wrapper">
            <div className="SignIn-error-cont error-visible">
              <p className="SignIn-Wrap-error">Invalid email or password*</p>
            </div>
            <div className="inp-holder inp-holder-email">
              <input
                placeholder="Enter your Email"
                type="mail"
                className="inp-v"
              />
            </div>

            <div className="inp-holder inp-holder-password">
              <input
                className="inp-v"
                placeholder="Enter your Password"
                type={`${isPassword ? "password" : "text"}`}
              />
              <div
                className="show-hide"
                onClick={() => setIsPassword(!isPassword)}
              >
                {isPassword ? (
                  <img src={eyeImgOff} alt="Hide password" />
                ) : (
                  <img src={eyeImgOn} alt="Show password" />
                )}
              </div>
            </div>
            <div className="Signin-Remember-wrapper">
              <div className="checkbox-holder">
                <label className="container">
                  Remember me
                  <input type="checkbox" />
                  <span></span>
                </label>
              </div>
              <div className="forgot-pass-t">
                <p>Forgot password ?</p>
              </div>
            </div>
            <div className="btn-holder">
              <button className="btn-v" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>

        <div className="pmr-info-b">
          <p>
            Made with
            <i className="_icon-heart-icon"></i>
            by PandaMR
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
