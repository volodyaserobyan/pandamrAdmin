import React from "react";
import successImg from "../../../assets/images/successimg.png";
import "./Success.scss";

const Success = (props) => {
  return (
    <div className="status-b-holder">
      <div className="success-cont">
        <span className="success-cont-close"></span>
        <div className="success-cont-img">
          <img src={successImg} alt="Successfully reset" />
        </div>
        <p className="success-cont-text">{props.value}</p>
      </div>
    </div>
  );
};

export default Success;
