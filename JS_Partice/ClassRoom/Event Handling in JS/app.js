function changeclick() {
    console.log("heLLO");
}

function keypressEvent() {
    console.log("Press");
}

const box1 = document.querySelector("#box-1");
box1.addEventListener("click", () => {
    console.log("click");
});
