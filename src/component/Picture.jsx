import React from "react";

const Picture = () => {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <img
        src="../src/assets/picture1.jpg"
        alt="Description of the picture"
        style={{
          height: "80vh",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
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
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1>Learning and Hiring</h1>
        <p>Skill Up & Get Hired Easily</p>
      </div>
    </div>
  );
};

export default Picture;
