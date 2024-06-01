import React, { Component } from "react";
import "./logIn.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { fetchFormData, fetchPageData } from "../../services/fetchData";
import BackgroundImage from "../../common/backgroundImage/backgroundImage";
import LanguageButton from "../../common/languageButton/languageButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Map to display icons using map
const iconMap = {
  PersonOutlineIcon: PersonOutlineIcon,
  LockOutlinedIcon: LockOutlinedIcon,
};

// Component for login page
export default class LogIn extends Component {

  // Intialize the component state
  constructor(props) {
    super(props);
    // State holds the data that needs to be rendered
    this.state = {
      formData: null,
      pagesData: null,
      username: "",
      password: "",
    };
  }

  async componentDidMount() {
    try {
      const pageName = "login";
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
    const { username, password } = this.state;
    if (username && password) return true;
    else {
      toast.error("Fill all fields please!", {
        position: "bottom-center",
        hideProgressBar: true,
      });
      return false;
    }
  };

  // Handles submit click
  handleFormSubmit =  async (e) => {
    e.preventDefault();
    if (!this.validInputs()) return;
    const { formDataValues } = this.state;
    try {
      // Send form data to backend
      const formData = await fetchFormData("login", formDataValues);

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

  render() {
    const { formData, pagesData} = this.state;
    if (!formData || !pagesData) {
      return null;
    }
    const loginTitle = pagesData.title;
    const loginData = pagesData.content;
    const backButton = pagesData.backButton;
    const logInButton = pagesData.logInButton;
    const googleImage = pagesData.googleImage;
    const logInInputs = formData.logInInputs;

    return (
      <div className="logInContainer">
        <BackgroundImage />
        <div className="login">
          <div className="buttons">
            <LanguageButton />
            <a href="/" className="backButton">
              {backButton}
            </a>
          </div>
          <div className="inputFields">
            <div>
              <div className="userIcon">
                <AccountCircleIcon sx={{ fontSize: 110, color: "#045542" }} />
              </div>
              <div className="title">{loginTitle}</div>
            </div>

            {/* Extract login inputs from JSON using map */}
            <div className="loginForm">
              <form onSubmit={this.handleFormSubmit}>
                {logInInputs.map((input, index) => {
                  const IconComponent = iconMap[input.icon];
                  return (
                    <div className="formItem" key={index}>
                      {IconComponent && (
                        <IconComponent
                          sx={{ fontSize: 35, color: "#5f5f5f" }}
                          className="inputIcon"
                        />
                      )}
                      <input
                        type={input.type}
                        name={input.name}
                        className={input.className}
                        placeholder={input.placeholder}
                        value={this.state[input.name]}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  );
                })}

                <button type="submit" className="loginButton">
                  {logInButton}
                </button>
              </form>
            </div>

            {/* Exctract image from JSON */}
            <div className="googleContainer">
              {loginData.continueWith}
              <img
                src={googleImage.path}
                alt={googleImage.alt}
                className={googleImage.className}
              />
            </div>

            {/* Navigate to register page */}
            <div className="registeContainer">
              <div>{loginData.dontHaveAccount}</div>
              <a href="/register" className="joinNowlink">
                {loginData.joinNow}
              </a>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}