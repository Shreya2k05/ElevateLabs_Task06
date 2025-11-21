🚀 Web Development Internship Task 6: Contact Form Validation
This project demonstrates proficiency in client-side form handling and validation using HTML, CSS, and vanilla JavaScript, fulfilling Task 6 of the ElevateLabs Internship.

📄 Brief Description
A robust client-side contact form implementation using HTML, CSS, and Vanilla JavaScript. The project focuses on core web development skills, featuring full input validation, RegEx for accurate email format checking, and dynamic user feedback with modern, accessible styling. Submission is simulated and prevented until all inputs pass validation.

✨ Features Implemented
Client-Side Validation: All inputs (Name, Email, Message) are validated using JavaScript.

Non-Empty Checks: Ensures all required fields are filled.

Email Format Validation: Uses Regular Expressions (Regex) for accurate email syntax checking.

User Feedback: Clear, context-specific error messages are displayed immediately below the failed input field.

Form Prevention: Submission is prevented when validation fails.

Success Simulation: A success message is displayed upon valid submission.

🛠️ Technology Stack
Technology	Purpose
HTML5	Semantic structure for the form and input fields.
CSS3	Styling for clarity, modern aesthetics, and visual error cues.
JavaScript (ES6)	Core logic for input validation, error handling, and form submission control.

Export to Sheets

📁 Project Structure
.
├── index.html          # Main HTML structure and form layout.
├── style.css           # Enhanced CSS styles for visual presentation and error highlighting.
└── script.js           # JavaScript logic for form validation (validation function, regex, error display).
⚙️ How to Run Locally
Clone the Repository:

Bash

git clone https://github.com/Shreya2k05/ElevateLabs_Task06
Navigate to the Directory:

Bash

cd "C:\Users\Shreya Gupta\OneDrive\Desktop\html-form"
Open in Browser: Open the index.html file directly in your web browser (VS Code's Live Server extension is recommended for quick development testing).

💡 Key Implementation Details
The validation is handled by the validateForm() JavaScript function, which is triggered via the onsubmit="return validateForm()" attribute on the <form> tag.

Email Regex
The following Regular Expression is used in script.js to test for a valid email format:

JavaScript

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
Visual Error Handling
The script.js file dynamically adds the .invalid class to input elements upon failure. This class is styled in style.css to provide immediate visual feedback (a red border) to the user.
