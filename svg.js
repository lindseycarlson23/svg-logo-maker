
class SVG {
    constructor() {
        // this.characters = characters;
        // this.characterColors = characterColors;
        this.text = "";
        this.shape = "";
    }

    setText(characters, textColor) {
        this.text = `<text x="150" y="140" font-size="50" text-anchor="middle" fill=${textColor} >${characters}</text>`
    }

    setShape(shape) {
        this.shape = shape.render()
    }

    render() {
        return `<svg width="350" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }

}


module.exports = SVG;