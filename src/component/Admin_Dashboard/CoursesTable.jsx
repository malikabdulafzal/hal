import { useState } from "react";
import React from "react";

import "./CoursesTable.css";
import AddIcon from "../../assets/add.svg";
import AddIconWhite from "../../assets/addWhite.svg";

import viewIcon from "../../assets/view.svg";
import crossIcon from "../../assets/x.svg";
import circleIcon from "../../assets/circle.svg";
import fillIcon from "../../assets/fill.svg";
import editIcon from "../../assets/edit.svg";
// import ReactCropper from "./ReactCropper";
import Cropperr from "./Cropperr";

import axios from "axios";
import { baseUrl } from "./../../serverUrl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const CoursesTable = () => {
  const [selectValue, setSelectValue] = React.useState("short");
  const [blur, setBlur] = useState(false);
  const [name, setName] = React.useState("");
  const [questionType, setQuestionType] = React.useState(false);
  const [quizList, setQuizList] = React.useState(false);
  const [add, setAdd] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [newCourse, setNewCourse] = React.useState({});

  const toggleModalAdd = () => {
    // setBlur(!blur);
    setAdd(!add);
  };

  const toggleModalEdit = (courseId) => {
    setBlur(!blur);
    setEdit(!edit);
    setCourseId(courseId)
  };
  const toggleModalQuestionType = (courseId) => {
    console.log("the value of blur", blur);
    console.log("the value of questionType", questionType);
    console.log("courseId", courseId);
    setCourseId(courseId);

    setBlur(!blur);
    setQuestionType(!questionType);
    console.log("After blur", blur);
    console.log("After questionType", questionType);
  };
  const toggleModalQuizList = (value, quizData) => {
    console.log("quiz data:", quizData);
    setBlur(!blur);
    setQuizList(!quizList);
    setName(value);
    setQuizData(quizData);
  };

  const inputArr = [
    {
      value: "option1",
    },
  ];

  const [optionArray, setOptionArray] = useState(inputArr);
  const [text, settext] = useState("");
  const [courseName, setCourseName] = useState("");
  const [croppedImage, setCroppedImage] = useState(null);

  const handlecloseModal = () => {
    setModal(false);
  };

  const addInput = () => {
    setOptionArray((oldState) => [
      ...oldState,
      {
        value: `option${oldState.length + 1}`,
      },
    ]);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const index = e.target.id;
    setOptionArray((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      return newArr;
    });
  };
  const data = [
    {
      courseName: "OOP",
      status: "online",
      add_quiz: "+",
      Added_Date: "22/12/2024",
      Edit: "edit",
    },
    {
      courseName: "DSA",
      status: "offline",
      add_quiz: "+",

      Added_Date: "22/12/2024",
      Edit: "edit",
    },
    {
      courseName: "DBMS",
      status: "offline",
      add_quiz: "+",
      Added_Date: "22/12/2024",
      Edit: "edit",
    },
  ];

  const handleSelect = (value) => {
    console.log("value select:", value);
    setSelectValue(value);
  };

  const convertfiletobase64 = (file) =>
    new promise((resolve, reject) => {
      const reader = new filereader();
      reader.readasdataurl(file.rawfile);

      reader.onload = () =>
        resolve({
          filename: file.title,
          base64: reader.result,
        });
      reader.onerror = reject;
    });

  const handleAddNewCourse = async () => {
    let base64;
    // const response1 = await axios.get(croppedImage, { responseType: "blob" });

    // let reader = new FileReader();
    // reader.readAsDataURL(response1.data);
    // reader.onloadend = function () {
    //   let base64String = reader.result;
    // };

    try {
      const token = localStorage.getItem("token");

      // const newFile = await readFile(response1.data);
      const formData = new FormData();
      // formData.append("photo", newFile);
      formData.append("courseName", courseName);
      console.log("newFileUrl:", formData, courseName);

      const response = await axios.post(
        `${baseUrl}api/v1/admins/course`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response:", response.data);
      if (response.status === 201) {
        setCourses((prevCourses) => [
          ...prevCourses,
          response.data.data.course,
        ]);
        toast.success("Course added");
        toggleModalAdd();
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        toast.error(error.response.data.message);
      }
      console.log("Error:", error);
    }
  };
  const handleAddQuizToCourse = async () => {
    toggleModalQuestionType();
    try {
      const token = localStorage.getItem("token");

      const data = {
        question: newQuestion,
        option: optionArray.map((element) => element.value),
        correctOption: correctOption,
        type: selectValue,
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
  const [newQuestion, setNewQuestion] = React.useState([]);
  const [correctOption, setCorrectOption] = React.useState([]);
  const [courseId, setCourseId] = React.useState("");
  const [quizData, setQuizData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await axios.get(`${baseUrl}api/v1/admins/course`);
        console.log("admin course response:", response.data.data.course);
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
          <div>
            <img src={AddIconWhite} alt="" />
          </div>
          New Courses;
        </button>
      </div>
      <div>
        <table className={`courses-container`}>
          <tbody>
            {/* <tr className="title-container"> */}
            <th className="table-head-typo text-align-left">Courses Name</th>

            <th className="table-head-typo ">Status</th>
            <th className="table-head-typo ">Quiz</th>

            <th className="table-head-typo text-align-left">Created Date</th>

            <th className="table-head-typo"> Edit</th>
            {/* </tr> */}
            {courses.map((val, key) => {
              return (
                <tr key={key}>
                  <td className="text-align-left">
                    <span className="course-typo ">{val.courseName}</span>
                  </td>

                  <td>
                    <span className="status-typo online p-4-12">
                      {val.status ? "online" : "offline"}
                    </span>
                  </td>
                  <td className="add-view-icon">
                    {/* <AddIcon width="24px" /> */}
                    <img
                      src={AddIcon}
                      alt="for add"
                      onClick={() => toggleModalQuestionType(val._id)}
                    />
                    <img
                      src={viewIcon}
                      alt="for view"
                      onClick={() =>
                        toggleModalQuizList(val.courseName, val.quiz)
                      }
                    />
                  </td>
                  <td className="text-align-left">
                    <span className="date-typo ">
                      {new Date(val.Added_Date).toLocaleDateString()}
                    </span>
                  </td>

                  <td>
                    {/* <span className="edit-typo" onClick={toggleModalAdd}>
                      {val.Edit}
                    </span> */}
                    <img
                      src={editIcon}
                      alt="for view"
                      onClick={()=>toggleModalEdit(val._id,val.courseName)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={` ${!quizList && "hidden"} view-modal-parent`}>
        <div className="quizlist-name">
          <h1>{name} Quiz Question</h1>
          <img
            src={crossIcon}
            alt="for cross"
            onClick={() => toggleModalQuizList(null, [])}
          />
        </div>
        <div className="quizList-container">
          {quizData.length > 0 ? (
            quizData.map((Element, index) => {
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
          ) : (
            <span>no quiz added</span>
          )}
        </div>
      </div>
      <div className={`add-modal-parent ${!questionType && "hidden"} `}>
        <div className="Choose-a-type row">
          <div className="add-left-part">
            <div>
              <div
                className={`short-part ${selectValue === "mcqs" && "hidden"}`}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Enter your question"
                    className="mk-qts "
                    onChange={(e) => setNewQuestion(e.target.value)}
                  />
                </div>
                <hr />
                <div>
                  <input
                    type="text"
                    placeholder="Short-answer text"
                    className="mk-ans"
                  />
                </div>
              </div>
              <div
                className={`mcqs-part ${selectValue === "short" && "hidden"}`}
              >
                <div>
                  <input
                    name="newQuestion"
                    type="text"
                    placeholder="Enter your question"
                    className="mk-qts "
                    onChange={(e) => setNewQuestion(e.target.value)}
                  />
                </div>
                <div>
                  {optionArray.map((item, i) => (
                    <input
                      key={i}
                      onChange={handleChange}
                      value={item.value}
                      id={i}
                      type={item.type}
                      size="40"
                      className="radio-input-part"
                    />
                  ))}
                </div>
                <div className="add-option-container">
                  <input type="radio" />
                  <button className="option-btn" onClick={addInput}>
                    Add option
                  </button>
                </div>
                <div className="add-option-container">
                  {optionArray.length > 0 && (
                    <div>
                      <span for="correctAnser">correct answer</span>
                      <input
                        name="correctAnser"
                        onChange={(e) => setCorrectOption(e.target.value)}
                        type="number"
                        min={1}
                        max={optionArray.length}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="right-part">
            <div>
              <label for="category" className="select-label-typography">
                Choose a type:
              </label>
            </div>

            <select
              id="type"
              className="qts-select"
              onChange={(e) => handleSelect(e.target.value)}
            >
              <option value="short">Short answer</option>
              <option value="mcqs">Multiple Choice</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="submit-btn-container">
            <button
              onClick={() => toggleModalQuestionType()}
              className="submit-btn"
            >
              Cancel
            </button>
          </div>
          <div className="submit-btn-container">
            <button
              className="submit-btn"
              onClick={() => handleAddQuizToCourse()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className={`modal-container ${add ? "modal-open" : "modal-close"}`}>
        <div className="modal-content">
          <span className="add_new_course_typo">Add New Course</span>
          <div className="CourseNameUploadParent">
            <div>
              <input
                type="text"
                placeholder="Enter Course Name"
                className="add_course_input"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              ></input>
              <hr />
            </div>
            <div className="uploadContainer">
              <span className="uploadTypo"> Upload Course Image</span>
              <Cropperr imageParentSet={setCroppedImage} />
            </div>
          </div>
          <div className="add_course_btn_container">
            <button className="cancel_course_btn" onClick={toggleModalAdd}>
              Cancel
            </button>
            <button className="save_course_btn" onClick={handleAddNewCourse}>
              Save
            </button>
          </div>
        </div>
      </div>
      <div className={`modal-container ${edit ? "modal-open" : "modal-close"}`}>
        <div className="modal-content">
          <span className="add_new_course_typo">Edit Course</span>
          <div>
            <input
              type="text"
              placeholder="Enter Course Name"
              className="add_course_input"
              value={text}
              onChange={(e) => settext(e.target.value)}
            ></input>
            <hr />
          </div>
          <div className="add_course_btn_container">
            <button className="cancel_course_btn" onClick={toggleModalEdit}>
              Cancel
            </button>
            <button className="save_course_btn" onClick={toggleModalEdit}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result);
    // reader.onloadend = () => resolve(reader.result.split(",")[1]);
    // reader.addEventListener("load", () => resolve(reader.result), false);
  });
}
export default CoursesTable;
