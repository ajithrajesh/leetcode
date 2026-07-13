var isBalanced = function(num) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < num.length; i++) {
        let digit = Number(num[i]);

        if (i % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    return evenSum === oddSum;
};