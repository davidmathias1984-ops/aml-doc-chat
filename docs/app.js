const chat = document.getElementById("chat");
const form = document.getElementById("form");
const input = document.getElementById("q");

function add(role, text) {
  const div = document.createElement("div");
  div.className = "msg " + role;
  div.textContent = role.toUpperCase() + ": " + text;
  chat.appendChild(div);
}

add("assistant", "Ask me anything about the AML/CTF guide.");

form.onsubmit = async (e) => {
  e.preventDefault();
  const q = input.value.trim();
  if (!q) return;
  add("user", q);
  input.value = "";

  const r = await fetch(window.CHAT_API_BASE + "/api/chat", {
    method:"POST",
    headers:{ "content-type":"application/json" },
    body:JSON.stringify({ question:q })
  });

  const j = await r.json();
  add("assistant", j.answer || "No answer.");
};
