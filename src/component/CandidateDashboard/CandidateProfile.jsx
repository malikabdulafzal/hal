import React from "react";

import Style from "./CandidateProfile.module.css";
import { URL } from "./../../serverUrl.js";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CandidateProfile = () => {
  const [profileData, setProfileData] = React.useState({
    firstName: "",
    lastName: "",
    education: "",
    country: "",
  });

  React.useEffect(() => {
    // Read profile data from local storage
    const storedProfileData = JSON.parse(localStorage.getItem("user"));

    // If profile data exists in local storage, update state
    if (storedProfileData) {
      setProfileData(storedProfileData);
    }
  }, []);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(profileData));

    const token = localStorage.getItem("token");

    try {
      const response = await axios.patch(
        `${URL}api/v1/users/updateme`,
        profileData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Profile updated successfully");
        console.log("Profile updated successfully");
      } else {
        toast.warn("Failed to update profile");
        console.error("Failed to update profile");
      }
    } catch (error) {
      toast.warn("Failed to update profile");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className={Style.parent}>
        <div>
          <h1 className={Style.title}>Candidate Profile</h1>
        </div>
        <div>
          <div className={Style.nameContainer}>
            <div>
              <div className={`${Style.Inner} ${Style.typography}`}>
                <span>First Name</span>
                <input
                  type="text"
                  className={Style.input}
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleChange}
                  placeholder="first name"
                />
              </div>
            </div>
            <div>
              <div className={`${Style.Inner} ${Style.typography}`}>
                <span>Last Name</span>

                <input
                  type="text"
                  className={Style.input}
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleChange}
                  placeholder="lastname"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${Style.Inner} ${Style.typography}`}>
          <span>Email</span>

          <input
            type="text"
            className={Style.input1}
            name="email"
            value={profileData.email}
            placeholder="enter email "
            disabled
          />
        </div>
        <div className={`${Style.Inner} ${Style.typography}`}>
          <span>Select Education</span>

          <select
            name="education"
            id="graduate"
            value={profileData.education}
            onChange={handleChange}
            className={Style.select}
          >
            <option value="BSSE">BSSE</option>
            <option value="BSCS">BSCS</option>
            <option value="BBA"> BBA</option>
            <option value="MASS">MASS COM</option>
            <option value="DPHARM">D PHARM</option>
            <option value="LAW">BS LAW</option>
            <option value="DIGITALMARKETING">BS DIGITAL MARKETING</option>
            <option value="CA">CA</option>
          </select>
        </div>
        <div className={`${Style.Inner} ${Style.typography}`}>
          <span>Country</span>

          <input
            type="text"
            name="country"
            value={profileData.country}
            onChange={handleChange}
            className={Style.input1}
            placeholder="Country"
          />
        </div>
        <div className={Style.btnContainer}>
          <button className={Style.btn} onClick={handleSubmit}>
            Save Profile
          </button>
          {/* <button className={Style.btn1}>Cancel</button> */}
        </div>
      </div>
    </>
  );
};
export default CandidateProfile;
