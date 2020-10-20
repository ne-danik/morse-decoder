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
    const dot = '.'; //10
    const def = '-'; //11
    let str = '';
    let resArr = [];
            
    let arr = expr.match(/.{1,10}/g);

    for(let i = 0; i < arr.length; i++) {

        let arrItem = arr[i].match(/.{1,2}/g);

        for(let j = 0; j < arrItem.length; j++) {
            if (arrItem[j] === '10') {
            arrItem[j] = dot;
            } else if (arrItem[j] === '11') {
            arrItem[j] = def;
            } else if (arrItem[j] === '00') {
            arrItem[j] = '';
            } else {
            continue;
            }
        }

        resArr = arrItem.join('').split();

        for(let n = 0; n < resArr.length; n++) {
            if (resArr[n] === '**********') {
            resArr[n] = ' ';
            }
        }

        resArr.forEach((item) => {
            if (item in MORSE_TABLE) {
            str += MORSE_TABLE[item];
            } else if (item === ' ') {
            str += ' ';
            }
        })
    
    }

    return str;
}

module.exports = {
    decode
}