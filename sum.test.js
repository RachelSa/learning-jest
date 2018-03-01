const calc = require('./add');
const person = require("./person");

test('adds 1 + 2 to equal 3', () => {
  let c = new calc()
  expect(c.sum(1, 2)).toBe(3);
});

test('number greater than ten is true', () => {
  let c = new calc()
  expect(c.biggerDigits(12)).toBeTruthy()
})

describe('manipulating person object', () => {
  let p;
  beforeEach(() => {
    p = new person("Ray", "123", "Hello")
  });

  test('returns person object with num', () => {
    expect(p.getContactInfo()).toEqual({name: "Ray", num:"123" });
  });

  test('does not retun bye', () => {

    expect(p.sayHello()).not.toBe("bye")
  });

})
