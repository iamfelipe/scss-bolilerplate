import { sum } from "./utils";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 2 + 4 to equal 6", () => {
  expect(sum(2, 4)).toBe(6);
});

test("merge { a: 1, b: 2 } with { b: 4, c: 5 } to equal { a: 1, b: 4, c: 5 }", () => {
  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };
  const returnedTarget = Object.assign(target, source);
  expect(returnedTarget).toEqual({ a: 1, b: 4, c: 5 });
  expect(target).toEqual({ a: 1, b: 4, c: 5 });
});
