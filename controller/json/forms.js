// File for pages forms
const forms = {
  login: {
    id: "1",
    logInInputs: [
      {
        id: "usernameregisterInput",
        type: "text",
        name: "username",
        className: "loginInput",
        placeholder: "Username",
        icon: "PersonOutlineIcon",
      },
      {
        id: "passwordregisterInput",
        type: "text",
        name: "password",
        className: "loginInput",
        placeholder: "Password",
        icon: "LockOutlinedIcon",
      },
    ],
  },

  register: {
    id: "2",
    registerInputs: [
      {
        label: "First Name",
        type: "text",
        name: "firstName",
        className: "registerInput",
      },
      {
        label: "Last Name",
        type: "text",
        name: "lastName",
        className: "registerInput",
      },
      {
        label: "Username",
        type: "text",
        name: "username",
        className: "registerInput",
      },
      {
        label: "Email",
        type: "text",
        name: "email",
        className: "registerInput",
      },
      {
        label: "Password",
        type: "password",
        name: "password",
        className: "registerInput",
      },
      {
        label: "Confirm Password",
        type: "password",
        name: "confirmPassword",
        className: "registerInput",
      },
    ],
  },

  contactUs: {
    id: "3",
    contactUsInputs: [
      {
        label: "Username",
        type: "text",
        name: "username",
        className: "inputField",
        placeholder: "Username",
      },
      {
        label: "Email",
        type: "text",
        name: "email",
        className: "inputField",
        placeholder: "Email",
      },
      {
        label: "Message",
        type: "text",
        name: "message",
        className: "messageInput",
        placeholder: "Message",
      },
    ],
  },
};

module.exports = forms;
