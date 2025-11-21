🚀 Web Development Internship Task 6: Contact Form ValidationThis project demonstrates proficiency in client-side form handling and validation using HTML, CSS, and vanilla JavaScript, fulfilling Task 6 of the ElevateLabs Internship.🎯 Project ObjectiveThe goal was to construct a functional contact form with robust client-side validation to ensure input quality before submission.✨ Features ImplementedClient-Side Validation: All inputs (Name, Email, Message) are validated using JavaScript.Non-Empty Checks: Ensures all required fields are filled.Email Format Validation: Uses Regular Expressions (Regex) for accurate email syntax checking.User Feedback: Clear, context-specific error messages are displayed immediately below the failed input field.Form Prevention: Submission is prevented when validation fails.Success Simulation: A success message is displayed upon valid submission (simulating a successful server submission without actual data transmission).Responsive and Modern UI: Enhanced CSS for a professional, user-friendly design with visual feedback (focus states, error highlighting).🛠️ Technology StackTechnologyPurposeHTML5Semantic structure for the form and input fields.CSS3Styling for clarity, modern aesthetics, and visual error cues.JavaScript (ES6)Core logic for input validation, error handling, and form submission control.📁 Project Structure.
├── index.html          # Main HTML structure and form layout.
├── style.css           # Enhanced CSS styles for visual presentation and error highlighting.
└── script.js           # JavaScript logic for form validation (validation function, regex, error display).
⚙️ How to Run LocallyClone the Repository:Bashgit clone https://github.com/Shreya2k05/ElevateLabs_Task06
Navigate to the Directory:Bashcd "C:\Users\Shreya Gupta\OneDrive\Desktop\html-form"
Open in Browser:Open the index.html file directly in your web browser (VS Code's Live Server extension is recommended for quick development testing).💡 Key Implementation DetailsThe validation is handled by the validateForm() JavaScript function, which is triggered via the onsubmit="return validateForm()" attribute on the <form> tag in index.html.Email RegexThe following Regular Expression is used in script.js to test for a valid email format:JavaScriptconst emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
This pattern checks for:One or more characters that are not a space or @ ([^\s@]+).Followed by an @ symbol.Followed by one or more characters that are not a space or @ ([^\s@]+).Followed by a period (.).Followed by one or more characters that are not a space or @ ([^\s@]+).Visual Error HandlingIn script.js, the setError() function is used to dynamically add the .invalid class to the input element:JavaScript// Example from script.js
function setError(inputElement, errorElement, message) {
    errorElement.textContent = message;
    inputElement.classList.add('invalid'); // Adds the red border via CSS
}
The style.css file then uses this class to apply the visual error state:CSS/* In style.css */
.form-group input.invalid,
.form-group textarea.invalid {
    border-color: #e74c3c; 
    box-shadow: 0 0 0 1px #e74c3c; 
}
