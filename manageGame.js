//start game
const startGame = async () => {
    await fetchWords();
    arrOfLetters(0, () => {
        for (let word of words) {
            const boardPos = Math.round(Math.random() * 1520);
            addWordToBoard(word, boardPos);
        }
    });
    renderGrid(0);
    displayWordsList();
};
startGame();

//Reset game
document.getElementById("resetGame").addEventListener("click", () => {
    document.querySelector(".searchGrid").innerHTML = "";
    document.getElementById("wordList").innerHTML = "";
    words.length = 0;
    startGame();
});
