const Shape = require('./shape.js');

class Circle extends Shape {
  
    //render function will create the string for the shape
    
    render(){
        return `<circle cx="125" cy="100" r="75" fill="${this.shapeColor}" />`
}};

module.exports = Circle;