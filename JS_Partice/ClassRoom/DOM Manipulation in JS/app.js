const headings = document.getElementById("heading");

// console.log(headings);
// console.log(document.body);
// const bodyBackground = document.body;
// bodyBackground.style.backgroundColor = "green";

const box4 = document.getElementById("box-4");
// box4.style.backgroundColor = "red";

// modifying HTML  Element
const box1 = document.getElementById("box-1");
// box1.innerHTML = "HERo";
// box1.innerText = "Gourav";
// box1.classList.add("circle");
// box1.classList.remove("circle");

// const boxes = document.getElementsByClassName("box");

// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].classList.add("circle");
// }

// for (const box of boxes) {
//     box.classList.add("circle");
// }

const newPara = document.createElement("p");
newPara.innerHTML = "hello";

const cont = document.getElementById("cont");
cont.appendChild(newPara);

newPara.classList.add("box");
newPara.classList.add("circle");
