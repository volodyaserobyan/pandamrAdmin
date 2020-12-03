import React from "react";
import "./Confirm.scss";

const Confirm = (props) => {
  return (
    <div className="global-holder confirm-holder">
      <div className="scrollable-holder-h">
        <div className="scrollable-container-h">
          <div className="scroll-wrapper">
            <div className="glob-n-wrapper">
              <div className="confirm-cont">
                <i className="_icon-times description-cont-close"/>
                <div className="confirm-text">
                  <p>
                    By confirming, in all zones within all halls will be used the same
                    materials.
                    <br /> <span>Are you sure?</span>
                  </p>
                </div>
                <div className="global-buttons">
                  <button className="global-btn global-btn-type-1">Confirm</button>
                  <button className="global-btn global-btn-type-2">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
