const capitalize = (str) => {
    return str[0].toUpperCase() + str.substr(1);
};

const reverseString = (str) => {
    let stringReversed = "";
    for (let i = str.length - 1; i >= 0; i -= 1) {
        stringReversed += str[i];
    }
    return stringReversed;
};

//calculator
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const divide = (a, b) => {
    return a / b;
};
const multiply = (a, b) => {
    return a * b;
};
//Caesar cipher
const caesarCipher = (str) => {
    let alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    let cipher = "";
    for (let i = 0; i < str.length; i += 1) {
        let letter = str[i].toLowerCase();
        if (!alphabet.includes(letter)) {
            cipher += letter;
        } else {
            let index =
                alphabet.indexOf(letter) + 1 <= 25
                    ? alphabet.indexOf(letter) + 1
                    : 0;
            letter === str[i]
                ? (cipher += alphabet[index])
                : (cipher += alphabet[index].toUpperCase());
        }
    }
    return cipher;
};

//Analyze array
const analyzeArray = (arr) => {
    let object = {
        average: arr.reduce((a, b) => a + b, 0) / arr.length,
        min: arr.reduce((a, b) => (a < b ? (a = a) : (a = b))),
        max: arr.reduce((a, b) => (a > b ? (a = a) : (a = b))),
        length: arr.length,
    };
    return object;
};
const object = analyzeArray([1, 8, 3, 4, 2, 6]);

export {
    capitalize,
    reverseString,
    add,
    subtract,
    divide,
    multiply,
    object,
};
