// Simulate a simple user database in localStorage
const usersDatabase = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get user input
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
        alert('Please enter both email and password.');
        return;
    }

    // Check if user exists in the "database"
    const user = usersDatabase.find(u => u.email === email);

    if (user && user.password === password) {
        alert('Login successful! Welcome back!');
        // Redirect to a new page or dashboard (for now, just clear the form)
        clearLoginForm();
    } else {
        alert('Incorrect email or password. Please try again.');
    }
});

// Registration Form submission
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get registration form inputs
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value.trim();

    if (email === '' || password === '') {
        alert('Please enter both email and password.');
        return;
    }

    // Check if the email already exists
    const existingUser = usersDatabase.find(u => u.email === email);
    if (existingUser) {
        alert('An account with this email already exists.');
        return;
    }

    // Add new user to "database" and save to localStorage
    const newUser = { email, password };
    usersDatabase.push(newUser);
    localStorage.setItem('users', JSON.stringify(usersDatabase));

    alert('Account created successfully! You can now log in.');
    showLoginForm();
});

// Switch to registration form
document.getElementById('show-register').addEventListener('click', function () {
    showRegisterForm();
});

// Switch back to login form
document.getElementById('show-login').addEventListener('click', function () {
    showLoginForm();
});

// Function to clear login form fields
function clearLoginForm() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

// Function to show login form
function showLoginForm() {
    document.querySelector('.login-box').classList.remove('hidden');
    document.querySelector('.register-box').classList.add('hidden');
}

// Function to show registration form
function showRegisterForm() {
    document.querySelector('.login-box').classList.add('hidden');
    document.querySelector('.register-box').classList.remove('hidden');
}
