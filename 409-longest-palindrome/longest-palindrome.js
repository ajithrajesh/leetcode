function longestPalindrome(s) {
    let freq = {};
    
    // Count frequency
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let length = 0;
    let hasOdd = false;

    for (let ch in freq) {
        let count = freq[ch];

        if (count % 2 === 0) {
            length += count; // use all
        } else {
            length += count - 1; // use even part
            hasOdd = true;       // keep one for center
        }
    }

    // Add 1 if any odd exists
    if (hasOdd) length += 1;

    return length;
}