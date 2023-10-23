const Circle = require('./circle');


describe("Circle", () => {
    test('can set the color', () => {
        const myCircle = new Circle();
        myCircle.setColor('purple');
        expect(myCircle.shapeColor).toEqual("purple");
    });
    test('can render a string for the corresponding SVG file', () => {
        const myCircle = new Circle();
        myCircle.setColor('purple');
        expect(myCircle.render()).toEqual('<circle cx="145" cy="125" r="75" fill="purple" />');
    });
});