function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    
    // Validation to check if fields are empty
    if (!username || !password) {
        showMessage("Please enter both username and password.");
        return;
    }

    // Retrieve existing users from localStorage or initialize an empty array if none exist
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the username already exists
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        showMessage("Username already exists. Please choose another.");
        return;
    }

    // Save new user to localStorage
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));


     // Redirect to random.html after successful login
        window.location.href = "Login.html";
    


}

function showMessage(message) {
    // Display message to user
    document.getElementById('message').innerText = message;
}

function clearInputs() {
    // Clear input fields after signup
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupPassword').value = '';
}


function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        showMessage("Please enter both username and password.");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check for valid credentials
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        showMessage("Login successful!");
        // Redirect to random.html after successful login
        window.location.href = "random.html";
    } else {
        showMessage("Invalid username or password.");
    }
}

function showMessage(message) {
    document.getElementById('message').innerText = message;
}


function clearInputs() {
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupPassword').value = '';
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
}
