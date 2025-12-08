/*
    Student Name: Lawrence Pinter
    File Name: script.js
    Date: 11/23/2025
*/

//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
		} else {
		    menu.style.display = "block";
		}
}

// quiz answer functions
function ans1() {
    document.querySelector("#answer p").textContent = "B) Receptor → Control center → Effector (correct)";
}

function ans2() {
    document.querySelector("#answer p").textContent = "D) Slightly basic (about pH 7.35–7.45) correct)";
}

function ans3() {
    document.querySelector("#answer p").textContent = " D) Active transport (correct)";
}

function ans4() {
    document.querySelector("#answer p").textContent = "C) Epithelial (correct)";
}