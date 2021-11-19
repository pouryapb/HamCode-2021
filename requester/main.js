document
  .getElementById("send-requests")
  .addEventListener("click", async function () {
    document.getElementById("results").innerHTML = "";
    const requests = document.getElementById("urls").value;
    const urls = requests.split(/\s+/);
    const results = document.getElementById("results");

    for (let url of urls) {
      const res = await fetch(url);
      const text = await res.text();
      if (res.status === 200) {
        results.innerHTML += `<div class="result">${text}</div>`;
      } else {
        results.innerHTML += `<div class="result">error</div>`;
      }
    }
  });
