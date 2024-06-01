const express = require("express");
const cors = require("cors");
const pagesData = require("./json/pages");
const formsData = require("./json/forms");

const app = express();
app.use(cors());
app.use(express.json());

// Access the form data through req.body
app.use(express.urlencoded({ extended: true }));

const port = 3001;

// Handles POST requests to retrieve content data for a specific page by its name
app.post("/pageData/:pageName", (req, res) => {
  const pageName = req.params.pageName;

  if (pagesData[pageName]) {
    const pageData = pagesData[pageName];
    try {
      // Respond to the client
      res.json(pageData);
    } catch (error) {
      console.error("Error sending page data:", error); 
    }
  } else {
    console.error("page content not found for page:", pageName);
  }
});

// Handles POST requests to process form data for a specific page
app.post("/formData/:pageName", (req, res) => {
  const pageName = req.params.pageName;
  const userInput = req.body;

  if (formsData[pageName]) {
    const formsPage = formsData[pageName]; 
    try {
      // Respond to the client
      res.json(formsPage);
    } catch (error) {
      console.error("Error sending form data:", error);
    }
    
  } else {
    console.error("Form not found for page:", pageName);
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
