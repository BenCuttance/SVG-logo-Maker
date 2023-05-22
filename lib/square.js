const Shape = require ("./shapes")

class Square extends Shape {
    constructor (shapeColour, content, contentColour){
        super (shapeColour, content, contentColour)
    }
    builder() {
        return this.getTemplate('<rect width="100" height="100" ')
    }
    }

module.exports = Square
