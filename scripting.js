const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const text = prompt("What don't you like about NYC's Quality of Living?");
  button.textContent = `${text}`;
}
