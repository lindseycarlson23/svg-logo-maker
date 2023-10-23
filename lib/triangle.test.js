const Triangle = require('./triangle');


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