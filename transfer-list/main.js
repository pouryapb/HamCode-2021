const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");

// InitialValues
let leftList = [
  { id: "item1", checked: false, title: "PHP" },
  { id: "item2", checked: false, title: "Python" },
  { id: "item3", checked: false, title: "Ruby" },
  { id: "item4", checked: false, title: "C++" },
];
let rightList = [
  { id: "item5", checked: false, title: "HTML" },
  { id: "item6", checked: false, title: "Css" },
  { id: "item7", checked: false, title: "JavaScript" },
  { id: "item8", checked: false, title: "Java" },
];

renderDom(leftList, rightList);

// Render Dom
function renderDom(leftListToRender, rightListToRender) {
  leftListToRender.forEach((item) => {
    leftSide.innerHTML += `<div class="box">
        <input type="checkbox" class="input-box" id="${item.id}" />
        <label for="${item.id}">${item.title}</label>
        </div>`;
  });

  rightListToRender.forEach((item) => {
    rightSide.innerHTML += `<div class="box">
          <input type="checkbox" class="input-box" id="${item.id}" />
          <label for="${item.id}">${item.title}</label>
          </div>`;
  });

  registerEvents();
}

// Clear Dom
function clearDom() {
  document.querySelectorAll(".side").forEach((el) => {
    el.innerHTML = "";
  });
}

// Event
function registerEvents() {
  document.querySelector(".all-to-right").addEventListener("click", () => {
    leftList.forEach((item) => {
      rightList.push(item);
    });
    leftList = [];
    clearDom();
    renderDom(leftList, rightList);
  });
  document.querySelector(".all-to-left").addEventListener("click", () => {
    rightList.forEach((item) => {
      leftList.push(item);
    });
    rightList = [];
    clearDom();
    renderDom(leftList, rightList);
  });
  document.querySelector(".checked-to-right").addEventListener("click", () => {
    leftList.forEach((item) => {
      if (document.getElementById(item.id).checked) {
        rightList.push(item);
      }
    });
    leftList = leftList.filter(
      (item) => !document.getElementById(item.id).checked
    );
    clearDom();
    renderDom(leftList, rightList);
  });
  document.querySelector(".checked-to-left").addEventListener("click", () => {
    rightList.forEach((item) => {
      if (document.getElementById(item.id).checked) {
        leftList.push(item);
      }
    });
    rightList = rightList.filter(
      (item) => !document.getElementById(item.id).checked
    );
    clearDom();
    renderDom(leftList, rightList);
  });
}
