/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {

    // Frequency of first word
    let common = new Array(26).fill(0);

    for (let ch of words[0]) {
        common[ch.charCodeAt(0) - 97]++;
    }

    // Compare with remaining words
    for (let i = 1; i < words.length; i++) {

        let count = new Array(26).fill(0);

        for (let ch of words[i]) {
            count[ch.charCodeAt(0) - 97]++;
        }

        for (let j = 0; j < 26; j++) {
            common[j] = Math.min(common[j], count[j]);
        }
    }

    // Build answer
    let result = [];

    for (let i = 0; i < 26; i++) {
        while (common[i] > 0) {
            result.push(String.fromCharCode(i + 97));
            common[i]--;
        }
    }

    return result;
};