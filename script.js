const correctButton = document.getElementById("captcha1");
const result = document.getElementById("result");

correctButton.addEventListener("click", () => {
  result.innerText = "Wrong. That was clearly a robot move. Try again.";
});

// Make all buttons always say wrong
document.querySelectorAll(".captcha-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    result.innerText = "Wrong. That was clearly a robot move. Try again.";
  });
});
