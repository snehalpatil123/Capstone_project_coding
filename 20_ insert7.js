function insert7(str) {
    let modifiedStr = '';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char !== ' ') {
            count++;
            modifiedStr += char;

            if (count % 6 === 0) {
                modifiedStr += '7';
            }
        } else {
            modifiedStr += ' ';
        }
    }

    return modifiedStr;
}


console.log(insert7("Hello World and Universe!")); 