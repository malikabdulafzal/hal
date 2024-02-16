import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Cropper from "react-easy-crop";
// import { getOrientation } from "get-orientation/browser";
import { getCroppedImg, getRotatedImage } from "./canvasUtils";
import "./Cropperr.css";

const ORIENTATION_TO_ANGLE = {
  3: 180,
  6: 90,
  8: -90,
};

const Cropperr = ({ imageParentSet }) => {
  const [imageSrc, setImageSrc] = React.useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [imageName, setImageName] = useState("");

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );
      console.log("donee", { croppedImage }, typeof croppedImage);
      setCroppedImage(croppedImage);
      imageParentSet(croppedImage);
    } catch (e) {
      console.error(e);
    }
  };

  const onClose = () => {
    setImageSrc(null);
  };

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file) {
        setImageName(file.name);
      }
      let imageDataUrl = await readFile(file);
      console.log("imageDateUrl:", imageDataUrl, file);

      try {
        // apply rotation if needed
        const orientation = await getOrientation(file);
        const rotation = ORIENTATION_TO_ANGLE[orientation];
        if (rotation) {
          imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
        }
      } catch (e) {
        console.warn("failed to detect the orientation");
      }

      setImageSrc(imageDataUrl);
      setCroppedImage(null);
      imageParentSet(null);
    }
  };

  return (
    <div>
      <React.Fragment>
        {croppedImage ? (
          <div>
            <img src={croppedImage} alt="Cropped" className="img-cropped" />
          </div>
        ) : (
          <div className="hahaha">
            <div className="cropContainer">
              <Cropper
                image={imageSrc}
                crop={crop}
                rotation={rotation}
                zoom={zoom}
                aspect={16 / 9}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                cropSize={{ width: 266, height: 150 }}
              />
            </div>
            <div className="cropperBtnContainer">
              <div>
                <button
                  onClick={showCroppedImage}
                  className="cropperBtn"
                  // variant="contained"
                  // color="primary"
                  // classes={{ root: classes.cropButton }}
                >
                  OK
                </button>
              </div>
              <button onClick={onClose} className="cancelCropperBtn">
                Cancel
              </button>
            </div>
            {/* <ImgDialog img={croppedImage} onClose={onClose} /> */}
          </div>
        )}

        <input type="file" onChange={onFileChange} accept="image/*" />
        {/* <span>NO Image </span> */}
      </React.Fragment>
    </div>
  );
};

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

// const StyledDemo = withStyles(styles)(Demo);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<StyledDemo />, rootElement);
export default Cropperr;
