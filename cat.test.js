const Cat = require("./cat");

var myCat = new Cat("Oliver", 5);
var herCat = new Cat("Milo", 3);

// Group tests
describe("Cat", () => {
  test("The same cat - toBe:", () => {
    expect(myCat).toBe(myCat);
  });

  test("Same cat - toEqual:", () => {
    expect(myCat).toEqual(myCat);
  });

  test("Two different cats with different data - toBe:", () => {
    expect(herCat).toBe(myCat);
  });

  test("Two different cats with different data - toEqual:", () => {
    expect(herCat).toEqual(myCat);
  });

  test("Two different cats with the same data - toBe:", () => {
    expect({ name: "Oliver", age: 5 }).toBe(myCat);
  });

  test("Two different cats with the same data - toEqual:", () => {
    expect({ name: "Oliver", age: 5 }).toEqual(myCat);
  });
});
