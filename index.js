function wallis(n) {
  var product = 1;
  for (var i = 1; i <= n; i++) {
    product *= (2 * i / (2 * i - 1)) * (2 * i / (2 * i + 1));
  }
  return 2 * product;
}

module.exports = wallis;