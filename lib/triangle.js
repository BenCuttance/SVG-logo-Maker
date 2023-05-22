const Shape = require ("./shapes")

class Triangle extends Shape {
    constructor (shapeColour, content, contentColour){
        super (shapeColour, content, contentColour)
    }
    builder() {
        return this.getTemplate('<polygon points="45,0 100,80 0,80"')
    }
    }

module.exports = Triangle
