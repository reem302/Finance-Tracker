// Function to fetch page data for a specific page
export const fetchPageData = async (pageName) => {
  try {
    // Fetch page data from the server
    const response = await fetch(
      `http://localhost:3001/pageData/${pageName}`,
      {
        method: "POST",
      });
    if (!response.ok) {
      throw new Error(`Failed to fetch pages data, status: ${response.status}`);
    }
    // Parse response as JSON and return the data
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching pages data:", error);
    return null;
  }
};

// Function to fetch forms data for a specific page 
export const fetchFormData = async (pageName, userInput) => {
  try {
    const response = await fetch(`http://localhost:3001/formData/${pageName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
      },
      body: JSON.stringify(userInput), // Send user input as JSON
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch form data, status: ${response.status}`);
    }
    // Parse response as JSON and return the data
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error("Error fetching form data:", error);
    return null;
  }
};
