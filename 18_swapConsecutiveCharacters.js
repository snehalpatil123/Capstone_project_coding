function swapConsecutiveCharacters(str) {
    let swapped = '';
    
    for (let i = 0; i < str.length - 1; i += 2) {
        swapped += str[i + 1] + str[i];
    }
    
   
    if (str.length % 2 !== 0) {
        swapped += str[str.length - 1];
    }

    return swapped;
}

console.log(swapConsecutiveCharacters("abcdef"));