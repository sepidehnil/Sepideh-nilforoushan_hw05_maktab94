////////////////soal4
const message = prompt("Write your message:");
const className = prompt("Write your class name:");
const topPosition = parseInt(prompt("Enter the top position:"));
const rightPosition = parseInt(prompt("Enter the right position:"));

function notification({ html, className, top, right }) {
  const div = document.createElement("div");
  const createDiv = document.body.appendChild(div);
  createDiv.innerHTML = html;
  createDiv.classList.add(className);
  createDiv.style.position = "absolute";
  createDiv.style.top = `${top}px`;
  createDiv.style.right = `${right}px`;
}

notification({
  html: message,
  className: className,
  top: topPosition,
  right: rightPosition,
});
