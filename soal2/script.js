////////////////soal2
let steps = 0;
const increse = document.getElementById("Increse");
const decrease = document.getElementById("Decrease");
const reset = document.getElementById("Reset");
const read = document.getElementById("Read");

const countSteps = {
  increase: function () {
    steps += 1;
    console.log(steps);
  },
  decrease: function () {
    steps -= 1;
    console.log(steps);
  },
  reset: function () {
    steps = 0;
    console.log(steps);
  },
  read: function () {
    console.log(`Your Steps : ${steps}`);
  },
};

increse.addEventListener("click", () => {
  increse.value = countSteps.increase();
});
decrease.addEventListener("click", () => {
  decrease.value = countSteps.decrease();
});
reset.addEventListener("click", () => {
  reset.value = countSteps.reset();
});
read.addEventListener("click", () => {
  read.value = countSteps.read();
});
