const output = document.getElementById("output");
const answerEl = document.getElementById("answer");
const submitBtn = document.getElementById("submit");
const secret = "secret.html";

function render(text) {
  if (output) {
    output.textContent = text;
  }
}

function verifyCaptcha() {
  const answer = answerEl ? answerEl.value : "";
  if (answer === 5) {
    window.location.href = secret;
  } else {
    render("Réponse incorrecte — vérifiez votre saisie.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (submitBtn) {
    submitBtn.addEventListener("click", verifyCaptcha);
  }
});
