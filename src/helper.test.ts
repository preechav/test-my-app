import { add, subtrac } from "./helper";

test("test add function", () => {
  //arrange
  const a = 1;
  const b = 2;
  //act
  const actual = add(a, b);
  //assert
  expect(actual).toEqual(3);
});

test("test subtrack function", () => {
  //arrange
  const a = 2;
  const b = 1;
  //act
  const actual = subtrac(a, b);
  //assert
  expect(actual).toEqual(1);
});
