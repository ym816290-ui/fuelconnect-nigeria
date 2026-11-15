
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("Welcome to FuelConnect Nigeria!");
    });
  });

  console.log("FuelConnect Nigeria Web App loaded successfully.");
});
