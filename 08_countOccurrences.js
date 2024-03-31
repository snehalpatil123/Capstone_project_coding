function countOccurrences(str, char) {
    const count = str.split(char).length - 1;
    return count;
}

module.exports = { countOccurrences };