const Shape = require('./shape.js');

class Circle extends Shape {
  
    //render function will create the string for the shape
    
    render(){
        return `<circle cx="145" cy="125" r="75" fill="${this.shapeColor}" />`
}};

module.exports = Circle;