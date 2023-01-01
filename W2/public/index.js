"use strict";
const data = JSON.parse(localStorage.getItem("user"));
if (data.login === true) {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".back").style.display = "flex";
  alert("User already logged in, please back to the dashboard");
  document
    .querySelector(".back-btn")
    .addEventListener(
      "click",
      () => (window.location.href = `./views/dashboard.html`)
    );
}
const loginBtn = document.querySelector(".login-btn");
const usernameText = document.querySelector("#username-text");
const passwordText = document.querySelector("#password-text");
localStorage.setItem(
  "user",
  JSON.stringify({
    username: "john",
    password: "1234",
    login: false,
  })
);

const errorText = function (input, variable, text) {
  if (!input) {
    variable.textContent = `Please enter ${text}`;
  } else variable.textContent = "";
};

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;
  if (!username || !password) {
    errorText(username, usernameText, "username");
    errorText(password, passwordText, "password");
    return;
  }
  if (username !== data.username || password !== data.password) {
    alert("Wrong username or password, try again");
  } else {
    data.login = true;
    localStorage.setItem("user", JSON.stringify(data));
    window.location.href = `./views/dashboard.html`;
  }
});
