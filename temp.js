// DOM ELEMENT REFERENCES
const hobbiesResult = document.getElementById("hobbies-result");
const transportResult = document.getElementById("transport-result");
const musicResult = document.getElementById("music-result");

/*
 * CHECKBOX LISTENERS
 */

document.getElementById("sports-checkbox").addEventListener("change", ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[0].classList.remove("text-secondary");
  } else {
    hobbiesResult.children[0].classList.add("text-secondary");
  }
});

document.getElementById("games-checkbox").addEventListener("change", ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[1].classList.remove("text-secondary");
  } else {
    hobbiesResult.children[1].classList.add("text-secondary");
  }
});

document.getElementById("music-checkbox").addEventListener("change", ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[2].classList.remove("text-secondary");
  } else {
    hobbiesResult.children[2].classList.add("text-secondary");
  }
});

// Checkbox listeners with a for loop

/*
let sports = document.getElementById("sports-checkbox");
let games = document.getElementById("games-checkbox");
let music = document.getElementById("music-checkbox");
let hobbies = [sports, games, music];

for (i = 0; i < hobbies.length; i++);
hobbies[i].addEventListener("change", ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[i].classList.remove("text-secondary");
  } else {
    hobbiesResult.children[i].classList.add("text-secondary");
  }
});
*/
