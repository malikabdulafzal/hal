import "./Contact.css";
import { HashLink } from "react-router-hash-link";
function Contact() {
  return (
    <>
      <section id="sectionContact">
        <div className="main-section">
          <div className="contact-container ">
            <div className="contact-child half-container">
              <h1>Contact Us</h1>

              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input-field text-16"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input-field text-16"
                />
              </div>
              <div>
                <textarea
                  name="textarea"
                  id="textareaid"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="textarea-field text-16"
                ></textarea>
              </div>
              <button className="sbmt-btn">Submit</button>
            </div>

            <div className="half-container center imgcolor">
              <img src="./src/assets/img.jpg" alt="hiring" className="img2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
