/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
function shortestToChar(s, c) {
  let n = s.length;
  let result = new Array(n);

  let prev = -Infinity;

  // Left to Right
  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      prev = i;
    }
    result[i] = i - prev;
  }

  // Right to Left
  prev = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) {
      prev = i;
    }
    result[i] = Math.min(result[i], prev - i);
  }

  return result;
}