class Shape {
    constructor(shapeColour, content, contentColour) {
        if (content.length > 3) {
            throw new Error('Maximum 3 characters')
        }
        this.shapeColour = shapeColour;
        this.content = content
        this.contentColour = contentColour
    }

    getTemplate(shape) {
        return `<svg viewBox="0 0 100 100">${shape} fill="${this.shapeColour}"/><text fill="${this.contentColour}" x="35" y="50">${this.content}</text></svg>`
    }

    // access methods for building shapes
    getShapeColour() {
        return this.shapeColour
    }
    getContent() {
        return this.content
    }
    getContentColour() {
        return this.contentColour
    }

    setShapeColour(shapeColour) {
        this.shapeColour = shapeColour
    }
    setContent(content) {
        this.content = content
    }
    setContentColour(contentColour) {
        this.contentColour = contentColour
    }
}

module.exports = Shape
