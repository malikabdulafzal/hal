import React from "react";
import Style from "./CandidateCourses.module.css";

const CandidateCourses = () => {
  const data = [
    {
      Name: "University of Central Punjab",
      courses: "Computer Communication & Networks",
      type: "course",
    },
    {
      Name: "University of Central Punjab",
      courses: "Computer Communication & Networks",
      type: "course",
    },
    {
      Name: "University of Central Punjab",
      courses: "Computer Communication & Networks",
      type: "course",
    },
  ];

  return (
    <>
      <div className={Style.container}>
        {data.map((val, key) => {
          return (
            <div className={Style.cardParent}>
              <img
                src="../src/assets/ccn.jpg"
                alt="for ccn"
                className={Style.img}
              />
              <div className={Style.organizationContainer}>
                <img
                  src="../src/assets/ucp.jpeg"
                  alt="for ucp"
                  className={Style.img1}
                />
                <span>{val.Name}</span>
              </div>
              <h3 className={Style.courseName}>{val.courses}</h3>
              <span className={Style.type}>{val.type}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CandidateCourses;
