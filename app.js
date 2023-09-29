"use strict";
const btn = document.querySelector(".btn"); //document significa a referencia

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  var className = document.body.className;
  if (className == "light-theme") {
    this.textContent = "Escuro";
  } else {
    this.textContent = "Claro";
  }
  console.log("current class name: " + className);
});
