/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
// Create a polygon with side lengths 3, 4, and 5
// let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
// console.log(triangle.perimeter());

class Polygon {
    constructor(sides) {
       this.sides = sides;
    }

    perimeter() {
        // return this.sides.reduce((sum, side) => sum + side, 0);
        let perimeter = 0;
        for (let i = 0; i < this.sides.length; i++) {
            perimeter += this.sides[i];
        }
        return perimeter;
    }
}
// const triangle = new Polygon([3, 4, 5]);
const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

// console.log(triangle.perimeter());
console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());