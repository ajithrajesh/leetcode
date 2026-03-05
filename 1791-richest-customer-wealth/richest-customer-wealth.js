/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth(accounts) {
  let maxWealth = 0;

  for (let customer of accounts) {
    let wealth = 0;

    for (let money of customer) {
      wealth += money;
    }

    if (wealth > maxWealth) {
      maxWealth = wealth;
    }
  }

  return maxWealth;
}