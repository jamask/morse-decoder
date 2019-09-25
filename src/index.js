const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrWord = expr.split("**********");
    let result = "";
    for (let i = 0; i < arrWord.length; i++) {
        let word = 0;
        let wordResult = "";
        while (word < arrWord[i].length) {
            let a = arrWord[i].slice(word, word + 10);
            let letter = 0;
            let letterResult = "";
            while (letter < a.length) {
                let b = a.slice(letter, letter + 2);
                if (b == "10") {
                    letterResult += ".";
                } else if (b == "11") {
                    letterResult += "-";
                }
                letter += 2;
            }
            wordResult += MORSE_TABLE[letterResult];
            word += 10;

        }
        result = result + wordResult + " ";
    }
    return result.trim();
}

module.exports = {
    decode
}