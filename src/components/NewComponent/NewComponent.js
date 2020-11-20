import React from "react";
import Logo from "../../assets/images/Logo.png";
// import "../../assets/sass/main.scss";

const NewComponent = () => {
  return (
    <div className="content-h">
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
                    {/* <span className="left-c-c-value">2</span> */}
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
                    {/* <span className="left-c-c-value">2</span> */}
                    <i className="_icon-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-column-g-row bottom">
            <div className="left-bottom-component">
              <button className="btn type-1">Creat room</button>
              <p>
                Made with <i className="_icon-heart-icon"></i> by PandaMR
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-column-h right">
        <div className="content-c-row-h head">
          <div className="content-c-row-h-inner">
            <div className="content-c-row-h-i-column">
              <button className="active">Expo name 3</button>
              <button className="">
                <i></i>Meeting room
              </button>
              <button>
                <i></i>Meeting room 3
              </button>
            </div>
            <div className="content-c-row-h-i-column">
              <p>
                <span>Expo details:</span> 20/10/2020-20/11/2020
              </p>
            </div>
          </div>

          <div className="meeting-room-info">
            <div class="m-room-info-table">
              <div class="m-room-info-thead">
                <div class="m-room-info-row">
                  <div class="m-room-info-cell">Date</div>
                  <div class="m-room-info-cell">Room name</div>
                  <div class="m-room-info-cell">Creator</div>
                  <div class="m-room-info-cell">Creator company</div>
                  <div class="m-room-info-cell">Type</div>
                </div>
              </div>

              <div class="m-room-info-tbody">
                <div class="m-room-info-row">
                  <div className="m-room-info-row-wrp">
                    <div class="m-room-info-cell">3:35 pm, 11/10/2020</div>
                    <div class="m-room-info-cell">Room name 1</div>
                    <div class="m-room-info-cell">Name Last name</div>
                    <div class="m-room-info-cell">Company 1</div>
                    <div class="m-room-info-cell">
                      Private
                      <div className="m-room-info-cell-edit">
                        <i className="_icon-Icon-material-edit"></i>
                        <i className="_icon-left-arrow"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="m-room-info-row">
                  <div className="m-room-info-row-wrp">
                    <div class="m-room-info-cell">4:45 pm, 08/10/2020</div>
                    <div class="m-room-info-cell">Room name 2</div>
                    <div class="m-room-info-cell">Name Last name</div>
                    <div class="m-room-info-cell">Company 2</div>
                    <div class="m-room-info-cell">
                      Public
                      <div className="m-room-info-cell-edit">
                        <i className="_icon-Icon-material-edit"></i>
                        <i className="_icon-left-arrow"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="m-room-info-row">
                  <div className="m-room-info-row-wrp">
                    <div class="m-room-info-cell">Expo period, 28/09/2020</div>
                    <div class="m-room-info-cell">Room name 3</div>
                    <div class="m-room-info-cell">Name Last name</div>
                    <div class="m-room-info-cell">Company 3</div>
                    <div class="m-room-info-cell">
                      Private
                      <div className="m-room-info-cell-edit">
                        <i className="_icon-Icon-material-edit"></i>
                        <i className="_icon-left-arrow"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="m-room-info-row">
                  <div className="m-room-info-row-wrp">
                    <div class="m-room-info-cell">Expo period, 28/09/2020</div>
                    <div class="m-room-info-cell">Room name 4</div>
                    <div class="m-room-info-cell">Name Last name</div>
                    <div class="m-room-info-cell">Company 4</div>
                    <div class="m-room-info-cell ">
                      Private
                      <div className="m-room-info-cell-edit">
                        <i className="_icon-Icon-material-edit"></i>
                        <i className="_icon-left-arrow"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="m-room-info-row">
                  <div className="m-room-info-row-wrp">
                    <div class="m-room-info-cell">Expo period, 28/09/2020</div>
                    <div class="m-room-info-cell">Room name 5</div>
                    <div class="m-room-info-cell">Name Last name</div>
                    <div class="m-room-info-cell">Company 5</div>
                    <div class="m-room-info-cell">
                      Private
                      <div className="m-room-info-cell-edit">
                        <i className="_icon-Icon-material-edit"></i>
                        <i className="_icon-left-arrow"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="m-room-info-row">
                  <div className="m-room-info-row-wrp">
                    <div class="m-room-info-cell">Expo period, 28/09/2020</div>
                    <div class="m-room-info-cell">Room name 6</div>
                    <div class="m-room-info-cell">Name Last name</div>
                    <div class="m-room-info-cell">Company 6</div>
                    <div class="m-room-info-cell">
                      Private
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
                <p>1</p>
                <p>2</p>
                <p className="pagination-item-active">3</p>
                <p>4</p>
                <p>5</p>
                <i className="_icon-arrow-right"></i>
              </div>

              <button className="small-btn small-btn-transp m-room-info-btn">
                Create
              </button>
            </div>
          </div>
        </div>
<<<<<<< HEAD

        {/* End of right top content */}
=======
>>>>>>> parent of 931598d (Updated)

        <div className="user-info-grid-holder">
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
                      <p>(min 10, max 150 chars)</p>
                      <input className="subject" placeholder="Subject" />
                    </div>
                    <div className="inside-info-user-content">
                      <p>(min 200, max 1000 chars)</p>
                      <textarea
                        className="short"
                        placeholder="Short description"
                      />
                    </div>
                    <input
                      className="with-files"
                      type="submit"
                      value="Submit without files"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-c-row-h center" style={{ display: "none" }}>
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
                          <i className="_icon-Icon-material-photo"></i>
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
              <div className="content-column-g-row bottom">
                <div className="left-bottom-component">
                  <button className="btn type-1">Browse</button>
                </div>
              </div>
            </div>
          </div>
          <div className="c-c-r-cnt-column-h right">
            <div className="c-c-r-cnt-c-inner-column left">
              <div className="content-column-grid-h">
                <div className="content-column-g-row head">
                  <div className="mr-head-component">
                    Meeting Room 3
                    <div className="mr-head-buttons">
                      <button className="small-btn small-btn-blue mr-head-btn">
                        Create
                      </button>
                    </div>
                  </div>
                </div>
                <div className="content-column-g-row center">
                  <div className="mr-center-component">
                    <div className="mr-center-content"></div>
                  </div>
                </div>
                <div className="content-column-g-row bottom">
                  <div className="mr-bottom-component">
                    <button className="btn type-2">save changes</button>
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
      </div>
    </div>
  );
};

export default NewComponent;
