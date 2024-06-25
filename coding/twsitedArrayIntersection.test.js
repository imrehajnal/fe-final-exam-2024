import assert from "node:assert";
import test from "node:test";
import { twistedArrayIntersection } from "./index.js";

test("should return the correct intersection with index sums", () => {
  assert.deepStrictEqual(twistedArrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]), [
    { value: 3, indexSum: 2 },
    { value: 4, indexSum: 4 },
  ]);
});

test("should handle arrays with no common elements", () => {
  assert.deepStrictEqual(twistedArrayIntersection([1, 2, 3], [4, 5, 6]), []);
});

test("should handle empty arrays", () => {
  assert.deepStrictEqual(twistedArrayIntersection([], [1, 2, 3]), []);
  assert.deepStrictEqual(twistedArrayIntersection([1, 2, 3], []), []);
  assert.deepStrictEqual(twistedArrayIntersection([], []), []);
});

test("should handle arrays with duplicate elements", () => {
  assert.deepStrictEqual(twistedArrayIntersection([1, 2, 2, 3], [2, 2, 4]), [
    { value: 2, indexSum: 1 },
    { value: 2, indexSum: 2 },
  ]);
});

test("should handle arrays with all common elements", () => {
  assert.deepStrictEqual(twistedArrayIntersection([1, 2, 3], [1, 2, 3]), [
    { value: 1, indexSum: 0 },
    { value: 2, indexSum: 2 },
    { value: 3, indexSum: 4 },
  ]);
});
