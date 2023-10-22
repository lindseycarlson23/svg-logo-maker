const Shape = require('./shape.js')

class Triangle extends Shape {
    // constructor(characters, characterColors, shapeColor) {
    //   super(characters, characterColors, shapeColor);
    // }
    //render function will create the string for the shape
    // https://www.svgviewer.dev/s/490122/circle
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill=${this.shapeColor} />`
}};

module.exports = Triangle;

