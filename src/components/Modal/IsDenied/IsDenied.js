import React from "react";
import successImg from "../../../assets/images/isdenied.png";
import "./IsDenied.scss";

const IsDenied = (props) => {
  return (
    <div className="global-holder isdenied-holder status-hidden0">
      <div className="scrollable-holder-h">
        <div className="scrollable-container-h">
          <div className="scroll-wrapper">
            <div className="glob-n-wrapper">
              <div className="isdenied-cont">
                <i className="_icon-times isdenied-cont-close"></i>
                <div className="isdenied-cont-img">
                  <img src={successImg} alt="Request is Denied" />
                </div>
                <p className="isdenied-cont-text">Request is denied</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsDenied;
