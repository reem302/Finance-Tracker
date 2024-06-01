import React, { Component } from "react";
import "./contactUs.css";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer, toast } from "react-toastify";
import { fetchFormData, fetchPageData } from "../../services/fetchData";

// Component for contact us page
export default class ContactUs extends Component {

  // Intialize the component state
  constructor(props) {
    super(props);
    // State holds the data that needs to be rendered
    this.state = {
      formData: null,
      pagesData: null,
      formDataValues: {}, // State to hold form data values
    };
  }

  async componentDidMount() {
    try {
      const pageName = "contactUs";
      const pagesData = await fetchPageData(pageName);
      const formData = await fetchFormData(pageName, {});
      if (pagesData && formData) {
        this.setState({ pagesData, formData });
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      this.setState({ error: "Failed to fetch data" });
    }
  }

  // Updates the form state
  handleInputChange = (e) => {
    const { name, value } = e.target; // e.target represents DOM element that triggered the event
    // Add the new state to the prevState
    this.setState((prevState) => ({
      formDataValues: {
        ...prevState.formDataValues,
        [name]: value,
      },
    }));
  };

  // Check if the inputs are valid
  validInputs = () => {
    const { formDataValues, formData } = this.state;
    const contactUsInputs = formData.contactUsInputs;
    // Check if all form fields have values
    const allFieldsFilled = contactUsInputs.every((input) => {
      // Gets the value associated with the current input's name
      const value = formDataValues[input.name];
      return value;
    });
    if (allFieldsFilled) return true;
    else {
      toast.error("Fill all fields please!", {
        position: "bottom-center",
        hideProgressBar: true,
      });
      return false;
    }
  };

  // Handles submit click
  handleSubmit = async (e) => {
    e.preventDefault();
    if (!this.validInputs()) return;
    const { formDataValues } = this.state;
    try {
      // Send form data to backend
      const formData = await fetchFormData("contactUs", formDataValues);

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
    const { formData, pagesData, formDataValues } = this.state;
    if (!formData || !pagesData) {
      return null;
    }

    const { setIsOpen } = this.props;
    const title = pagesData.title;
    const submitButton = pagesData.submitButton;
    const backgroundImage = pagesData.backgroundImage;
    const contactUsInputs = formData.contactUsInputs;

    return (
      <>
        <div className="darkBG" onClick={() => setIsOpen(false)} />
        <div className="centered">
          <div className="modal">
            <div className="modalHeader">
              <div className="contactUsTitle">{title}</div>
              <button className="closeBtn" onClick={() => setIsOpen(false)}>
                <CloseIcon className="closeIcon" />
              </button>
            </div>
            <div className="modalContent">

              {/* Contact us image */}
              <div
                className="contactUsImage"
                style={{ backgroundImage: `url(${backgroundImage.path})` }}
              >

                {/* Extract inputs from JSON */}
                <form className="contactUsForm" onSubmit={this.handleSubmit}>
                  {contactUsInputs.map((input) => (
                    <div className="formGroup" key={input.name}>
                      <input
                        type={input.type}
                        name={input.name}
                        value={formDataValues[input.name]}
                        className={input.className}
                        placeholder={input.placeholder}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  ))}
                  <button type="submit" className="submitButton">
                    {submitButton}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </>
    );
  }
}
