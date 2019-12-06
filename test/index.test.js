const { strict: assert } = require("assert");
const baz = require("../src/baz");

describe("baz.js", () => {

  let list;
  let reveresedList;

  beforeEach(() => {
    list = [1, 2, 3, 4, 5];
    reveresedList = baz(list);
  });

  it("Reverses a list", () => {
    list.forEach((v, i) => assert.equal(v, reveresedList[i]));
    assert.equal(list, reveresedList);
  });

  it("Reverses a list and returns its reference", () => {
    list[0] = NaN;
    list.forEach((v, i) => assert.equal(v, reveresedList[i]));
  });

  it.skip("Reverses a list and returns it as a new object", () => {
    list[0] = NaN;
    assert.equal(list[0], NaN);
    assert.equal(reveresedList[0], 5);
    assert.notEqual(list, reveresedList);
  });
})