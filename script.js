var slider = document.getElementsByClassName("slider");
var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");

console.log(slider);

function login() {
  loginForm.style.left = 50 + "%";
  registerForm.style.left = 150 + "%";
  slider[0].style.left = 0 + "%";
}

function register() {
  loginForm.style.left = -50 + "%";
  registerForm.style.left = 50 + "%";
  slider[0].style.left = 50 + "%";
}
