

const { template } = require('@babel/core')
const Circle = require('../lib/circle')
const Square = require('../lib/square')
const Triangle = require('../lib/triangle')

describe('Circle tests', () => {
  
  const svgCircle = '<circle cx="50" cy="50" r="50"'
  const circle = new Circle('green', 'Ben', 'white')

  test('Svg template is a circle', () => {
    expect(svgCircle).toBe('<circle cx="50" cy="50" r="50"');
  });
  test('colour green', () => {
    expect(circle.getShapeColour()).toBe('green');
  });
  test('updated colour red', () => {
    circle.setShapeColour('red')
    expect(circle.getShapeColour()).toBe('red');
  });
  test('Content is 3 letter string', () => {
    expect(circle.getContent()).toBe('Ben')
  });
  test('updated content', () => {
    circle.setContent('Jam')
    expect(circle.getContent()).toBe('Jam')
  })
  test('text content is white', () => {
    expect(circle.getContentColour()).toBe('white')
  });
  test('updated content', () => {
    circle.setContentColour('black')
    expect(circle.getContentColour()).toBe('black')
  })


})

describe('Square tests', () => {

  const square = new Square('green', 'Ben', 'white')

  test('colour green', () => {
    expect(square.getShapeColour()).toBe('green');
  });
  test('updated colour red', () => {
  square.setShapeColour('red')
    expect(square.getShapeColour()).toBe('red');
  });
  test('Content is 3 letter string', () => {
    expect(square.getContent()).toBe('Ben')
  });
  test('updated content', () => {
    square.setContent('Jam')
    expect(square.getContent()).toBe('Jam')
  })
  test('text content is white', () => {
    expect(square.getContentColour()).toBe('white')
  });
  test('updated content', () => {
    square.setContentColour('black')
    expect(square.getContentColour()).toBe('black')
  })

})

describe('Triangle tests', () => {

  const triangle = new Triangle('green', 'Ben', 'white')

  test('colour green', () => {
    expect(triangle.getShapeColour()).toBe('green');
  });
  test('updated colour red', () => {
  triangle.setShapeColour('red')
    expect(triangle.getShapeColour()).toBe('red');
  });
  test('Content is 3 letter string', () => {
    expect(triangle.getContent()).toBe('Ben')
  });
  test('updated content', () => {
    circle.setContent('Jam')
    expect(circle.getContent()).toBe('Jam')
  })
  test('text content is white', () => {
    expect(circle.getContentColour()).toBe('white')
  });
  test('updated content', () => {
    circle.setContentColour('black')
    expect(circle.getContentColour()).toBe('black')
  })

})
// const Shapes = require('../lib/shapes');

//expect(circle.builder()).tobe('<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="green"/><text fill="white" x="35" y="50">Ben</text>
//</svg>')