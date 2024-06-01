import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";

function pages() {
  return {
    header: {
      id: "-1",
      title: "Finance Tracker",
      content: [
        { key: "paymentTracker", text: "Track Payment" },
        { key: "categorizedExpenses", text: "Categorized Expenses" },
        { key: "viewProfile", text: "View Profile" },
      ],
    },

    footer: {
      id: "-2",
      pagesLinks: [
        { key: "contactUs", text: "Contact Us" },
        { key: "aboutUs", text: "About Us" },
      ],
      reservedRights: "2024 FinanceTracker. All rights reserved.",
    },

    buttons: {
      id: "-3",
      buttonsText: {
        backButton: "Back",
        languages: [
          { value: "eng", text: "ENG" },
          { value: "heb", text: "HEB" },
        ],
        filter: [
          { value: "one", text: "1M" },
          { value: "two", text: "2M" },
          { value: "three", text: "3M" },
        ],
        logInButton: "Login",
        registerButton: "Register",
        submitButton: "Submit",
        logOut: "LogOut",
        getStarted: "Let's Get Started",
      },
    },

    pagesImages: {
      id: "-4",
      images: {
        backgroundImage: {
          path: "/images/backgroundImage.png",
          className: "image",
          alt: "BackgroundImage",
        },
        logoImage: {
          path: "/images/logoImage.jpg",
          alt: "Logo",
        },
        googleImage: {
          path: "/images/google.png",
          className: "googleImage",
          alt: "googleImage",
        },
        contactUs: {
          path: "/images/contactUsImage.jpg",
          className: "contactForm",
          alt: "contactUsImage",
        },
        aboutUs: {
          path: "/images/aboutUsImage.jpg",
          className: "descriptionContent",
          alt: "AboutUs",
        },
        graphImage: {
          path: "/images/graph2.jpg",
          className: "graphImage",
          alt: "Graph",
        },
      },
    },

    logIn: {
      id: "1",
      title: "User login",
      userIcon: (
        <AccountCircleIcon sx={[{ fontSize: 110 }, { color: "#045542" }]} />
      ),
      content: {
        dontHaveAccount: "Don't have an account?",
        continueWith: "or continue with",
        joinNow: "Join Now",
      },
    },

    register: {
      id: "2",
      registerTitle: "Register in",
      financeTracker: " Finance Tracker",
      alreadyMember: "Already A Member?",
      signInLink: "Sign In",
    },

    contactUs: {
      id: "3",
      title: "Contact Us",
      getInTouchTitle: "We'd love to hear from you !",
    },

    aboutUs: {
      id: "4",
      title: "About Us",
      description:
        "Welcome to Finance Tracker, your go-to solution for effortless expense tracking and management.\n Our platform is designed to simplify the way you handle your finances, providing you with powerful tools to keep your spending under control and make informed financial decisions.\nAt Finance Tracker, our mission is to empower individuals and families to take charge of their financial well-being. We believe that managing expenses shouldn't be a daunting task.\n With our user-friendly interface and innovative features, we aim to make financial tracking intuitive, efficient, and even enjoyable.",
    },

    paymentTracker: {
      id: "4",
      pageTitle: <span className="welcomeBack">Welcome Back, Reem</span>,
      diagramTitles: [
        {
          content: "Payment History",
          value: "$12,135.69",
          className: "diagramTitles",
        },
        {
          content: "Next Payments",
          value: "$10,101.32",
          className: "diagramTitles",
        },
      ],
      notificationIcon: (
        <NotificationsIcon
          sx={[{ fontSize: 25 }, { color: "#000000" }]}
          className="notification-icon"
        />
      ),
      paymentData: [
        {
          value: "total",
          content: "Total Outstanding",
          data: "$58,764.25",
          icon: (
            <MonetizationOnIcon
              sx={[{ fontSize: 25 }, { color: "#045542" }]}
              className="payment-icon"
            />
          ),
        },
        {
          value: "paymentDate",
          content: "Upcoming Payment",
          data: "June 1st, 2024",
          icon: (
            <CalendarMonthIcon
              sx={[{ fontSize: 25 }, { color: "#045542" }]}
              className="calendar-icon"
            />
          ),
        },
      ],
    },

    HomePage: {
      id: "5",
      homePageTitle: [
        { className: "welcomeText", content: "Welcome to Our Website" },
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
          icon: (
            <MonetizationOnIcon
              sx={[{ fontSize: 40 }, { color: "#045542" }]}
              className="payment-icon"
            />
          ),
        },
        {
          content:
            "Categorize your expenses to gain better insights into your spending habits",
          icon: (
            <AutoAwesomeMosaicIcon
              sx={[{ fontSize: 40 }, { color: "#045542" }]}
              className="payment-icon"
            />
          ),
        },
        {
          content: "Upload your receipt to scan and add it to the expensess",
          icon: (
            <DocumentScannerIcon
              sx={[{ fontSize: 40 }, { color: "#045542" }]}
              className="payment-icon"
            />
          ),
        },
      ],
    },
  };
}

export default pages;
