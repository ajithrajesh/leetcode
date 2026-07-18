/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let words = s.split(" ");
    let result = [];

    for (let word of words) {
        let position = Number(word[word.length - 1]);
        result[position - 1] = word.slice(0, word.length - 1);
    }

    return result.join(" ");
};