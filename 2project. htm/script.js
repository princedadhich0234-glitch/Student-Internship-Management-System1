
// STUDENT REGISTRATION

document.getElementById("registerForm")?.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    let students = JSON.parse(localStorage.getItem("students")) || [];

    let existing = students.find(s => s.email === email);

    if (existing) {
        alert("Email already registered!");
        return;
    }

    let student = {
        name: name,
        roll: roll,
        email: email,
        password: password
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    alert("Registration Successful!");

    document.getElementById("registerForm").reset();

    document.getElementById("registerBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";

});


// STUDENT LOGIN

document.getElementById("loginForm")?.addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let students = JSON.parse(localStorage.getItem("students")) || [];

    let user = students.find(s =>
        s.email === email && s.password === password
    );

    if (user) {

        localStorage.setItem("loggedInStudent", JSON.stringify(user));

        alert("Login Successful!");

        window.location.href = "student-dashboard.html";

    } else {

        alert("Invalid Email or Password!");

    }

});
