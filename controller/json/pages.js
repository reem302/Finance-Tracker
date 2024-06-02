// File for pages content
const pages = {
  header: {
    id: "-1",
    title: "Finance Tracker",
    logOut: "LogOut",
    content: [
      { key: "paymentTracker", text: "Track Payment" },
      { key: "categorizedExpenses", text: "Categorized Expenses" },
      { key: "viewProfile", text: "View Profile" },
    ],
    logoForHeader: {
      path: "/images/logoForHeader.png",
      alt: "Logo",
      className: "logoImg",
    },
  },

  footer: {
    id: "-2",
    pagesLinks: [
      { key: "contactUs", text: "Contact Us" },
      { key: "aboutUs", text: "About Us" },
    ],
    reservedRights: "2024 FinanceTracker. All rights reserved.",
  },

  languageButton: {
    id: "-3",
    languages: [
      { value: "eng", text: "ENG" },
      { value: "heb", text: "HEB" },
    ],
  },

  background: {
    id: "-4",
    backgroundImage: {
      path: "/images/backgroundImage.png",
      className: "image",
      alt: "BackgroundImage",
    },
    logoImage: {
      path: "/images/logoImage.jpg",
      alt: "Logo",
      className: "logoImage",
    },
  },

  login: {
    id: "1",
    title: "User login",
    icon: "AccountCircleIcon",
    backButton: "Back",
    logInButton: "Login",
    content: {
      dontHaveAccount: "Don't have an account?",
      continueWith: "or continue with",
      joinNow: "Join Now",
    },
    googleImage: {
      path: "/images/google.png",
      className: "googleImage",
      alt: "googleImage",
    },
  },

  register: {
    id: "2",
    registerTitle: "Register in",
    financeTracker: " Finance Tracker",
    alreadyMember: "Already A Member?",
    signInLink: "Sign In",
    backButton: "Back",
    registerButton: "Register",
    passwrodTitle: "Password must:",
    passwordRules: [
      { content: "Be at least 6 characters long" },
      { content: "Contain uppercase letters" },
      { content: "Contain lowercase letters" },
      { content: "Contain at least 2 digits" },
      { content: "Not contain spaces" },
    ],
  },

  contactUs: {
    id: "3",
    title: "Contact Us",
    submitButton: "Submit",
  },

  aboutUs: {
    id: "4",
    title: "About Us",
    description:
      "Welcome to Finance Tracker, your go-to solution for effortless expense tracking and management.\n Our platform is designed to simplify the way you handle your finances, providing you with powerful tools to keep your spending under control and make informed financial decisions.\nAt Finance Tracker, our mission is to empower individuals and families to take charge of their financial well-being. We believe that managing expenses shouldn't be a daunting task.\n With our user-friendly interface and innovative features, we aim to make financial tracking intuitive, efficient, and even enjoyable.",
    backgroundImage: {
      path: "/images/aboutUsImage.jpg",
      className: "descriptionContent",
      alt: "AboutUs",
    },
  },

  paymentTracker: {
    id: "5",
    pageTitle: "Welcome Back, Reem",
    exportButton: "Export to Excel",
    categorizedExpanses: "Monthly Expenses",
    icon: "NotificationsIcon",
    barChartTitle: {
      content: "Payment History vs Next Payment",
      className: "diagramTitles",
    },
    paymentData: [
      {
        content: "Fortune",
        data: "58,764.25 ₪",
      },
      {
        content: "Current Account",
        data: "10,034.37 ₪",
      },
    ],
    discountImage: {
      path: "/images/discountImage.jpg",
      className: "advertisementImage",
      alt: "Discount Image",
    },
    couponImage: {
      path: "/images/couponImage.jpg",
      className: "advertisementImage",
      alt: "Coupon Image",
    },
  },

  HomePage: {
    id: "6",
    getStarted: "Let's Get Started",
    homePageTitle: [
      { className: "welcomeText", content: "Welcome to Finance Tracker" },
      {
        className: "titleContent",
        content: "Explore our features and offerings",
      },
    ],
    intro: {
      introText: "Start managing your expenses with ease",
      signUpText: "Sign up now and take control of your finances",
    },
    features: [
      {
        content:
          "Track your payment history and upcoming payments effortlessly",
        icon: "MonetizationOnIcon",
      },
      {
        content:
          "Categorize your expenses to gain better insights into your spending habits",
        icon: "AutoAwesomeMosaicIcon",
      },
      {
        content: "Upload your receipt to scan and add it to the expensess",
        icon: "DocumentScannerIcon",
      },
    ],
    logoImage: {
      path: "/images/logoImage.jpg",
      alt: "Logo",
      className: "logo",
    },
    backgroundImage: {
      path: "/images/backgroundImage.png",
      className: "image",
      alt: "BackgroundImage",
    },
  },

  categorizedDiagram: {
    id: "7",
    labels: [
      "Food",
      "Utilities",
      "Mortgage",
      "House Rent",
      "Transportation",
      "Clothing",
      "Health Care",
      "Insurance",
      "Others",
      "Entertainment",
    ],
    data: [1500, 2500, 1000, 1700, 700, 950, 3000, 1200, 3000, 2800],
  },

  barChart: {
    id: "8",
    labels: ["January", "February", "March", "April", "May", "June"],
    paymentHistory: [150, 300, 450, 600, 750, 900],
    nextPayment: [500],
    filterLabel: "Select period: ",
    months: [
      { content: "1 Month", value: "1m" },
      { content: "3 Months", value: "3m" },
      { content: "6 Months", value: "6m" },
    ],
  },
};

module.exports = pages;
