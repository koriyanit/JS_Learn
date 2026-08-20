let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let btn = document.querySelector("button");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();
    const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if (!emailRegex.test(email.value.trim())) {
    console.log("invalid email");
}

if (!passwordRegex.test(password.value)) {
    console.log(" invalid password");
}
    btn.textContent="validated";
    btn.style.color="green";

});

