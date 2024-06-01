import React, { Component } from "react";
import "./register.css";
import { fetchFormData, fetchPageData } from "../../services/fetchData";
import BackgroundImage from "../../common/backgroundImage/backgroundImage.js";
import LanguageButton from "../../common/languageButton/languageButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PasswordValidator from "password-validator";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

// Create a password schema
const schema = new PasswordValidator();
schema
  .is()
  .min(6)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits(2)
  .has()
  .not()
  .spaces();

// Component for register page
export default class Register extends Component {

  // Intialize the component state
  constructor(props) {
    super(props);
    // State holds the data that needs to be rendered
    this.state = {
      formData: null,
      pagesData: null,
      error: null,
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPasswordRules: false,
    };
  }

  async componentDidMount() {
    try {
      const pageName = "register";
      const pagesData = await fetchPageData(pageName);
      const formData = await fetchFormData(pageName, {});
      this.setState({ formData, pagesData });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ error: "Failed to fetch data" });
    }
  }

  // Updates the form state
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // Check if the inputs are valid
  validInputs = () => {
    const { firstName, lastName, username, email, password, confirmPassword } =
      this.state;
    if (
      firstName &&
      lastName &&
      username &&
      email &&
      password &&
      confirmPassword
    ) {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match!", {
          position: "bottom-center",
          hideProgressBar: true,
        });
        return false;
      }
      if (!schema.validate(password)) {
        toast.error("Password is too weak!", {
          position: "bottom-center",
          hideProgressBar: true,
        });
        return false;
      }
      if (!email.includes("@")) {
        toast("Email should include @", {
          position: "bottom-center",
          hideProgressBar: true,
          type: "error",
        });
        return false;
      }
      return true;
    } else {
      toast.error("Fill all fields please!", {
        position: "bottom-center",
        hideProgressBar: true,
      });
      return false;
    }
  };

  // Handles submit click
  handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!this.validInputs()) return;
    const { formDataValues } = this.state;
    try {
      // Send form data to backend
      const formData = await fetchFormData("register", formDataValues);

      if (formData) {
        // Reset the form after submission
        this.setState({ formDataValues: {} });
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Update state to display password rules
  togglePasswordRules = () => {
    this.setState((prevState) => ({
      showPasswordRules: !prevState.showPasswordRules,
    }));
  };

  render() {
    const { formData, pagesData, showPasswordRules } = this.state;
    if (!formData || !pagesData) {
      return null;
    }
    const passwrodTitle = pagesData.passwrodTitle;
    const passwordRules = pagesData.passwordRules;
    const backButton = pagesData.backButton;
    const registerButton = pagesData.registerButton;
    const registerInputs = formData.registerInputs;

    return (
      <div className="registerContainer">
        <ToastContainer />
        <BackgroundImage />
        <div className="signInContainer">
          <div className="buttonContainer">
            <div>
              <LanguageButton />
            </div>
            <a href="/login" className="backButton">
              {backButton}
            </a>
          </div>
          <div className="centerItem">
            <div>
              <div className="registerTitle">
                {pagesData.registerTitle}
                <span className="name">{pagesData.financeTracker}</span>
              </div>
            </div>

            {/* Extract register inputs from JSON using map */}
            <form className="form" onSubmit={this.handleFormSubmit}>
              {/* Gets all the names (keys) of registerInputs */}
              {Object.keys(registerInputs).map((key) => {
                const inputProps = registerInputs[key];
                if (inputProps.name === "password") {
                  return (
                    <div key={key}>
                      <div className="labelContainer">
                        <label>{inputProps.label}</label>
                        <HelpOutlineIcon
                          className="passwordIcon"
                          sx={{ fontSize: 20 }}
                          onClick={this.togglePasswordRules}
                        />
                      </div>
                      <input
                        type={inputProps.type}
                        name={inputProps.name}
                        className={inputProps.className}
                        onChange={this.handleInputChange}
                      />
                      {showPasswordRules && (
                        <div className="passwordRules">
                          <div>{passwrodTitle}</div>
                          <ul>
                            {passwordRules.map((rule, index) => (
                              <li key={index}>{rule.content}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <div key={key}>
                    <label>{inputProps.label}</label> <br />
                    <input
                      type={inputProps.type}
                      name={inputProps.name}
                      className={inputProps.className}
                      onChange={this.handleInputChange}
                    />
                  </div>
                );
              })}
              <button type="submit" className="registerButton">
                {registerButton}
              </button>
            </form>

            {/* Navigate to login page */}
            <div className="registerItem">
              {pagesData.alreadyMember}
              <a href="/login" className="signInlink">
                {pagesData.signInLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
