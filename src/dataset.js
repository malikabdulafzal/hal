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

const coursesData = [
  {
    courseName: "OOP",
    status: "online",
    add_quiz: "+",
    quizes: DateSetQuiz,
    Added_Date: "22/12/2024",
    Edit: "edit",
  },
  {
    courseName: "DSA",
    status: "offline",
    add_quiz: "+",
    quizes: DateSetQuiz,
    Added_Date: "22/12/2024",
    Edit: "edit",
  },
  {
    courseName: "DBMS",
    status: "offline",
    add_quiz: "+",
    quizes: DateSetQuiz,
    Added_Date: "22/12/2024",
    Edit: "edit",
  },
];

const data = [
  {
    test: "Recruitment Test 1",
    status: "online",
    add_quiz: "+",
    courseQuiz: coursesData,
    Added_Date: "22/12/2024",
    Edit: "edit",
    start_time: new Date().toLocaleString(),
    end_time: new Date().toLocaleString(),
  },
  {
    test: "Recruitment Test 1",
    status: "offline",
    add_quiz: "+",
    courseQuiz: coursesData,
    quiz: DateSetQuiz,
    Added_Date: "22/12/2024",
    Edit: "edit",
    start_time: new Date().toLocaleString(),
    end_time: new Date().toLocaleString(),
  },
  {
    test: "Recruitment Test 2",
    status: "offline",
    add_quiz: "+",
    courseQuiz: coursesData,
    quiz: DateSetQuiz,
    Added_Date: "22/12/2024",
    Edit: "edit",
    start_time: new Date().toLocaleString(),
    end_time: new Date().toLocaleString(),
  },
];

export { data, coursesData };
