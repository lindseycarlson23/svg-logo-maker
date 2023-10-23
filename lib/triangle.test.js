// we want to test the methods of every class
const Triangle = require('./triangle');


// for triangle we want to create a test
// that renders a triangle
// sets the color
// and expects the value to be equal to a string (our svg)


describe("Triangle", () => {
    test('can set the color', () => {
        const myTriangle = new Triangle();
        myTriangle.setColor('purple');
        expect(myTriangle.shapeColor).toEqual("purple");
    });
    test('can render a string for the corresponding SVG file', () => {
        const myTriangle = new Triangle();
        myTriangle.setColor('purple');
        expect(myTriangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="purple" />');
    });
});