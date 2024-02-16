import React from "react";
import Style from "./CandidateCourses.module.css";
import "./CandidateTest.css";
import { useState } from "react";

// import "./CoursesTable.css";
import AddIcon from "../../assets/add.svg";
import AddIconWhite from "../../assets/addWhite.svg";

import viewIcon from "../../assets/view.svg";
import crossIcon from "../../assets/x.svg";
import circleIcon from "../../assets/circle.svg";
import fillIcon from "../../assets/fill.svg";
import editIcon from "../../assets/edit.svg";
// import ReactCropper from "./ReactCropper";
// import Cropperr from "./Cropperr";

import axios from "axios";
import { Url } from "./../../serverUrl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CandidateTest = () => {
  const data = [
    {
      Name: "University of Central Punjab",
      courses: "Computer Communication & Networks",
      type: "OOP",
    },
    {
      Name: "University of Central Punjab",
      courses: "Computer Communication & Networks",
      type: "DSA",
    },
    {
      Name: "University of Central Punjab",
      courses: "Computer Communication & Networks",
      type: "DB",
    },
  ];

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
              <button
                className="pretty-button"
                onClick={() => toggleModalQuizList(val.courses)}
              >
                Start
              </button>
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
                <button>Submit</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CandidateTest;
