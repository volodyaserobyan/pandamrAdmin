import React from "react";
import "./Confirm.scss";

const Confirm = (props) => {
  return (
    <div className="confirm-holder">
      <div className="confirm-cont">
        <span className="success-cont-close"></span>
        <div className="confirm-text">
          <p>
            By confirming, in all zones within all halls will be used the same
            materials.
            <br /> <span>Are you sure?</span>
          </p>
        </div>
        <div className="confirm-buttons">
          <button className="confirm-btn confirm-btn-confirm">Confirm</button>
          <button className="confirm-btn confirm-btn-cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
