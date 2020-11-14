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
        <div className="meeting-cont" style={{display: "none"}}>
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
        <div className="description-cont">
            <div className="description-cont-close">
            </div>
            <p className="send-cont-txt">please leave comment on why the request is denied</p>
            <div className="send-text-block">
                <div className="scrollable-container-h">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad amet eveniet minus nam non numquam quam quod, rerum sequi totam.
                        Est fugiat iste itaque, magnam perferendis quidem repellat sint tenetur?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad amet eveniet minus nam non numquam quam quod, rerum sequi totam.
                        Est fugiat iste itaque, magnam perferendis quidem repellat sint tenetur?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad amet eveniet minus nam non numquam quam quod, rerum sequi totam.
                        Est fugiat iste itaque, magnam perferendis quidem repellat sint tenetur?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad amet eveniet minus nam non numquam quam quod, rerum sequi totam.
                        Est fugiat iste itaque, magnam perferendis quidem repellat sint tenetur?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad amet eveniet minus nam non numquam quam quod, rerum sequi totam.
                        Est fugiat iste itaque, magnam perferendis quidem repellat sint tenetur?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad amet eveniet minus nam non numquam quam quod, rerum sequi totam.
                        Est fugiat iste itaque, magnam perferendis quidem repellat sint tenetur?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad amet eveniet minus nam non numquam quam quod, rerum sequi totam.
                        Est fugiat iste itaque, magnam perferendis quidem repellat sint tenetur?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad amet eveniet minus nam non numquam quam quod, rerum sequi totam.
                        Est fugiat iste itaque, magnam perferendis quidem repellat sint tenetur?
                    </p>
                </div>
            </div>
            <div className="send-buttons">
                <button className="send-btn send-btn-des">Send</button>
            </div>
        </div>
    </div>
  );
};

export default Success;
