const { expect } = require('jess');


// Unit Test for "multiplication" function
function testMultiplication() {
  expect(multiplication(2, 3)).toBe(6);
  expect(multiplication(0, 3)).toBe(0);
  expect(multiplication(-2, 3)).toBe(-6);
  expect(multiplication(2, -3)).toBe(-6);
  expect(multiplication(-2, -3)).toBe(6);
  expect(multiplication(2.5, 3.5)).toBe(8.75);
  expect(multiplication(2.5, -3.5)).toBe(-8.75);
  expect(multiplication(2.5, 0)).toBe(0);
  expect(multiplication(0, 0)).toBe(0);
  expect(() => multiplication("2", 3)).toThrow(TypeError);
  expect(() => multiplication(2, "3")).toThrow(TypeError);
  expect(() => multiplication("2", "3")).toThrow(TypeError);
}


// Unit Test for "concatOdds" function
function testConcatOdds() {
  expect(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toBe([-1, 1, 3, 9, 15]);
  expect(concatOdds([1, 1, 1, 1, 1], [3, 3, 3, 3, 3])).toBe([1, 1, 1, 1, 1, 3, 3, 3, 3, 3]);
  expect(concatOdds([], [])).toBe([]);
  expect(concatOdds([2, 4, 6], [1, 3, 5])).toBe([]);
  expect(concatOdds([1, 2, 3], [2, 4, 6])).toBe([1, 3]);
  expect(concatOdds([2, 4, 6], [1, 3, 5, 7])).toBe([1, 3, 5, 7]);
  expect(concatOdds([1, 3, 5, 7], [2, 4, 6])).toBe([1, 3, 5, 7]);
  expect(concatOdds([-1, 0, 2], [1, 3, 5])).toBe([-1, 1, 3, 5]);
}

// Functional Tests for shopping cart checkout feature
function testCheckout() {
  // Test with empty cart
  expect(checkoutAsGuest([])).toBe("Empty cart. Please continue shopping or create an account.");
  expect(checkoutAsLoggedInUser([])).toBe("Empty cart. Please continue shopping or create an account.");

}
