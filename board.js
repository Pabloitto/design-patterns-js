class Board extends Shape {
  constructor (color, text, width) {
    super(0, 0, width, 15)
    this.color = color
    this.text = text
  }
  paint (context) {
    context.fillStyle = this.color
    context.fillRect(this.x, this.y, this.width, this.height)
    context.fillStyle = 'white'
    context.font = '12px serif'
    context.fillText('Seconds ' + this.text, this.width / 2, 11)
  }
  setText (text) {
    this.text = text
  }
}
