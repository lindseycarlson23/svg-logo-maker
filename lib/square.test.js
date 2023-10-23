const Square = require('./square');



describe("Square", () => {
    test('can set the color', () => {
        const mySquare = new Square();
        mySquare.setColor('purple');
        expect(mySquare.shapeColor).toEqual("purple");
    });
    test('can render a string for the corresponding SVG file', () => {
        const mySquare = new Square();
        mySquare.setColor('purple');
        expect(mySquare.render()).toEqual('<rect x="100" y="80" width="100" height="100" fill="purple" />');
    });
});