window.onload = function () {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        updateNavbarForLoggedInUser(user.name);
        if(window.location.pathname.includes('Login.html')){
           window.location.href = 'index.html' 
        }

    }
};

function handleRegistration() {
    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    if (!name || !email || !password) {
        alert("All fields Required..");
        return;
    }

    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Registration Successful! Now You can Login...");
    window.location.href = "Login.html";
}

function handleLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Login Successful..");
        window.location.href = "index.html";
    } else {
        alert("Invalid Email or Password...");
    }
}

function updateNavbarForLoggedInUser(name) {
    const authButtons = document.getElementById("auth-Buttons");
    if (authButtons) {
        authButtons.innerHTML = `
            <button class="btn btn-primary"><span class="bi bi-person-fill"></span> ${name}</button>
            <button class="btn btn-outline-primary" onclick="logout()">Logout</button>
        `;
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    alert("You have been Logged Out...");
    window.location.href = "Login.html";
}
