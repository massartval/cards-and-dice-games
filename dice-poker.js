document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM is ready.");
});

// Access DOM elements
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let e = document.getElementById("e");

let aResult = document.getElementById("a-result");
let bResult = document.getElementById("b-result");
let cResult = document.getElementById("c-result");
let dResult = document.getElementById("d-result");
let eResult = document.getElementById("e-result");

let rollButton = document.getElementById("roll-button");
let diceForm = document.getElementById("dice-form");
let diceResult = document.getElementById("dice-result");

// Other variables
let dice = [a, b, c, d, e];
let diceResultArray = [aResult, bResult, cResult, dResult, eResult];
let savedDice = ["", "", "", "", ""];
let rolls = 0;

// Save dice

a.addEventListener("change", ($event) => {
  console.log("saved");
  if ($event.target.checked) {
    aResult.classList.add("text-secondary");
  } else {
    aResult.classList.remove("text-secondary");
  }
});

b.addEventListener("change", ($event) => {
  console.log("saved");
  if ($event.target.checked) {
    bResult.classList.add("text-secondary");
  } else {
    bResult.classList.remove("text-secondary");
  }
});

c.addEventListener("change", ($event) => {
  console.log("saved");
  if ($event.target.checked) {
    cResult.classList.add("text-secondary");
  } else {
    cResult.classList.remove("text-secondary");
  }
});

d.addEventListener("change", ($event) => {
  console.log("saved");
  if ($event.target.checked) {
    dResult.classList.add("text-secondary");
  } else {
    dResult.classList.remove("text-secondary");
  }
});

e.addEventListener("change", ($event) => {
  console.log("saved");
  if ($event.target.checked) {
    eResult.classList.add("text-secondary");
  } else {
    eResult.classList.remove("text-secondary");
  }
});

// Roll dice
rollButton.addEventListener("click", ($event) => {
  // Prevent page reload
  $event.preventDefault();

  for (i = 0; i < dice.length; i++) {
    // Check if die is saved
    if (!diceForm.children[i].checked) {
      // Only if die is not saved, re-roll
      diceResult.children[i].textContent = Math.floor(Math.random() * 6 + 1);
    }
  }
  // Increment rolls
  rolls++;
  if (rolls === 3) {
    rollButton.setAttribute("disabled", true);
  }
});

//console.log(a) == console.log(diceForm.children[0]) == console.log(dice[0]);

// Save dice with a for loop (doesn't work yet)
/*
for (i = 0; i < dice.length; i++) {
  diceForm.children[i].addEventListener("change", ($event) => {
    if ($event.target.checked) {
      diceResult.children[i].classList.add("text-secondary");
    } else {
      diceResult.children[i].classList.remove("text-secondary");
    }
  });
}
*/
