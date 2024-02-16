// import React from "react";
// import Modal from "react-modal";
// import "./ReactCropper.css";
// import Avatar from "react-avatar-edit";
// import { useState } from "react";

// const ReactCropper = () => {
//   const [im, setim] = useState(null);

//   const customStyles = {
//     content: {
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//       border: "0",
//     },
//   };
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }
//   const onCrop = (i) => {
//     setim(i);
//   };
//   const onClose = () => {
//     closeModal();
//   };
//   return (
//     <>
//       <div className="home">
//         <div>
//           <img src={im ? im : "null"} />
//         </div>

//         <button onClick={openModal}>select file</button>
//         <Modal
//           isOpen={modalIsOpen}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
//           <Avatar width={390} height={295} onCrop={onCrop} onClose={onClose} />
//         </Modal>
//       </div>
//     </>
//   );
// };

// export default ReactCropper;

import React, { useState } from "react";
import Modal from "react-modal";
import Avatar from "react-avatar-edit";

const ReactCropper = () => {
  const [im, setIm] = useState(null);
  const [filename, setFilename] = useState("No file selected");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "0",
    },
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onCrop = (croppedImage) => {
    setIm(croppedImage);
  };

  const onSave = () => {
    if (im) {
      // Update the filename when image is cropped
      const newFilename = `cropped_image_${Date.now()}.png`;
      setFilename(newFilename);
    }
  };

  const onClose = () => {
    closeModal();
  };

  return (
    <>
      <div className="home">
        <button onClick={openModal}>Select File</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Avatar Cropper Modal"
        >
          <div>
            <span className="add_new_course_typo">Add New Course</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Course Name"
              className="add_course_input"
            ></input>
            <hr />
          </div>
          <Avatar
            width={390}
            height={295}
            onCrop={onCrop}
            onClose={onClose}
            border={[10, 10]}
          />
          <button onClick={onSave}>Save Cropped Image</button>
          <div>{filename}</div>
        </Modal>
      </div>
    </>
  );
};

export default ReactCropper;
