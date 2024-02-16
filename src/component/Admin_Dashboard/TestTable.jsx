import React from "react";
import crossIcon from "../../assets/x.svg";
import { useState } from "react";
import viewIcon from "../../assets/view.svg";
import circleIcon from "../../assets/circle.svg";
import fillIcon from "../../assets/fill.svg";
import editIcon from "../../assets/edit.svg";
import AddIconWhite from "../../assets/addWhite.svg";
import "./TestTable.css";
import axios from "axios";
import { baseUrl } from "./../../serverUrl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { data, coursesData } from "../../dataset";

const TestTable = () => {
  const [courseQuizArray, setCourseQuizArray] = React.useState([]);
  const [name, setName] = React.useState("");
  const [quizList, setQuizList] = React.useState(false);

  const [date, setDate] = useState(new Date());

  const [check, setCheck] = useState(new Array(data.length).fill(false));
  const [totalMarks, setTotalMarks] = useState(new Array(data.length).fill(1));
  const [quizTotalMarks, setQuizTotalMarks] = useState(0);
  const [add, setAdd] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [blur, setBlur] = useState(false);
  const [text, settext] = useState("");
  const [testName, setTestName] = useState("");
  const [courseIdArray, setCourseIdArray] = useState([]);
  const toggleModalQuizList = (value, quizArray) => {
    // console.log("abudl", value);
    setBlur(!blur);
    setQuizList(!quizList);
    setName(value);
    setCourseQuizArray(quizArray);
  };
  const toggleModalAdd = () => {
    setBlur(!blur);
    setAdd(!add);
  };
  const toggleModalEdit = (val) => {
    setBlur(!blur);
    setEdit(!edit);
    setName(val.test);
  };
  const handlertotalMarks = (e, key) => {
    console.log(e.target.value);
    setTotalMarks((oldState) => {
      const newArray = [...oldState];
      newArray[key] = +e.target.value;

      return newArray;
    });
    let sumOfNumber = 0;
    check.forEach((element, index) => {
      console.log(
        "for each number:",
        totalMarks[index],
        typeof totalMarks[index]
      );
      if (element) {
        sumOfNumber += totalMarks[index];
      }
    });

    setQuizTotalMarks(sumOfNumber);
    console.log("setTotalMarks", sumOfNumber);
  };
  const handlecloseModal = () => {
    console.log("Course Name:", text);

    setModal(false);
    setBlur(!blur);
  };
  const handleCheck = (e, key) => {
    setCheck((oldState) => {
      const newArray = [...oldState];
      newArray[key] = e.target.checked;

      return newArray;
    });
    console.log("handleCheck", check, key, e.target.checked);
  };

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    return `${month}/${date}/${year} `;
  }
  function getTime() {
    const today_time = new Date();
  }
  const DateSetQuiz = [
    {
      question: "Four Pillars of OOP",
      type: "short",
    },
    {
      question: "Is C++ is statically or dynamically language?",
      option: ["a", "b", "c", "d"],
      correctOption: 2,
      type: "mcqs",
    },
    {
      question: "Four Pillars of OOP",
      type: "short",
    },
    {
      question: "Is C++ is statically or dynamically language?",
      option: ["a", "b", "c", "d"],
      correctOption: 1,
      type: "mcqs",
    },
  ];
  function getFormattedNow() {
    const now = new Date();
    return now.toISOString().slice(0, 16);
  }
  const [startTime, setStartTime] = useState(getFormattedNow());
  const [endTime, setEndTime] = useState(getFormattedNow());

  function handleStartTimeChange(event) {
    const newStartTime = event.target.value;
    setStartTime(newStartTime);

    // Update end time only if it's currently empty or less than the new start time
    if (!endTime || endTime < newStartTime) {
      setEndTime(newStartTime);
    }
  }

  function handleEndTimeChange(event) {
    setEndTime(event.target.value);
  }

  const handleAddTest = async () => {
    // toggleModalQuestionType();
    try {
      const token = localStorage.getItem("token");

      const data = {
        test: testName,
        status: true,
        courseId: courseIdArray,
        start_time: startTime,
        end_time: endTime,
      };
      console.log("api data add quiz:", data);
      const response = await axios.post(
        `${baseUrl}api/v1/admins/course/${courseId}/quiz`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response:", response.data);
      if (response.status === 201) {
        // setCourses((prevCourses) => [
        //   ...prevCourses,
        //   response.data.data.course,
        // ]);
        toast.success("Quiz added");
        // toggleModalAdd();
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        toast.error(error.response.data.message);
      }
      console.log("Error:", error);
    }
  };
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await axios.get(`${baseUrl}api/v1/admins/course`);
        console.log(
          "in test admin course response:",
          response.data.data.course
        );
        setCourses(response.data.data.course); // Assuming response.data is an array of courses
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={`${blur && "course-blur"}`}></div>
      <div className="caption-container">
        <button className="add-course-btn" onClick={toggleModalAdd}>
          <img src={AddIconWhite} alt="" /> New Test
        </button>
      </div>

      <table className="courses-container">
        <tbody>
          {/* <tr className="title-container"> */}
          <th className="table-head-typo text-align-left">Test Name</th>

          <th className="table-head-typo ">Status</th>

          <th className="table-head-typo text-align-left">Created Date</th>
          <th className="table-head-typo text-align-left">Start Time</th>
          <th className="table-head-typo text-align-left">End Time</th>
          <th className="table-head-typo text-align-left">Show Quiz</th>
          <th className="table-head-typo"> Edit</th>
          {/* </tr> */}
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td className="text-align-left">
                  <span className="course-typo ">{val.test}</span>
                </td>
                <td>
                  <span className="status-typo online p-4-12">
                    {val.status}
                  </span>
                </td>

                <td className="text-align-left">
                  <span className="date-typo ">{val.Added_Date}</span>
                </td>
                <td className="text-align-left">
                  <span>{val.start_time}</span>
                </td>
                <td className="text-align-left">
                  <span>{val.end_time}</span>
                </td>
                <td>
                  <img
                    src={viewIcon}
                    alt="for view"
                    onClick={() =>
                      toggleModalQuizList(val.test, val.courseQuiz)
                    }
                  />
                </td>

                <td>
                  <span
                    className="edit-typo"
                    onClick={() => toggleModalEdit(val)}
                  >
                    <img src={editIcon} alt="for view" />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={`modal-container ${add ? "modal-open" : "modal-close"}`}>
        <div className="test-modal-content">
          <span className="add_new_course_typo">Add New Test</span>
          <div>
            <input
              type="text"
              placeholder="Enter Test Name"
              className="add_course_input"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
            ></input>
            <hr />
          </div>
          <div>
            <label for="startTime">Select Courses:</label>
            {courses.map((val, key) => {
              console.log("the value of val", val);

              return (
                <div key={key} className="select-container">
                  <div className="tickContainer">
                    <input
                      type="checkbox"
                      id={`courses-${key}`}
                      name="courses"
                      onChange={(e) => handleCheck(e, key)}
                    />
                    <label htmlFor={`courses-${key}`}>{val.courseName}</label>
                  </div>

                  <div className="checkboxTypeContainer">
                    <input
                      type="number"
                      min="1"
                      value={totalMarks[key]}
                      max={val.quiz.length}
                      onChange={(e) => handlertotalMarks(e, key)}
                      {...console.log(
                        "value of check",
                        check[key] ? false : true,
                        check
                      )}
                      disabled={!check[key]}
                      className="checkboxType"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="date-time-container">
            <label for="startTime">Start Time:</label>

            <input
              type="datetime-local"
              id="startTime"
              name="startTime"
              value={startTime}
              onChange={handleStartTimeChange}
              required
            />

            <label for="endTime">End Time:</label>
            <input
              type="datetime-local"
              id="endTime"
              name="endTime"
              value={endTime}
              min={startTime}
              onChange={handleEndTimeChange}
              required
            />
          </div>

          <div className="totalMarksContainer">
            <label for="totalMarks">Total Marks</label>

            <input
              disabled
              type="text"
              id="startTime"
              name="startTime"
              required
              value={quizTotalMarks}
            />
          </div>

          <div className="add_course_btn_container">
            <button className="cancel_course_btn" onClick={toggleModalAdd}>
              Cancel
            </button>
            <button className="save_course_btn" onClick={handlecloseModal}>
              Save
            </button>
          </div>
        </div>
      </div>
      <div className={`modal-container ${edit ? "modal-open" : "modal-close"}`}>
        <div className="test-modal-content">
          <span className="add_new_course_typo">Edit New Test</span>
          <div>
            <input
              type="text"
              className="add_course_input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <hr />
          </div>
          <div>
            <label for="startTime">Select Courses:</label>
            {coursesData.map((val, key) => {
              console.log("the value of val", val);

              return (
                <div key={key} className="select-container">
                  <div className="tickContainer">
                    <input
                      type="checkbox"
                      id={`courses-${key}`}
                      name="courses"
                      onChange={(e) => handleCheck(e, key)}
                    />
                    <label htmlFor={`courses-${key}`}>{val.courseName}</label>
                  </div>
                  <div className="checkboxTypeContainer">
                    <input
                      type="number"
                      min="1"
                      value={totalMarks[key]}
                      max={val.quizes.length}
                      onChange={(e) => handlertotalMarks(e, key)}
                      {...console.log(
                        "value of check",
                        check[key] ? false : true,
                        check
                      )}
                      disabled={!check[key]}
                      className="checkboxType"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="date-time-container">
            <label for="startTime">Start Time:</label>

            <input
              type="datetime-local"
              id="startTime"
              name="startTime"
              value={startTime}
              onChange={handleStartTimeChange}
              required
            />

            <label for="endTime">End Time:</label>
            <input
              type="datetime-local"
              id="endTime"
              name="endTime"
              value={endTime}
              min={startTime}
              onChange={handleEndTimeChange}
              required
            />
          </div>

          <div className="totalMarksContainer">
            <label for="totalMarks">Total Marks</label>

            <input
              disabled
              type="text"
              id="startTime"
              name="startTime"
              required
              value={quizTotalMarks}
            />
          </div>

          <div className="add_course_btn_container">
            <button
              className="cancel_course_btn"
              // onClick={() => setEdit(false)}
              onClick={toggleModalEdit}
            >
              Cancel
            </button>
            <button className="save_course_btn" onClick={handlecloseModal}>
              Save
            </button>
          </div>
        </div>
      </div>
      <div className={`add1-modal-parent ${!quizList && "hidden"} `}>
        <div className="quizlist-name">
          <h1>{name} </h1>
          <img
            src={crossIcon}
            alt="for cross"
            onClick={() => toggleModalQuizList("", [])}
          />
        </div>
        <div className="quizList-container">
          {courseQuizArray.map((singleCourse, index1) =>
            singleCourse.quizes.map((Element, index) => {
              return Element.type === "short" ? (
                <div className="quizlist-shortpart">
                  <span>{`${index + 1}. ${Element.question}`}</span>
                  <span>Your Answer</span>
                  <hr />
                </div>
              ) : (
                <div className="quizlist-mcqspart">
                  <span>{`${index + 1}. ${Element.question}`}</span>
                  {Element.option.map((Element2, index2) => {
                    return (
                      <div className="option-part">
                        <img
                          src={
                            Element.correctOption === index2 + 1
                              ? fillIcon
                              : circleIcon
                          }
                          alt="for options"
                        />
                        <span>{Element2}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
export default TestTable;
