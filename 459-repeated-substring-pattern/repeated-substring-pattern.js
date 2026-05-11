var repeatedSubstringPattern = function(s) {

    let doubled = s + s;

    let result = doubled.slice(1, doubled.length - 1);

    return result.includes(s);
};