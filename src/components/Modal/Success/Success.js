import React from "react";
import successImg from "../../../assets/images/successimg.png";
import "./Success.scss";

const Success = (props) => {
  return (
    <div className="global-holder status-b-holder status-hidden1">
      <div className="scrollable-holder-h">
        <div className="scrollable-container-h">
          <div className="scroll-wrapper">
            <div className="glob-n-wrapper">
              <div className="success-cont" style={{ display: "none" }}>
                <i className="_icon-times success-cont-close"/>
                <div className="success-cont-img">
                  <img src={successImg} alt="Successfully reset" />
                </div>
                <p className="success-cont-text">
                  {props.value} Reset Successfully
                </p>
              </div>

              <div className="meeting-cont" >
                <div className="meeting-cont-close"/>
                <div className="meeting-cont-txt">
                  <p>
                    You are about to delete the room
                    <br />
                    <span>Are you sure?</span>
                  </p>
                </div>
                <div className="meeting-buttons">
                  <button className="meeting-btn meeting-btn-delete">
                    Confirm
                  </button>
                  <button className="meeting-btn meeting-btn-cancel">
                    Cancel
                  </button>
                </div>
              </div>
              <div className="description-cont" style={{ display: "none" }}>
                <i className="_icon-times description-cont-close"/>
                <p className="send-cont-txt">
                  Please leave comment on why the request is denied
                </p>
                <div className="send-text-block">
                  <div className="scrollable-container-h">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad amet eveniet minus nam non numquam quam quod, rerum
                      sequi totam. Est fugiat iste itaque, magnam perferendis
                      quidem repellat sint tenetur? Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Ad amet eveniet minus nam
                      non numquam quam quod, rerum sequi totam. Est fugiat iste
                      itaque, magnam perferendis quidem repellat sint tenetur?
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad amet eveniet minus nam non numquam quam quod, rerum
                      sequi totam. Est fugiat iste itaque, magnam perferendis
                      quidem repellat sint tenetur? Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Ad amet eveniet minus nam
                      non numquam quam quod, rerum sequi totam. Est fugiat iste
                      itaque, magnam perferendis quidem repellat sint tenetur?
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad amet eveniet minus nam non numquam quam quod, rerum
                      sequi totam. Est fugiat iste itaque, magnam perferendis
                      quidem repellat sint tenetur? Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Ad amet eveniet minus nam
                      non numquam quam quod, rerum sequi totam. Est fugiat iste
                      itaque, magnam perferendis quidem repellat sint tenetur?
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad amet eveniet minus nam non numquam quam quod, rerum
                      sequi totam. Est fugiat iste itaque, magnam perferendis
                      quidem repellat sint tenetur? Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Ad amet eveniet minus nam
                      non numquam quam quod, rerum sequi totam. Est fugiat iste
                      itaque, magnam perferendis quidem repellat sint tenetur?
                    </p>
                  </div>
                </div>
                <div className="send-buttons">
                  <button className="send-btn send-btn-des">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
