const Shape = require('./shape.js')

class Triangle extends Shape {
    constructor(characters, characterColors, shapeColor) {
      super(characters, characterColors, shapeColor);
    }
    //render function will create the string for the shape
    // https://www.svgviewer.dev/s/490122/circle
    render(){};
};

module.exports = Triangle;

