import React from "react";
import examIcon from "../../assets/exam.svg";
import studentIcon from "../../assets/student.svg";
import "./Record.css";
const Record = () => {
  return (
    <>
      <div className="record-container">
        <div className="sub-record">
          <div className="count-container">
            <span>Today's Test</span>
            <span>530000</span>
          </div>
          <div>
            <img src={examIcon} alt="for test" className="record-icons" />
          </div>
        </div>
        <div className="sub-record">
          <div className="count-container">
            <span>Pass Students</span>
            <span>200000</span>
          </div>
          <div>
            <img src={studentIcon} alt="for test" className="record-icons" />
          </div>
        </div>
        <div className="sub-record">
          <div className="count-container">
            <span>Fail students</span>
            <span>1020</span>
          </div>
          <div>
            <img src={studentIcon} alt="for test" className="record-icons" />
          </div>
        </div>
        <div className="sub-record">
          <div className="count-container">
            <span>Total Students</span>
            <span>400000</span>
          </div>
          <div>
            <img src={studentIcon} alt="for test" className="record-icons" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Record;
