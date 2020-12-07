import React from "react";
import "./Invintation.scss";

const Invintation = (props) => {
  return (
    <div className="global-holder invintation-holder">
      <div className="invintation-cont">
        <i className="_icon-times description-cont-close"/>
        <p className="inv-cont-text">Invintation</p>

        <div className="inv-input-holder">
          <input type="text" placeholder="search" className="input" />
          <i className="_icon-search"/>
        </div>
        <div className="invintation-info-block">
          <div className="scrollable-container-h">
            <div className="info-block-item">
              <p>Johan Delly, CEO of Delly inc.</p>
              <i className="_icon-user-minus-icon"/>
            </div>
            <div className="info-block-item">
              <p>Johan Delly, CEO of Delly inc.</p>
              <i className="_icon-user-minus-icon"/>
            </div>
            <div className="info-block-item">
              <p>Johan Delly, CEO of Delly inc.</p>
              <i className="_icon-user-minus-icon"/>
            </div>
            <div className="info-block-item">
              <p>Johan Delly, CEO of Delly inc.</p>
              <i className="_icon-user-minus-icon"/>
            </div>
            <div className="info-block-item">
              <div className="inv-checkbox-holder">
                <label htmlFor="input" className="label-info-block">Johan Delly, CEO of Delly inc.</label>
                <input type="checkbox" id="input"/>
              </div>
            </div>
            <div className="info-block-item">
              <div className="inv-checkbox-holder">
                <label htmlFor="input-2" className="label-info-block">Johan Delly, CEO of Delly inc.</label>
                <input type="checkbox" id="input-2"/>
              </div>
            </div>
            <div className="info-block-item">
              <div className="inv-checkbox-holder">
                <label htmlFor="input-3" className="label-info-block">Johan Delly, CEO of Delly inc.</label>
                <input type="checkbox" id="input-3"/>
              </div>
            </div>
            <div className="info-block-item">
              <div className="inv-checkbox-holder">
                <label htmlFor="input-4" className="label-info-block">Johan Delly, CEO of Delly inc.</label>
                <input type="checkbox" id="input-4"/>
              </div>
            </div>
            <div className="info-block-item">
              <div className="inv-checkbox-holder">
                <label htmlFor="input-5" className="label-info-block">Johan Delly, CEO of Delly inc.</label>
                <input type="checkbox" id="input-5"/>
              </div>
            </div>
            <div className="info-block-item">
              <div className="inv-checkbox-holder">
                <label htmlFor="input-6" className="label-info-block">Johan Delly, CEO of Delly inc.</label>
                <input type="checkbox" id="input-6"/>
              </div>
            </div>
            <div className="info-block-item">
              <div className="inv-checkbox-holder">
                <label htmlFor="input-7" className="label-info-block">Johan Delly, CEO of Delly inc.</label>
                <input type="checkbox" id="input-7"/>
              </div>
            </div>
            <div className="info-block-item">
              <div className="inv-checkbox-holder">
                <label htmlFor="input-8" className="label-info-block">Johan Delly, CEO of Delly inc.</label>
                <input type="checkbox" id="input-8"/>
              </div>
            </div>
            <div className="info-block-item">
              <div className="inv-checkbox-holder">
                <label htmlFor="input-9" className="label-info-block">Johan Delly, CEO of Delly inc.</label>
                <input type="checkbox" id="input-9"/>
              </div>
            </div>
            <div className="info-block-item">
              <div className="inv-checkbox-holder">
                <label htmlFor="input-10" className="label-info-block">Johan Delly, CEO of Delly inc.</label>
                <input type="checkbox" id="input-10"/>
              </div>
            </div>
          </div>
        </div>
        <div className="invite-buttons">
          <button className="btn type-1">
            Invite selected
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invintation;
