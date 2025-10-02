async function askAI() {
  const query = document.getElementById("aiQuery").value;
  let res = await fetch("/ai_assist", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({query})
  });
  let data = await res.json();
  document.getElementById("aiResponse").innerText = data.response;
}