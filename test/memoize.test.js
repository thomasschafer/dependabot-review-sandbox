const assert = require("node:assert/strict");
const { test } = require("node:test");
const { memoize } = require("../index.js");

test("returns cached results without calling fn again", () => {
  let calls = 0;
  const square = memoize((n) => {
    calls += 1;
    return n * n;
  }, 10);
  assert.equal(square(3), 9);
  assert.equal(square(3), 9);
  assert.equal(calls, 1);
});

test("evicts the least recently used key once full", () => {
  let calls = 0;
  const id = memoize((n) => {
    calls += 1;
    return n;
  }, 2);
  id(1);
  id(2);
  id(3);
  id(1);
  assert.equal(calls, 4);
});
