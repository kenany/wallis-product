'use strict';

/**
 * @param {number} n
 * @returns {number}
 */
function wallis(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= (2 * i / (2 * i - 1)) * (2 * i / (2 * i + 1));
  }
  return 2 * product;
}

module.exports = wallis;
