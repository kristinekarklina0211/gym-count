const counterText = document.querySelector('[data-find="counterValue"]');
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");

console.log(addButton.dataset);

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterText.innerText = counter;

addButton.addEventListener("click", function() {
    counter = counter + parseInt(addButton.dataset.sets);
    counterText.innerText = counter;
});

clearButton.addEventListener("click", function() {
    counter = COUNTER_INITIAL_VALUE;
    counterText.innerText = counter;
});

/* Старое решение */

/* addButton.addEventListener("click", function() {
    counter = counter + 1;
    counterText.innerText = counter;
});

clearButton.addEventListener("click", function() {
    counter = COUNTER_INITIAL_VALUE;
    counterText.innerText = counter;
}); */