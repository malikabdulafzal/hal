import React from "react";

const Picture = () => {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <img
        src="../src/assets/back.jpeg"
        alt="Description of the picture"
        style={{
          height: "100vh",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5))",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          textAlign: "center",
          color: "blueviolet",
          fontSize: "30px",
        }}
      >
        <h1>Learning and Hiring</h1>
        <p>Skill Up & Get Hired Easily</p>
      </div>
    </div>
  );
};

export default Picture;
