function saveToStorage() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let fullName = document.getElementById("fullname");
    let country = document.getElementById("country");
    let birthdate = document.getElementById("date");

    let obj = {
        email: email.value,
        password: password.value,
        fullName: fullName.value,
        country: country.value,
        birthdate: birthdate.value

    }
    localStorage.setItem("user", JSON.stringify(obj));
}



function checkPassword() {
    let Email = document.getElementById("in_email");
    let Pass = document.getElementById("in_password");

    if (Email.value !== null || Pass.value !== null) {
        let objFromStorage = JSON.parse(localStorage.getItem("user"))
        if (objFromStorage.email === Email.value && objFromStorage.password === Pass.value) {
            window.location.href = "ProFile.html";
        } else {
            Email.style.borderColor = "#940000";
            Pass.style.borderColor = "#940000";
            Email.value=null;
            Pass.value=null;
        }
    }
}

function aks() {
    let email = document.getElementById("email");
    let fullName = document.getElementById("full-name");
    let country = document.getElementById("country");
    let birthdate = document.getElementById("birthdate");
    let userPage = document.getElementById("users-page");
    let welcomeMessage = document.getElementById("welcome-message");

    if (email.value !== null && fullName.value !== null && country.value !== null && birthdate.value !== null) {
        let objFromStorage = JSON.parse(localStorage.getItem("user"))
        if (objFromStorage !== null) {
            email.value = objFromStorage.email
            fullName.value = objFromStorage.fullName
            country.value = objFromStorage.country
            birthdate.value = objFromStorage.birthdate
            userPage.innerHTML = `${objFromStorage.fullName}`
            welcomeMessage.innerHTML = `Welcome ${objFromStorage.fullName}`
        }
    }
}