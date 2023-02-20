import "./navigation.js";
import "./about-us.js";
import "./request.js";
import forms from "./forms.js";

window.addEventListener("DOMContentLoaded", () => {
  forms();
});

const year = new Date().getFullYear();

document.getElementById("year").innerHTML = year;
