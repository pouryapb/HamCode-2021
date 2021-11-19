document.getElementById("submit").addEventListener("click", function () {
  const n = document.getElementById("number").value;
  document.getElementById("container").innerHTML = "";
  document.getElementById("submit").disabled = true;
  printSierpinski(Math.pow(2, n));
  document.getElementById("submit").disabled = false;
});

const filledBlock = '<div class="block active"></div>';
const hiddenBlock = '<div class="block"></div>';

function printSierpinski(n) {
  const container = document.getElementById("container");
  for (var y = n - 1; y >= 0; y--) {
    const row = document.createElement("div");
    row.classList.add("row");

    let flag = false;

    for (var x = 0; x + y < n; x++) {
      if ((x & y) != 0) {
        row.innerHTML += hiddenBlock;
      } else if (!flag) {
        flag = true;
        row.innerHTML += filledBlock;
      } else {
        row.innerHTML += filledBlock;
      }
    }
    container.appendChild(row);
  }
}
