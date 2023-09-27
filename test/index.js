'use strict';

const test = require('tape');
const isFunction = require('lodash.isfunction');

const wallis = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(wallis));
});

test('approaches pi', function(t) {
  let last = 1;
  let w;
  for (let i = 0; i < 101; i++) {
    w = wallis(i);

    // greater than last approximation
    t.ok(w > last);

    // underestimation of pi
    t.ok(w < Math.PI);

    last = w;
  }
  t.end();
});
