function shortestDistance(wordsDict, word1, word2) {
    let minDistance = Infinity;
    let index1 = -1;
    let index2 = -1;

    for (let i = 0; i < wordsDict.length; i++) {
        const word = wordsDict[i];
        
        if (word === word1) {
            index1 = i;
            if (index2 !== -1) {
                minDistance = Math.min(minDistance, Math.abs(index1 - index2));
            }
        } else if (word === word2) {
            index2 = i;
            if (index1 !== -1) {
                minDistance = Math.min(minDistance, Math.abs(index1 - index2));
            }
        }
    }

    return minDistance;
}


const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
console.log(shortestDistance(wordsDict, "coding", "makes")); 