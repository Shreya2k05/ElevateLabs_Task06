// Function to validate the form
function validateForm() {
    // 1. Get input values and error message elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formMessage = document.getElementById('formMessage');

    // Reset previous error/success messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formMessage.textContent = '';
    formMessage.className = 'form-message'; // Reset class

    let isValid = true; // Flag to track overall form validity

    // --- Validation Logic ---

    // 1. Name Validation (Non-empty and basic character check)
    if (name === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } 
    // Example edge case: Check for special characters (optional, but good practice)
    else if (!/^[A-Za-z\s]+$/.test(name)) {
        nameError.textContent = 'Name should only contain letters and spaces.';
        isValid = false;
    }

    // 2. Email Validation (Non-empty and valid format using RegEx)
    if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else {
        // Use RegEx for email validation (as requested in Hint 8)
        // This RegEx is a common standard for general email format validation.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email format (e.g., user@domain.com).';
            isValid = false;
        }
    }

    // 3. Message Validation (Non-empty)
    if (message === '') {
        messageError.textContent = 'Message content is required.';
        isValid = false;
    }
    // Example edge case: Message length check (optional)
    else if (message.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long.';
        isValid = false;
    }


    // --- Submission Handling (Hints 5 & 6) ---

    if (isValid) {
        // Prevent form submission (Hint 5: No actual sending)
        
        // Show success message (Hint 6)
        formMessage.textContent = 'Thank you! Your message has been received (submission simulated).';
        formMessage.classList.add('success');

        // Optional: Clear the form fields after successful 'submission'
        // document.getElementById('contactForm').reset();
        
        // Return false to prevent the actual form submission/page reload
        return false; 

    } else {
        // Show general failure message if any field failed validation
        formMessage.textContent = 'Please correct the errors above and try again.';
        formMessage.classList.add('failure'); // Add a failure class (optional CSS needed)
        
        // Return false to prevent the actual form submission/page reload
        return false;
    }
}