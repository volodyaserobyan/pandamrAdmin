import React from "react";
import successImg from "../../../assets/images/successimg.png";
import "./Success.scss";

const Success = (props) => {
  return (
    <div className="status-b-holder status-hidden0">
      <div className="success-cont" style={{display: "none"}}>
        <div className="success-cont-close"></div>
        <div className="success-cont-img">
          <img src={successImg} alt="Successfully reset" />
        </div>
        <p className="success-cont-text">{props.value}</p>
      </div>
        <div className="meeting-cont">
          <div className="meeting-cont-close">
          </div>
            <div className="meeting-cont-txt">
                <p>you are about to delete the room<br/><span>are you sure?</span></p>
            </div>
            <div className="meeting-buttons">
                <button className="meeting-btn meeting-btn-delete">Confirm</button>
                <button className="meeting-btn meeting-btn-cancel">Cancel</button>
            </div>
         </div>
    </div>
  );
};

export default Success;
