let countRec = 0;

const counterNum = document.querySelector("#countRec");
const incButton = document.querySelector("#incBtn");
const decButton = document.querySelector("#decBtn");
const resetButton = document.querySelector("#resetBtn");

incButton.addEventListener("click", function () {
  countRec = countRec + 1;
  counterNum.innerText = countRec;
  colorCounter();
});

decButton.addEventListener("click", function () {
  if (countRec > 0) {
    countRec = countRec - 1;
    counterNum.innerText = countRec;
  }
  colorCounter();
});

resetButton.addEventListener("click", function () {
  countRec = 0;
  counterNum.innerText = countRec;
  colorCounter();
});

function colorCounter() {
  counterNum.innerText = countRec;
  if (countRec === 0) {
    counterNum.style.color = "red";
  } else {
    counterNum.style.color = "green";
  }
}
