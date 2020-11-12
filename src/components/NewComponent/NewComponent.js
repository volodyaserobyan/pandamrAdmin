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
                <i className="_icon-chevron-left-icon"></i>Expo name 3
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
              <button className="active">Meeting room</button>
              <button>Meeting room 3</button>
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
                  <div class="m-room-info-cell">3:35 pm, 11/10/2020</div>
                  <div class="m-room-info-cell">Room name 1</div>
                  <div class="m-room-info-cell">Name Last name</div>
                  <div class="m-room-info-cell">Company 1</div>
                  <div class="m-room-info-cell m-room-info-cell-edit">
                    Private
                    <i className="_icon-pencil-icon"></i>
                    <i className="_icon-chevron-left-icon"></i>
                  </div>
                </div>
                <div class="m-room-info-row">
                  <div class="m-room-info-cell">4:45 pm, 08/10/2020</div>
                  <div class="m-room-info-cell">Room name 2</div>
                  <div class="m-room-info-cell">Name Last name</div>
                  <div class="m-room-info-cell">Company 2</div>
                  <div class="m-room-info-cell m-room-info-cell-edit">
                    <span>Public</span>
                    <i className="_icon-pencil-icon"></i>
                    <i className="_icon-chevron-left-icon"></i>
                  </div>
                </div>
                <div class="m-room-info-row">
                  <div class="m-room-info-cell">Expo period, 28/09/2020</div>
                  <div class="m-room-info-cell">Room name 3</div>
                  <div class="m-room-info-cell">Name Last name</div>
                  <div class="m-room-info-cell">Company 3</div>
                  <div class="m-room-info-cell m-room-info-cell-edit">
                    Private
                    <i className="_icon-pencil-icon"></i>
                    <i className="_icon-chevron-left-icon"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="m-room-info-pagination">
              <ul className="pagination-items">
                <li>
                  <i className="_icon-left-arrow"></i>
                </li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>
                  <i className="_icon-arrow-right"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-c-row-h center">
          <div className="c-c-r-cnt-column-h left">
            <div className="content-column-grid-h">
              <div className="content-column-g-row head">
                <div className="common-component-head">
                  <p className="content-c-g-title">
                    Attached files from participants
                    <i className="_icon-information-outline"></i>
                  </p>
                  <input type="text" placeholder="search" className="input" />
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
                  <div className="mr-head-component">Meeting Room 3</div>
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
                    <input type="text" placeholder="search" className="input" />
                  </div>
                </div>
                <div className="content-column-g-row center">
                  <div className="content-c-component">
                    <div className="scrollable-holder-h">
                      <div className="scrollable-container-h">
                        <div className="content-column-g-holder">
                          <p>Johan deley, CEO of defly inc.</p>
                          <p>Johan deley, CEO of defly inc.</p>
                          <p>Johan deley, CEO of defly inc.</p>
                          <p>Johan deley, CEO of defly inc.</p>
                          <p>Johan deley, CEO of defly inc.</p>
                          <p>Johan deley, CEO of defly inc.</p>
                          <p>Johan deley, CEO of defly inc.</p>
                          <p>Johan deley, CEO of defly inc.</p>
                          <p>Johan deley, CEO of defly inc.</p>
                          <p>Johan deley, CEO of defly inc.</p>
                          <p>Johan deley, CEO of defly inc.</p>
                          <p>Johan deley, CEO of defly inc.</p>
                          <p>Johan deley, CEO of defly inc.</p>
                          <p>Johan deley, CEO of defly inc.</p>
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
