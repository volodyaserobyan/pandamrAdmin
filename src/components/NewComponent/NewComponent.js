import React from "react";
import Logo from "../../assets/images/Logo.png";
import PickSection from "../../assets/images/pick-section.png";
// import "../../assets/sass/main.scss";

const NewComponent = () => {
  return (
    <div className="content-h">
      {/* Left Sidebar */}
      <div className="content-column-h left">
        <div className="content-column-grid-h">
          <div className="content-column-g-row head">
            <div className="left-head-component">
              <p>
                <i className="_icon-left-arrow"></i>Expo name 3
              </p>
            </div>
          </div>
          <div className="content-column-g-row center">
            <div className="left-center-component">
              <div className="scrollable-holder-h">
                <div className="scrollable-container-h">
                  <div className="left-c-component-item">
                    <span className="left-c-component-heading">Conferance</span>
                    <i className="_icon-left-arrow"></i>
                  </div>
                  <div className="left-c-component-item">
                    <span className="left-c-component-heading">
                      Panel Talks
                    </span>
                    <span className="left-c-c-value">2</span>
                    <i className="_icon-arrow-right"></i>
                  </div>
                  <div className="left-c-component-item left-c-c-item-active">
                    <span className="left-c-component-heading">
                      Meeting room
                    </span>
                    <i className="_icon-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-column-g-row bottom">
            <div className="left-bottom-component">
              <button className="btn type-1">Create room</button>
              <p>
                Made with <i className="_icon-heart-icon"></i> by PandaMR
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End of left sidebar */}

      {/* Right main content */}
      <div className="content-column-h right">
        {/* Right top content */}
        <div className="content-c-row-h head">
          <div className="content-c-row-h-inner">
            <div className="content-c-row-h-i-column">
              <ul class="breadcrumbs">
                <li className="breadcrumb-btn-active">
                  <div>
                    <span className="btn-line"></span>
                    <span>Expo name 3</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>Meeting room</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>Meeting room 3</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="content-c-row-h-i-column">
              <p>
                <span>Expo details:</span> 20/10/2020-20/11/2020
              </p>
            </div>
          </div>

          {/* Meeting room table 1 - disabled*/}
          <div
            className="meeting-room-info meeting-room-holder"
            style={{ display: "none" }}
          >
            <div className="m-room-info-table">
              <div className="m-room-info-thead">
                <div className="m-room-info-row">
                  <div className="m-room-info-cell">Date</div>
                  <div className="m-room-info-cell">Room name</div>
                  <div className="m-room-info-cell">Creator</div>
                  <div className="m-room-info-cell">Creator company</div>
                  <div className="m-room-info-cell">Type</div>
                </div>
              </div>

              <div className="m-room-info-tbody">
                <div className="m-room-info-row">
                  <div className="m-room-info-row-wrp">
                    <div className="m-room-info-cell">3:35 pm, 11/10/2020</div>
                    <div className="m-room-info-cell">Room name 1</div>
                    <div className="m-room-info-cell">Name Last name</div>
                    <div className="m-room-info-cell">Company 1</div>
                    <div className="m-room-info-cell">
                      <span className="info-status">Private</span>
                      <div className="m-room-info-cell-edit">
                        <i className="_icon-Icon-material-edit"></i>
                        <i className="_icon-left-arrow"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-room-info-row row-active">
                  <div className="m-room-info-row-wrp">
                    <div className="m-room-info-cell">4:45 pm, 08/10/2020</div>
                    <div className="m-room-info-cell">Room name 2</div>
                    <div className="m-room-info-cell">Name Last name</div>
                    <div className="m-room-info-cell">Company 2</div>
                    <div className="m-room-info-cell">
                      <span className="info-status">Public</span>
                      <div className="m-room-info-cell-edit">
                        <i className="_icon-Icon-material-edit"></i>
                        <i className="_icon-arrow-down"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-room-info-row">
                  <div className="m-room-info-row-wrp">
                    <div className="m-room-info-cell">
                      Expo period, 28/09/2020
                    </div>
                    <div className="m-room-info-cell">Room name 3</div>
                    <div className="m-room-info-cell">Name Last name</div>
                    <div className="m-room-info-cell">Company 3</div>
                    <div className="m-room-info-cell">
                      <span className="info-status">Private</span>
                      <div className="m-room-info-cell-edit">
                        <i className="_icon-Icon-material-edit"></i>
                        <i className="_icon-left-arrow"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-room-info-row">
                  <div className="m-room-info-row-wrp">
                    <div className="m-room-info-cell">
                      Expo period, 28/09/2020
                    </div>
                    <div className="m-room-info-cell">Room name 4</div>
                    <div className="m-room-info-cell">Name Last name</div>
                    <div className="m-room-info-cell">Company 4</div>
                    <div className="m-room-info-cell ">
                      <span className="info-status">Public</span>
                      <div className="m-room-info-cell-edit">
                        <i className="_icon-Icon-material-edit"></i>
                        <i className="_icon-left-arrow"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="m-room-info-pagination">
              <div className="pagination-items">
                <i className="_icon-left-arrow"></i>
                <span>1</span>
                <span>2</span>
                <span className="pagination-item-active">3</span>
                <span>4</span>
                <span>5</span>
                <i className="_icon-arrow-right"></i>
              </div>

              <button className="small-btn small-btn-type-1 m-room-info-btn">
                Create
              </button>
            </div>
          </div>

          {/* Meeting room table 2 - disabled*/}
          <div className="meeting-room-info meeting-room-holder">
            <div className="m-room-info-table">
              <div className="m-room-info-thead">
                <div className="m-room-info-row">
                  <div className="m-room-info-cell-2">Date</div>
                  <div className="m-room-info-cell-2">Partner</div>
                  <div className="m-room-info-cell-2">Request</div>
                  <div className="m-room-info-cell-2">Status</div>
                </div>
              </div>

              <div className="m-room-info-tbody">
                <div className="m-room-info-row">
                  <div className="m-room-info-row-wrp">
                    <div className="m-room-info-cell-2">
                      3:35 pm, 11/10/2020
                    </div>
                    <div className="m-room-info-cell-2">
                      Lorem ipsum dolor sit amet inc.
                    </div>
                    <div className="m-room-info-cell-2">
                      Lorem ipsum dolor sit amet inc.
                    </div>
                    <div className="m-room-info-cell-2 ">
                      <span className="info-status approved">Approved</span>
                      <div className="m-room-info-cell-edit">
                        <i className="_icon-left-arrow"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-room-info-row row-active">
                  <div className="m-room-info-row-wrp">
                    <div className="m-room-info-cell-2">
                      4:45 pm, 08/10/2020
                    </div>
                    <div className="m-room-info-cell-2">
                      Lorem ipsum dolor sit amet inc.
                    </div>
                    <div className="m-room-info-cell-2">
                      Lorem ipsum dolor sit amet inc.
                    </div>
                    <div className="m-room-info-cell-2">
                      <span className="info-status pending">
                        Pending<i className="pending-dot">.</i>
                        <i className="pending-dot">.</i>
                        <i className="pending-dot">.</i>
                      </span>
                      <div className="m-room-info-cell-edit">
                        <i className="_icon-arrow-down"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-room-info-row">
                  <div className="m-room-info-row-wrp">
                    <div className="m-room-info-cell-2">
                      11:30 am, 02/10/2020
                    </div>
                    <div className="m-room-info-cell-2">
                      Lorem ipsum dolor sit amet inc.
                    </div>
                    <div className="m-room-info-cell-2">
                      Lorem ipsum dolor sit amet inc.
                    </div>
                    <div className="m-room-info-cell-2">
                      <span className="info-status denied">Denied</span>
                      <div className="m-room-info-cell-edit">
                        <i className="_icon-left-arrow"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-room-info-row">
                  <div className="m-room-info-row-wrp">
                    <div className="m-room-info-cell-2">
                      11:30 am, 02/10/2020
                    </div>
                    <div className="m-room-info-cell-2">
                      Lorem ipsum dolor sit amet inc.
                    </div>
                    <div className="m-room-info-cell-2">
                      Lorem ipsum dolor sit amet inc.
                    </div>
                    <div className="m-room-info-cell-2">
                      <span className="info-status denied">Denied</span>
                      <div className="m-room-info-cell-edit">
                        <i className="_icon-left-arrow"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="m-room-info-pagination">
              <div className="pagination-items">
                <i className="_icon-left-arrow"></i>
                <span>1</span>
                <span>2</span>
                <span className="pagination-item-active">3</span>
                <span>4</span>
                <span>5</span>
                <i className="_icon-arrow-right"></i>
              </div>

              <button className="small-btn small-btn-type-1 m-room-info-btn">
                Create
              </button>
            </div>
          </div>

          {/* Current event info details - disabled */}
          <div className="current-event-details" style={{ display: "none" }}>
            <div className="current-event-details-text">
              <p>
                <span>Current event details:</span> 23/10/2020, 11:00am-1:00pm
                (GMT+4)
              </p>
            </div>
          </div>
        </div>

        {/* Pick the section */}
        <div className="pick-the-section" style={{ display: "none" }}>
          <div className="pick-section-img">
            <img src={PickSection} alt="Pick the section" />
          </div>
          <p>Pick the section</p>
        </div>
        {/* End of pick the section */}

        {/* End of right top content */}
        <div className="user-info-grid-holder" style={{ display: "none" }}>
          <div className="user-i-grid">
            <div className="speaker-col-b">
              <div className="sp-grid-holder">
                <div className="sp-grid-b">
                  <div className="sp-g-title-row">
                    <p className="name-text-v">Speaker</p>
                  </div>
                  <div className="sp-g-content-row">
                    <div className="cont-info-user-profile">
                      <div className="scrollable-holder-h">
                        <div className="scrollable-container-h scroll-profile">
                          <div className="info-user-profile-photo">
                            <div className="profile-photo-block">
                              <i className="icon-camera"></i>
                              {/*{_.isEmpty(this.state.pictures) ?*/}
                              {/*<label>*/}
                              {/*<img src={userIcon} alt='' />*/}
                              {/*<input type="file" onChange={this.handleImageChange} />*/}
                              {/*</label> :*/}
                              {/*<label>*/}
                              {/*<img src={this.state.pictures.src} alt='' />*/}
                              {/*<input type="file" onChange={this.handleImageChange} />*/}
                              {/*</label>}*/}
                            </div>
                            <input placeholder="Speaker name and surname" />
                            <input placeholder="Speaker title/professional degree *" />
                            <input placeholder="Email" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-col-b">
              <div className="scrollable-holder-h">
                <div className="scrollable-container-h">
                  <div className="cont-info-user-content">
                    <div className="inside-info-user-content">
                      <p>Subject</p>
                      <input className="subject" placeholder="" />
                    </div>
                    <div className="inside-info-user-content">
                      <p>Short description</p>
                      <textarea className="short" placeholder="" />
                    </div>
                    <p className="content-c-g-title">
                      Attached files from participants
                    </p>
                    <div className="c-c-r-cnt-column-h left">
                      <div className="content-column-grid-h">
                        {/*<div className="content-column-g-row head">*/}
                        {/*<div className="common-component-head">*/}
                        {/*<p className="content-c-g-title">Attached files from participants</p>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        <div className="content-column-g-row center">
                          <div className="content-c-component">
                            <div className="scrollable-holder-h">
                              <div className="scrollable-container-h">
                                <div className="content-column-g-block">
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                </div>
                                <div className="content-column-g-block">
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                </div>
                                <div className="content-column-g-block">
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                </div>
                                <div className="content-column-g-block">
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                  <div className="content-column-g-r-item">
                                    <i className="_icon-Icon-material-photo"></i>
                                    <p>Lorem ipsum dolor.jpg</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn type-2">approve</button>
                    <button className="btn type-3">deny</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Branding and file info */}
        <div className="content-c-row-h center" style={{ display: "none" }}>
          <div className="c-c-r-cnt-column-h left">
            <div className="content-column-grid-h">
              <div className="content-column-g-row head">
                <div className="common-component-head">
                  <div className="apply-materials">
                    <p>Apply these materials to all halls</p>
                    <div className="inv-checkbox-holder">
                      <label className="inv-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-column-g-row center">
                <div className="content-c-component">
                  <div className="scrollable-holder-h">
                    <div className="scrollable-container-h">
                      <div className="running-row">
                        <div className="materials-details">
                          <p>Running row</p>
                          <i className="_icon-information-outline"></i>
                          <i className="_icon-arrow-down"></i>
                        </div>
                        <div className="running-file">
                          <div className="banner-info">
                            <p>Lorem ipsum dolor sit amets.jpg</p>
                          </div>
                          <i className="_icon-trash"></i>
                        </div>
                      </div>

                      <div className="banners">
                        <div className="materials-details">
                          <p>Banners</p>
                          <i className="_icon-information-outline"></i>
                          <i className="_icon-arrow-down"></i>
                        </div>
                      </div>
                      <div className="running-file">
                        <p className="banner-num">1.</p>
                        <div className="banner-info">
                          <p className="banner-info-title">
                            Lorem ipsum dolor.jpg
                          </p>
                          <p className="success-uploaded-p banner-info-subtitle">
                            Successfully uploaded
                          </p>
                          <span className="success-uploaded"></span>
                        </div>
                        <i className="_icon-trash"></i>
                      </div>
                      <div className="running-file">
                        <p className="banner-num">2.</p>
                        <div className="banner-info">
                          <p className="banner-info-title">
                            Lorem ipsum dolor.jpg
                          </p>
                          <p className="error-uploading-p banner-info-subtitle">
                            Uploading error, <span>try again.</span>
                          </p>
                          <span className="error-uploading"></span>
                        </div>
                        <i className="_icon-trash"></i>
                      </div>
                      <div className="running-file">
                        <p className="banner-num">3.</p>
                        <div className="banner-info">
                          <p className="banner-info-title">
                            Lorem ipsum dolor.jpg
                          </p>
                          <p className="uploading-p banner-info-subtitle">
                            Uploading... 50%
                          </p>
                          <span className="uploading"></span>
                        </div>
                        <i className="_icon-trash"></i>
                      </div>
                      <div className="running-file">
                        <p className="banner-num">4.</p>
                        <label>
                          Browse
                          <input type="file" id="banner-info-t" />
                        </label>
                      </div>
                      <div className="running-file">
                        <p className="banner-num">5.</p>
                        <label>
                          Browse
                          <input type="file" id="banner-info-t" />
                        </label>
                      </div>
                      <div className="running-file">
                        <p className="banner-num">6.</p>
                        <label>
                          Browse
                          <input type="file" id="banner-info-t" />
                        </label>
                      </div>
                      <div className="running-file">
                        <p className="banner-num">7.</p>
                        <label>
                          Browse
                          <input type="file" id="banner-info-t" />
                        </label>
                      </div>
                      <div className="running-file">
                        <p className="banner-num">8.</p>
                        <label>
                          Browse
                          <input type="file" id="banner-info-t" />
                        </label>
                      </div>
                      <div className="running-file">
                        <p className="banner-num">9.</p>
                        <label>
                          Browse
                          <input type="file" id="banner-info-t" />
                        </label>
                      </div>
                      <div className="running-file">
                        <p className="banner-num">10.</p>
                        <label>
                          Browse
                          <input type="file" id="banner-info-t" />
                        </label>
                      </div>
                      <div className="running-file">
                        <p className="banner-num">11.</p>
                        <label>
                          Browse
                          <input type="file" id="banner-info-t" />
                        </label>
                      </div>
                      <div className="running-file">
                        <p className="banner-num">12.</p>
                        <label>
                          Browse
                          <input type="file" id="banner-info-t" />
                        </label>
                      </div>
                      <div className="running-file">
                        <p className="banner-num">13.</p>
                        <label>
                          Browse
                          <input type="file" id="banner-info-t" />
                        </label>
                      </div>
                      <div className="running-file">
                        <p className="banner-num">14.</p>
                        <label>
                          Browse
                          <input type="file" id="banner-info-t" />
                        </label>
                      </div>
                      <div className="running-file">
                        <p className="banner-num">15.</p>
                        <label>
                          Browse
                          <input type="file" id="banner-info-t" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c-c-r-cnt-column-h right">
            <div className="c-c-r-cnt-c-inner-column left ">
              <div className="content-column-grid-h">
                <div className="content-column-g-row head">
                  <div className="mr-head-component">
                    <div className="hall-zone">
                      <div className="hall-zone-info">
                        <div className="hall-zone-info-l">
                          <div className="hall-zone-info-l-btn">
                            <label for="hall">Hall</label>
                            <select id="hall" className="hall-select">
                              <option value="red">Red</option>
                              <option value="green">Green</option>
                              <option value="blue">Blue</option>
                            </select>
                          </div>
                          <div className="hall-zone-info-l-btn">
                            <label for="zone">Zone</label>
                            <select id="zone" className="hall-select">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                          </div>
                        </div>
                        <div className="hall-zone-info-r">
                          <div className="hz-info">
                            <div className="hz-rr-item"></div>
                            <p className="hz-title">Running row</p>
                          </div>
                          <div className="hz-info">
                            <div className="hz-banner-num-item">1</div>
                            <p className="hz-title">Banner number</p>
                          </div>
                          <div className="hz-info">
                            <div className="hz-logo-item"></div>
                            <p className="hz-title">Logo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mr-head-cont">
                  <div className="scrollable-holder-h">
                    <div className="scrollable-container-h">
                      <div className="content-column-g-row center">
                        <div className="mr-center-component">
                          <div className="hall-zone-cont">
                            <div className="hz-logo-item"></div>
                            <div className="hz-logo-item"></div>
                            <div className="hz-logo-item"></div>
                            <div className="hz-logo-item"></div>
                            <div className="hall-zone-cont-rr"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of branding and file info */}

        {/* Right bottom content */}
        <div className="content-c-row-h center">
          <div className="c-c-r-cnt-column-h left">
            <div className="content-column-grid-h">
              <div className="content-column-g-row head">
                <div className="common-component-head">
                  <p className="content-c-g-title">
                    Attached files from participants
                    <i className="_icon-information-outline"></i>
                  </p>
                  <div className="input-holder">
                    <input type="text" placeholder="search" className="input" />
                    <i className="_icon-search"></i>
                  </div>
                </div>
              </div>
              <div className="content-column-g-row center">
                <div className="content-c-component">
                  <div className="scrollable-holder-h">
                    <div className="scrollable-container-h">
                      <div className="content-column-g-block-info">
                        <div className="content-column-g-block">
                          <p>Johan deley, CEO of defly inc.</p>
                        </div>
                        <div className="content-column-g-block">
                          <div className="content-column-g-r-item">
                            <i className="_icon-Icon-material-photo"></i>
                            <p>Lorem ipsum dolor.jpg</p>
                            <i className="_icon-trash"></i>
                          </div>
                          <div className="content-column-g-r-item">
                            <i className="_icon-file"></i>
                            <p>Lorem ipsum dolor.jpg</p>
                            <i className="_icon-trash"></i>
                          </div>
                          <div className="content-column-g-r-item">
                            <i className="_icon-Icon-material-photo"></i>
                            <p>Lorem ipsum dolor.pdf</p>
                            <i className="_icon-trash"></i>
                          </div>
                          <div className="content-column-g-r-item">
                            <i className="_icon-Icon-material-photo"></i>
                            <p>Lorem ipsum dolor.jpg</p>
                            <i className="_icon-trash"></i>
                          </div>
                          <p>Johan deley, CEO of defly inc.</p>
                        </div>
                        <div className="content-column-g-block">
                          <div className="content-column-g-r-item">
                            <i className="_icon-Icon-material-photo"></i>
                            <p>Lorem ipsum dolor.jpg</p>
                            <i className="_icon-trash"></i>
                          </div>
                          <div className="content-column-g-r-item">
                            <i className="_icon-Icon-material-photo"></i>
                            <p>Lorem ipsum dolor.jpg</p>
                            <i className="_icon-trash"></i>
                          </div>
                          <div className="content-column-g-r-item">
                            <i className="_icon-Icon-material-photo"></i>
                            <p>Lorem ipsum dolor.jpg</p>
                            <i className="_icon-trash"></i>
                          </div>
                          <div className="content-column-g-r-item">
                            <i className="_icon-Icon-material-photo"></i>
                            <p>Lorem ipsum dolor.jpg</p>
                            <i className="_icon-trash"></i>
                          </div>
                          <p>Johan deley, CEO of defly inc.</p>
                        </div>
                        <div className="content-column-g-block">
                          <div className="content-column-g-r-item">
                            <i className="_icon-Icon-material-photo"></i>
                            <p>Lorem ipsum dolor.jpg</p>
                            <i className="_icon-trash"></i>
                          </div>
                          <div className="content-column-g-r-item">
                            <i className="_icon-Icon-material-photo"></i>
                            <p>Lorem ipsum dolor.jpg</p>
                            <i className="_icon-trash"></i>
                          </div>
                          <div className="content-column-g-r-item">
                            <i className="_icon-Icon-material-photo"></i>
                            <p>Lorem ipsum dolor.jpg</p>
                            <i className="_icon-trash"></i>
                          </div>
                          <div className="content-column-g-r-item">
                            <i className="_icon-Icon-material-photo"></i>
                            <p>Lorem ipsum dolor.jpg</p>
                            <i className="_icon-trash"></i>
                          </div>
                          <p>Johan deley, CEO of defly inc.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-column-g-row bottom">
                <div className="left-bottom-component">
                  {/* <button className="btn type-1">Browse</button> */}
                  <label
                    className="btn type-1 attache-file-btn"
                    for="upload-photo"
                  >
                    Browse
                  </label>
                  <input
                    type="file"
                    name="document"
                    id="upload-file"
                    className="upload-file"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="c-c-r-cnt-column-h right">
            <div className="c-c-r-cnt-c-inner-column left ">
              <div className="content-column-grid-h">
                <div className="content-column-g-row head">
                  <div className="mr-head-component">
                    <div className="mr-head-component-cont">
                      <p className="mr-head-component-title mr-head-component-title-2">
                        Meeting Room 3
                      </p>
                      <div className="mr-head-buttons">
                        <div className="buttons-holder">
                          <button className="small-btn mr-head-btn mr-head-btn-active">
                            Public
                          </button>
                          <button className="small-btn mr-head-btn">
                            Private
                          </button>
                          <span className="button-bg"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mr-head-cont">
                  <div className="scrollable-holder-h">
                    <div className="scrollable-container-h">
                      <div className="content-column-g-row center">
                        <div className="mr-center-component">
                          <div className="mr-center-content">
                            <img
                              src="https://picsum.photos/seed/picsum/1920/1080"
                              alt=""
                            />
                          </div>

                          <div className="mr-center-c-info">
                            <div
                              className="mr-center-c-info-text"
                              style={{ display: "none" }}
                            >
                              <p className="mr-center-c-text">
                                <span>Current meeting room details:</span>{" "}
                                23/10/2020, 11:00am-1:00pm (GMT+4)
                              </p>
                              <p className="mr-center-c-text">
                                <span>Duration:</span> 1 Hour
                              </p>
                            </div>
                            <div className="mr-center-c-info-time">
                              <div className="mr-center-c-time-start">
                                <span className="info-time-title">Starts</span>
                                <div className="mr-center-c-time-btn-group">
                                  <button class="small-btn small-btn-type-3 mr-center-c-time-btn">
                                    <span>21 Oct 2020 / 4:00 PM</span>
                                  </button>
                                </div>
                              </div>
                              <div className="mr-center-c-time-duration">
                                <span className="info-time-title">
                                  Duration
                                </span>
                                <div className="mr-center-c-time-btn-group">
                                  <button class="small-btn small-btn-type-3 mr-center-c-time-btn">
                                    30min.
                                  </button>
                                  <button class="small-btn small-btn-type-3 mr-center-c-time-btn">
                                    1h.
                                  </button>
                                  <button class="small-btn small-btn-type-3 mr-center-c-time-btn">
                                    2h
                                  </button>
                                  <button class="small-btn small-btn-type-3 mr-center-c-time-btn">
                                    Expo period
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-column-g-row bottom">
                  <div className="mr-bottom-component">
                    <button className="btn type-2 mr-bottom-btn">
                      Save changes
                    </button>
                    <button className="btn type-3 mr-bottom-btn">
                      Delete room
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="c-c-r-cnt-c-inner-column left "
              style={{ display: "none" }}
            >
              <div className="content-column-grid-h">
                <div className="content-column-g-row head">
                  <div className="mr-head-component">
                    <div className="mr-head-component-cont">
                      <div className="mr-head-component-title">
                        Meeting Room 3
                      </div>
                      <div className="mr-head-buttons">
                        <div className="buttons-holder">
                          <button className="small-btn mr-head-btn small-btn-type-2">
                            Private
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mr-center-component-holder">
                  <div className="scrollable-holder-h">
                    <div className="scrollable-container-h">
                      <div className="content-column-g-row center">
                        <div className="mr-center-component">
                          <div className="mr-center-content">
                            <img
                              src="https://picsum.photos/seed/picsum/1920/1080"
                              alt=""
                            />
                          </div>
                          <div className="mr-center-c-info">
                            <div className="mr-center-c-info-text">
                              <p className="mr-center-c-text">
                                <span>Current meeting room details:</span>{" "}
                                23/10/2020, 11:00am-1:00pm (GMT+4)
                              </p>
                              <p className="mr-center-c-text">
                                <span>Duration:</span> 1 Hour
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-column-g-row bottom">
                  <div className="mr-bottom-component">
                    <button className="btn type-3"> delete room</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="c-c-r-cnt-c-inner-column right">
              <div className="content-column-grid-h">
                <div className="content-column-g-row head">
                  <div className="common-component-head">
                    <p className="content-c-g-title">
                      Participants <span>(8)</span>
                    </p>

                    <div className="input-holder">
                      <input
                        type="text"
                        placeholder="search"
                        className="input"
                      />
                      <i className="_icon-search"></i>
                    </div>
                  </div>
                </div>
                <div className="content-column-g-row center">
                  <div className="content-c-component">
                    <div className="scrollable-holder-h">
                      <div className="scrollable-container-h">
                        <div className="content-column-g-block">
                          <div className="content-col-g-r-item">
                            <p>Johan Delly, CEO of Delly inc.</p>
                            <i className="_icon-times"></i>
                          </div>
                          <div className="content-col-g-r-item">
                            <p>Johan Delly, CEO of Delly inc.</p>
                            <i className="_icon-times"></i>
                          </div>
                          <div className="content-col-g-r-item">
                            <p>Johan Delly, CEO of Delly inc.</p>
                            <i className="_icon-times"></i>
                          </div>
                          <div className="content-col-g-r-item">
                            <p>Johan Delly, CEO of Delly inc.</p>
                            <i className="_icon-times"></i>
                          </div>
                          <div className="content-col-g-r-item">
                            <p>Johan Delly, CEO of Delly inc.</p>
                            <i className="_icon-times"></i>
                          </div>
                          <div className="content-col-g-r-item">
                            <p>Johan Delly, CEO of Delly inc.</p>
                            <i className="_icon-times"></i>
                          </div>
                          <div className="content-col-g-r-item">
                            <p>Johan Delly, CEO of Delly inc.</p>
                            <i className="_icon-times"></i>
                          </div>
                          <div className="content-col-g-r-item">
                            <p>Johan Delly, CEO of Delly inc.</p>
                            <i className="_icon-times"></i>
                          </div>
                          <div className="content-col-g-r-item">
                            <p>Johan Delly, CEO of Delly inc.</p>
                            <i className="_icon-times"></i>
                          </div>
                          <div className="content-col-g-r-item">
                            <p>Johan Delly, CEO of Delly inc.</p>
                            <i className="_icon-times"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-column-g-row bottom">
                  <div className="left-bottom-component">
                    <button className="btn type-1">invite</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of right bottom content */}
      </div>
      {/* End of right main content */}
    </div>
  );
};

export default NewComponent;
