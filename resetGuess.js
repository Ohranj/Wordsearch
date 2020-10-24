//Reset guess
document.getElementById("resetGuess").addEventListener("click", () => {
    myGuess.length = 0;
    for (let gridBox of Array.from(document.querySelectorAll(".box"))) {
        gridBox.style.backgroundColor = "white";
    }
});
