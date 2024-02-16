import Card from "./Card.jsx";
import Title from "./Title.jsx";
import "./Service.css";
import { HashLink } from "react-router-hash-link";
function Service() {
  return (
    <>
      <section id="sectionService" className="services">
        <Title />
        <div className="Cardbox">
          <Card
            serviceTitle="Assessment Solutions"
            serviceDescription="Comprehensive assessment tools for individuals and organizations, including aptitude tests, coding challenges, and skill assessments.
            Benefits: Enables accurate evaluation of candidates' abilities, aiding in talent acquisition and decision-making processes."
            fileName1="pic1.jpg"
          />
          <Card
            serviceTitle="Learning Resources Hub"
            serviceDescription="A centralized platform offering a diverse range of learning resources such as online courses, tutorials, articles, videos, and interactive materials.
            Benefits: Facilitates personal and professional development, allowing users to upskill based on market demands."
            fileName1="22.jpg"
          />
          <Card
            serviceTitle="Customizable Assessments"
            serviceDescription="Tailored assessment solutions with customization options for employers, universities, and colleges to create and manage their own assessments.Streamlines the hiring process and educational institution assessments, providing flexibility for specific needs"
            fileName1="pic33.jpg"
          />
          <Card
            serviceTitle="Analysis Report Generation"
            serviceDescription="Automated generation of detailed analysis reports for each participant, providing insights into strengths, weaknesses, and areas for improvement.Supports data-driven decision-making for employers, universities, and colleges during talent acquisition and candidate evaluation."
            fileName1="pic4.jpg"
          />
          <Card
            serviceTitle="Continuous Improvement "
            serviceDescription="Ongoing services for analyzing user feedback, engagement patterns, and assessment results to identify areas for platform improvement.
            Benefits: Ensures the platform evolves to meet changing user needs, enhancing overall functionality and user experience."
            fileName1="pic5.jpg"
          />
          <Card
            serviceTitle="Data Security "
            serviceDescription="Robust measures to ensure the security and privacy of user data, including personal information and assessment results.
            Benefits: Builds trust among users and organizations, addressing concerns related to data privacy and compliance with regulations."
            fileName1="pic6.jpg"
          />
        </div>
      </section>
    </>
  );
}
export default Service;
