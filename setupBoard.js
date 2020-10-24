const searchGrid = document.querySelector(".searchGrid");
const myArr = [];
const myGuess = [];
const words = [];
const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

//Apply words to array
const addWordToBoard = (val, pos) => {
    for (let letter of val) {
        myArr.splice(pos, 1, letter.toUpperCase());
        pos += 1;
    }
};

const arrOfLetters = (i, cb) => {
    if (i >= 1530) {
        return cb();
    }
    myArr.push(["-"]);
    i++;
    arrOfLetters(i, cb);
};

//Render grid and letter from array
const renderGrid = (i) => {
    if (i >= 1530) {
        return;
    }
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.addEventListener("click", onLetterClick);
    newDiv.innerText = myArr[i] == "-" ? getRandomLetter() : myArr[i];
    searchGrid.appendChild(newDiv);
    i++;
    renderGrid(i);
};

//Return a random letter
const getRandomLetter = () => {
    return alphabet[Math.round(Math.random() * (alphabet.length - 1))];
};

//Fetch words for game
const fetchWords = async () => {
    const userTopic = prompt(
        "The wordsearch looks for synonyms based on the word you input"
    );
    const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${userTopic}`
    );
    const jsonData = await response.json();
    for (let word of jsonData[0].meanings[1].definitions[0].synonyms) {
        /\s/.test(word) ? false : words.push(word);
    }
};

//Render words to find
const wordList = document.getElementById("wordList");
const displayWordsList = () => {
    for (let item of words) {
        const newLi = document.createElement("li");
        newLi.innerText = item;
        newLi.classList.add(item);
        wordList.appendChild(newLi);
    }
};
