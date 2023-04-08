// Hide/show registration form based on register button click
const registerButton = document.querySelector('.register-button');
const registrationForm = document.querySelector('.registration-form');

registerButton.addEventListener('click', () => {
    registrationForm.classList.toggle('hidden');
});

// Form validation for registration
const registrationFormSubmit = document.querySelector('.registration-form input[type="submit"]');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');

registrationFormSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    // Validate form inputs
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '') {
        alert('Please fill in all fields.');
    } else if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
    } else if (!validatePhone(phoneInput.value)) {
        alert('Please enter a valid phone number.');
    } else {
        alert('Registration successful!'); // Replace with your desired logic
        registrationForm.reset(); // Reset form inputs
    }
});

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation function
function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/; // Assuming 10-digit phone number format
    return phoneRegex.test(phone);
}
