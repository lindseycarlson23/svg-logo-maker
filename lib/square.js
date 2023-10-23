const Shape = require('./shape.js');

class Square extends Shape {
  
    //render function will create the string for the shape
    
    render(){
        return `<rect x="100" y="80" width="100" height="100" fill="${this.shapeColor}" />`
}};

module.exports = Square;