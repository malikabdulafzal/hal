import React from "react";
import Style from "./CandidateCourses.module.css";
import axios from "axios";
import { URL } from "./../../serverUrl.js";

const CandidateCourses = () => {
  const data = [
    {
      Name: "University of Central Punjab",
      courseName: "Computer Communication & Networks",
      type: "course",
    },
    {
      Name: "University of Central Punjab",
      courseName: "Computer Communication & Networks",
      type: "course",
    },
    {
      Name: "University of Central Punjab",
      courseName: "Computer Communication & Networks",
      type: "course",
    },
  ];

  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await axios.get(`${URL}api/v1/users/course`);
        console.log("course response:", response.data.data.course);
        setCourses(response.data.data.course); // Assuming response.data is an array of courses
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={Style.container}>
        {courses.map((val, key) => {
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
              <h3 className={Style.courseName}>{val.courseName}</h3>
              <span className={Style.type}>Course</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CandidateCourses;
