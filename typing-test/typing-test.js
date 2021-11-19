const TIME_LIMIT = 60;
const TEXT =
  "سعی نکنید همه چیز را بدانید. شما ممکن است خیلی چیزها را دیده و انجام داده باشید، اما لزوما به این معنی نیست که شما می دانید بهترین است. سعی نکنید به مردم بگویید که چگونه می توانند کارها را به شیوه ای بهتر انجام دهند یا اینکه بهتر می توانند کاری انجام دهند.";

let wpmText = document.getElementById("wpm");
let errorText = document.getElementById("errors");
let timerText = document.getElementById("time");
let accuracyText = document.getElementById("accuracy");

let typeText = document.getElementById("type-text");

let textArea = document.getElementById("textarea");

let timeLeft = 0;
let timeElapsed = 0;
let errors = 0;
let accuracy = 0;
let typedCharacter = 0;
let timer = null;
let hasStarted = false;

initializeTest({ timeLimit: TIME_LIMIT, text: TEXT });

textArea.addEventListener("input", update);

function initializeTest({ timeLimit, text }) {
  // TODO: Complete this function
  timeLeft = timeLimit;
  timeElapsed = 0;
  errors = 0;
  typedCharacter = 0;
  timer = null;
  hasStarted = false;
  textArea.value = "";
  textArea.disabled = false;
  typeText.innerHTML = "";

  for (let char of text) {
    typeText.innerHTML += `<span class="character">${char}</span>`;
  }

  timerText.innerHTML = timeLeft;
}

function update() {
  if (!hasStarted) {
    timer = setInterval(updateTimer, 1000);
    hasStarted = true;
  }
  typedCharacter++;
  updateCharactersStatus();
  updateErrors();
  updateAccuracy();
}

function updateCharactersStatus() {
  // TODO: Complete this function
  if (textArea.value.length < typedCharacter) {
    const temp = typeText.children[typedCharacter - 2];
    if (temp.classList.contains("incorrect-char")) {
      errors--;
    }
    typedCharacter -= 2;
    temp.classList.remove("incorrect-char");
    temp.classList.remove("correct-char");
    return;
  }
  const currentCharacter = textArea.value[typedCharacter - 1];
  const currentCharacterSpan = typeText.children[typedCharacter - 1];

  if (currentCharacter === currentCharacterSpan.innerHTML) {
    currentCharacterSpan.classList.add("correct-char");
  } else {
    currentCharacterSpan.classList.add("incorrect-char");
    errors++;
  }
}

function updateAccuracy() {
  // TODO: Complete this function
  accuracy =
    Math.round(((typedCharacter - errors) / typedCharacter) * 100) || 0;
  accuracyText.innerHTML = accuracy;
}

function updateErrors() {
  // TODO: Complete this function
  errorText.innerHTML = errors;
}

function updateWpm() {
  // TODO: Complete this function
  return Math.round((typedCharacter / 5 / timeElapsed) * 60);
}

function updateTimer() {
  // TODO: Complete this function
  if (timeLeft > 0) {
    timeElapsed++;
    timeLeft--;
    timerText.innerHTML = timeLeft;
    wpmText.innerHTML = updateWpm();
  } else {
    finishTest();
  }
}

function finishTest() {
  // TODO: Complete this function
  textArea.disabled = true;
  clearInterval(timer);
}
