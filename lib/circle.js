const Shape = require ("./shapes")

class Circle extends Shape {
    constructor (shapeColour, content, contentColour){
        super (shapeColour, content, contentColour)
    }
    builder() {
        return this.getTemplate('<circle cx="50" cy="50" r="50"')
    }
    }

module.exports = Circle
