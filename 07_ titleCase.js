function titleCase(sentence) {
    const titleCasedWords = sentence.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    return titleCasedWords.join(' ');
}

module.exports = { titleCase };