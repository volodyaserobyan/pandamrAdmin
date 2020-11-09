import React from "react";
import "./ImageCropper.scss";

const ImageCropper = (props) => {
  return (
    <div className="image-crop-holder">
        <div className="image-crop-cont">
            <div>
                <h1 className="image-crop-title">Cropper</h1>
            </div>
            <div className="image-crop-dimensions">
                <span className="dimensions-text">Dimensions</span>
                <button className="dimension-button dimension-selected">1200 <span>&times;</span> 628px</button>
                <button className="dimension-button dimension-selectable">1200 <span>&times;</span> 600px</button>
            </div>
            <div className="crop-image">
                {/*<img  src="" alt="Image to crop"/>*/}
            </div>
            <div className="cropper-buttons">
                <button className="cropper-button cropper-button-reset">Reset</button>
                <button className="cropper-button cropper-button-save">Save</button>
            </div>
        </div>
    </div>
  );
};

export default ImageCropper;
