import React from "react";
import "./AddCandidates.css";

const AddCandidates = () => {
  const [email, setEmail] = React.useState(false);
  const [blur, setBlur] = React.useState(false);
  const toggleModalEmail = () => {
    setBlur(!blur);
    setEmail(!email);
  };

  return (
    <>
      <div className={`${blur && "course-blur"}`}></div>
      <div>
        <table className={`courses-container`}>
          <tbody>
            {/* <tr className="title-container"> */}
            <th className="table-head-typo text-align-left"> Candidate Name</th>
            <th className="table-head-typo ">Status</th>

            <th className="table-head-typo "> Email</th>

            <th className="table-head-typo text-align-left">Send Email Link</th>

            {/* </tr> */}

            <tr>
              <td className="text-align-left">
                <span className="course-typo ">Abdul Afzal</span>
              </td>
              <td>
                <span className="status-typo online p-4-12">Sent</span>
              </td>
              <td className="add-view-icon">
                {/* <AddIcon width="24px" /> */}
                abdulafzal4004@gmail.com
              </td>
              <td className="text-align-left">
                <button onClick={toggleModalEmail} className="save_course_btn">
                  sent email
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className={`modal-container ${email ? "modal-open" : "modal-close"}`}
      >
        <div className="modal-content1">
          <div className="titleContainer">
            <span className="add_new_course_typo"> Title Name</span>
            <input
              type="text"
              placeholder=" enter Title name"
              className="titleInput"
            />
          </div>
          <div>
            <span className="desciptionColor">Add Body Description</span>
            <textarea
              type="text"
              placeholder="Add Description here.."
              className="add_course_input"
            ></textarea>
            <hr />
          </div>
          <div className="add_course_btn_container">
            <button className="cancel_course_btn" onClick={toggleModalEmail}>
              Cancel
            </button>
            <button className="save_course_btn" onClick={toggleModalEmail}>
              sent email
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCandidates;
