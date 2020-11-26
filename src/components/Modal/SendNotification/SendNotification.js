import React from "react";
import "./SendNotification.scss";

const SendNotification = (props) => {
  return (
    <div className="global-holder send-notification-holder status-hidden0">
      <div className="scrollable-holder-h">
        <div className="scrollable-container-h">
          <div className="scroll-wrapper">
            <div className="send-n-wrapper">
              <div className="send-notification-cont">
                <i className="_icon-times send-notification-cont-close"></i>

                <div>
                  <h1 className="send-notification-title">
                    You are about to send the following notification
                  </h1>
                </div>
                <div className="send-notification-info">
                  <p className="send-notification-subtitle">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut m
                  </p>
                  <p className="send-notification-text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam volu
                  </p>
                </div>
                <div className="global-buttons">
                  <button className="global-btn global-btn-type-1">Send</button>
                  <button className="global-btn global-btn-type-2">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendNotification;
