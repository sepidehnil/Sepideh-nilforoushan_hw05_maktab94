////////////////soal1
// const user = {
//   name: "john",
//   age: 30,
//   sayHelllo: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };
// user.sayHelllo();

////////////////soal2
// let steps = 0;
// const increse = document.getElementById("Increse");
// const decrease = document.getElementById("Decrease");
// const reset = document.getElementById("Reset");
// const read = document.getElementById("Read");

// const countSteps = {
//   increase: function () {
//     steps += 1;
//     console.log(steps);
//   },
//   decrease: function () {
//     steps -= 1;
//     console.log(steps);
//   },
//   reset: function () {
//     steps = 0;
//     console.log(steps);
//   },
//   read: function () {
//     console.log(`Your Steps : ${steps}`);
//   },
// };

// increse.addEventListener("click", () => {
//   increse.value = countSteps.increase();
// });
// decrease.addEventListener("click", () => {
//   decrease.value = countSteps.decrease();
// });
// reset.addEventListener("click", () => {
//   reset.value = countSteps.reset();
// });
// read.addEventListener("click", () => {
//   read.value = countSteps.read();
// });

////////////////soal3
// const array = [
//   { name: "zahra", age: 5 },
//   { name: "ali", age: 45 },
//   { name: "sepideh", age: 20 },
//   { name: "john", age: 15 },
// ];
// function sortByAge(arr) {
//   return arr.sort((a, b) => {
//     return a.age - b.age;
//   });
// }
// console.log(sortByAge(array));

////////////////soal4
// const message = prompt("Write your message:");
// const className = prompt("Write your class name:");
// const topPosition = parseInt(prompt("Enter the top position:"));
// const rightPosition = parseInt(prompt("Enter the right position:"));

// function notification({ html, className, top, right }) {
//   const div = document.createElement("div");
//   const createDiv = document.body.appendChild(div);
//   createDiv.innerHTML = html;
//   createDiv.classList.add(className);
//   createDiv.style.position = "absolute";
//   createDiv.style.top = `${top}px`;
//   createDiv.style.right = `${right}px`;
// }

// notification({
//   html: message,
//   className: className,
//   top: topPosition,
//   right: rightPosition,
// });

////////////////soal5
// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Do you agree?",
//   () => {
//     alert("You agreed.");
//   },
//   () => {
//     alert("You canceled the execution.");
//   }
// );
