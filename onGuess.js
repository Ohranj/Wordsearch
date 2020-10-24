//Register letter click
const onLetterClick = ({ target }) => {
    target.style.backgroundColor = "red";
    myGuess.push(target.innerText);
    for (let word of words) {
        myGuess.join("") === word.toUpperCase() ? checkGameOver(word) : false;
    }
};

//Cross out guessed word from ui and check if all words found
const checkGameOver = (word) => {
    const listItem = document.querySelector(`.${word}`);
    listItem.style.textDecoration = "line-through";
    words.splice(words.indexOf(word), 1);
    words.length === 0 ? alert("You won") : false;
};
