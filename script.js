function validate() {
    var error = "",
        valid = true,
        control = "";

    // LNAME
    control = document.getElementById('lname')
    error = document.getElementById('Lname')
    if (!control.checkValidity()) {
        valid = false
        error.classList.add('err')
        error.textContent = "Lastname Can Not Be Empty"
        control.focus()
    } else {
        error.classList.remove('err')
        error.textContent = ""
    }

    // FNAME
    control = document.getElementById('fname')
    error = document.getElementById('Fname')
    if (!control.checkValidity()) {
        valid = false
        error.classList.add('err')
        error.textContent = "Firstname Can Not Be Empty"
        control.focus()
    } else {
        error.classList.remove('err')
        error.textContent = ""
    }

    // EMAIL
    control = document.getElementById('mail')
    error = document.getElementById('Email')
    if (!control.checkValidity()) {
        valid = false
        error.classList.add('err')
        error.textContent = "Email Address Can Not Be Empty"
        control.focus()
    } else {
        error.classList.remove('err')
        error.textContent = ""
    }

    // PASSWORD
    control = document.getElementById('pwd')
    error = document.getElementById('Pass')
    if (!control.checkValidity() || password1.length < 8) {
        valid = false
        error.classList.add('err')
        error.textContent = "Password Can Not Be less than 8"


    } else {
        error.classList.remove('err')
        error.textContent = ""
    }

    // RETYPE PASSWORD
    password1 = document.myForm.password1.value
    password2 = document.myForm.password2.value
    error = document.getElementById('Pass2')
    if (password1 !== password2) {
        valid = false
        error.classList.add('err')
        error.textContent = "Passwords do not Match"
        control.focus()
    } else {
        error.classList.remove('err')
        error.textContent = ""
    }

    // Evoke function

    return valid
}