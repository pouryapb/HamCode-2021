document.getElementById("submit").addEventListener("click", function () {
  const n = document.getElementById("number").value;
  printSierpinski(n);
});

function printSierpinski(n) {
  const container = document.getElementById("container");
  for (var y = n - 1; y >= 0; y--) {
    if (t === n - 1) continue;
    const row = document.createElement("div");
    row.classList.add("row");
    // for (var i = 0; i < y; i++) {
    //   row.innerHTML += '<div class="block"></div>';
    // }

    for (var x = 0; x + y < n; x++) {
      if ((x & y) != 0) {
        for (var t = 0; t < 3; t++) {
          row.innerHTML += '<div class="block"></div>';
        }
      } else {
        row.innerHTML += '<div class="block active"></div>';
        row.innerHTML += '<div class="block"></div>';
      }
    }
    container.appendChild(row);
  }
}
