function findMove(s) {
    const moves = [];

    for (let i = 0; i < s.length - 1; i++) {
        if (s.substring(i, i + 2) === "++") {
            const newState = s.substring(0, i) + "--" + s.substring(i + 2);
            moves.push(newState);
        }
    }

    return moves;
}


console.log(findMove("++++")); 
console.log(findMove("+-")); 