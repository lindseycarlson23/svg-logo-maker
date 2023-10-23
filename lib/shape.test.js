
const Shape = require('./shape');


describe("Shape", () => {
    test('can set the color', () => {
        const myShape = new Shape();
        myShape.setColor('purple');
        expect(myShape.shapeColor).toEqual("purple");
    });
});