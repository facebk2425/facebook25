// Simulating a database with localStorage
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
    } else {
        alert('Incorrect email or password. Please try again.');
    }
});

// To simulate user registration, you can store a user
function registerUser(email, password) {
    const newUser = { email, password };
    usersDatabase.push(newUser);
    localStorage.setItem('users', JSON.stringify(usersDatabase));
}
