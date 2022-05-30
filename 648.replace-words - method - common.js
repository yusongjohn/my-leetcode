/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    dictionary.sort((a, b) => a.length - b.length);
    const words = sentence.split(' ');
    return words.map(word => (dictionary.find(dic => word.startsWith(dic)) || word)).join(' ')
};