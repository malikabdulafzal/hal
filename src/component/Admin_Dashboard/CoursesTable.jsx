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
import { Url } from "./../../serverUrl";
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

  const toggleModalAdd = () => {
    // setBlur(!blur);
    setAdd(!add);
  };

  const toggleModalEdit = () => {
    setBlur(!blur);
    setEdit(!edit);
  };
  const toggleModalQuestionType = () => {
    console.log("the value of blur", blur);
    console.log("the value of questionType", questionType);

    setBlur(!blur);
    setQuestionType(!questionType);
    console.log("After blur", blur);
    console.log("After questionType", questionType);
  };
  const toggleModalQuizList = (value) => {
    setBlur(!blur);
    setQuizList(!quizList);
    setName(value);
  };

  const inputArr = [
    {
      value: "option1",
    },
  ];

  const [arr, setArr] = useState(inputArr);
  const [text, settext] = useState("");
  const [courseName, setCourseName] = useState("");
  const [croppedImage, setCroppedImage] = useState(null);

  const handlecloseModal = () => {
    setModal(false);
  };

  const addInput = () => {
    setArr((oldState) => [
      ...oldState,
      {
        value: `option${oldState.length + 1}`,
      },
    ]);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      return newArr;
    });
  };
  const data = [
    {
      courses: "OOP",
      status: "online",
      add_quiz: "+",
      Added_Date: "22/12/2024",
      Edit: "edit",
    },
    {
      courses: "DSA",
      status: "offline",
      add_quiz: "+",

      Added_Date: "22/12/2024",
      Edit: "edit",
    },
    {
      courses: "DBMS",
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
    const response1 = await axios.get(croppedImage, { responseType: "blob" });
    // .then((response) => {
    // Extract the Blob object from the response
    // blob = response.data;
    // Use the retrieved Blob object as neededrawfile
    // convertfiletobase64(blob).then(console.log("64:", response.data));
    // console.log("Retrieved Blob:", blob);
    let reader = new FileReader();
    reader.readAsDataURL(response1.data);
    reader.onloadend = function () {
      let base64String = reader.result;
      console.log("Base64 String - ", base64String);

      // Simply Print the Base64 Encoded String,
      // without additional data: Attributes.
      console.log(
        "Base64 String without Tags- ",
        base64String.substr(base64String.indexOf(", ") + 1)
      );
    };

    try {
      const token = localStorage.getItem("token");

      const newFile = await readFile(response1.data);
      const formData = new FormData();
      formData.append("photo", newFile);
      formData.append("courseName", courseName);
      console.log("newFileUrl:", newFile, formData, courseName);

      const response = await axios.post(`${Url}api/v1/admins/course`, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
          Authorization: `Bearer ${token}`, // Include bearer token in the header
        },
        data: formData,
      });

      // Handle success
      console.log("Response:", response.data);
      if (response.status === 201) {
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

  return (
    <>
      <div className={`${blur && "course-blur"}`}></div>
      <div className="caption-container">
        <button className="add-course-btn" onClick={toggleModalAdd}>
          <div>
            <img src={AddIconWhite} alt="" />
          </div>
          New Courses
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
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td className="text-align-left">
                    <span className="course-typo ">{val.courses}</span>
                  </td>

                  <td>
                    <span className="status-typo online p-4-12">
                      {val.status}
                    </span>
                  </td>
                  <td className="add-view-icon">
                    {/* <AddIcon width="24px" /> */}
                    <img
                      src={AddIcon}
                      alt="for add"
                      onClick={toggleModalQuestionType}
                    />
                    <img
                      src={viewIcon}
                      alt="for view"
                      onClick={() => toggleModalQuizList(val.courses)}
                    />
                  </td>
                  <td className="text-align-left">
                    <span className="date-typo ">{val.Added_Date}</span>
                  </td>

                  <td>
                    {/* <span className="edit-typo" onClick={toggleModalAdd}>
                      {val.Edit}
                    </span> */}
                    <img
                      src={editIcon}
                      alt="for view"
                      onClick={toggleModalEdit}
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
            onClick={() => toggleModalQuizList()}
          />
        </div>
        <div className="quizList-container">
          {DateSetQuiz.map((Element, index) => {
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
          })}
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
                    type="text"
                    placeholder="Enter your question"
                    className="mk-qts "
                  />
                </div>
                <div>
                  {arr.map((item, i) => (
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
              id="cars"
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
            <button onClick={toggleModalQuestionType} className="submit-btn">
              Cancel
            </button>
          </div>
          <div className="submit-btn-container">
            <button className="submit-btn">Submit</button>
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
