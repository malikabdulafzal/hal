import React from "react";
import Navbar from "./Navbar";
import "./AboutUs.css";
import Top from "./Top.jsx";

function AboutUs() {
  return (
    <div className="body-nav">
      <Navbar />
      <main className="about-us__container fcc">
        <section className="about-us__section fc" style={{ width: "100%" }}>
          <h3 style={{ fontWeight: "800", color: "var(--black-text-color)" }}>
            Why us
          </h3>
          <p
            style={{ color: "var(--black-75-text-color)", textAlign: "center" }}
          >
            Our software revolutionizes talent acquisition and skill development
            for organizations, tech companies, universities, and colleges.
            Through aptitude and coding tests, it streamlines the hiring
            process, providing efficient assessment management and insightful
            analysis reports. Businesses and educational institutions benefit
            from accurate candidate evaluations, skill gap analysis, and a
            platform promoting personal and professional growth. The software
            facilitates data-driven decision-making, increases overall
            efficiency, and contributes to improved quality of hires. By
            aligning with market demands, it supports individuals in upskilling
            and positions organizations as modern and efficient in talent
            acquisition, enhancing their employer brand.
          </p>
        </section>
        <section
          className="about-us__section fc"
          style={{ width: "100%", background: "transparent" }}
        >
          <h3 style={{ fontWeight: "800", color: "var(--black-text-color)" }}>
            Who are we?
          </h3>
          <p style={{ color: "var(--black-75-text-color)" }}>
            {" "}
            We are the students of UCP at the final semester
          </p>
        </section>
      </main>
      <hr style={{ borderBlockColor: "var(--black-75-text-color)" }}></hr>
      <Top />
    </div>
  );
}

export default AboutUs;
