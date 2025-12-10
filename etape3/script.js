const output = document.getElementById("output");

const flag =
  "SAFE[p2:decryptFlag][noise:xyz123][p3:2025][trash:abc][p1:JSunlock]LOCK";

function render(text) {
  if (output) {
    output.textContent = text;
  }
}

function openSafe() {
  render("ACCESS DENIED // clé manquante");
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("open-safe");
  if (btn) {
    btn.addEventListener("click", openSafe);
  }
});

function decryptPayload(payload) {
  if (!payload) return "";
  const parts = {};

  payload.replace(/\[(p[123]):([A-Za-z0-9_]+)\]/g, (_, key, value) => {
    parts[key] = value;
    return "";
  });

  if (parts.p1 && parts.p2 && parts.p3) {
    return `FLAG_${parts.p1}_${parts.p2}_${parts.p3}`;
  }

  return "";
}
