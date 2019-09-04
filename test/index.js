var test = require('tape');
var isFunction = require('lodash.isfunction');

var wallis = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(wallis));
});

test('approaches pi', function(t) {
  var last = 1;
  var w;
  for (var i = 0; i < 101; i++) {
    w = wallis(i);

    // greater than last approximation
    t.ok(w > last);

    // underestimation of pi
    t.ok(w < Math.PI);

    last = w;
  }
  t.end();
});
