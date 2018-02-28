class Enemy extends Shape {
  constructor (color, x, y) {
    super(x, y, 10, 10)
    this.color = color
  }
  paint (context) {
    context.fillStyle = this.color
    context.fillRect(this.x, this.y, this.width, this.height)
  }
}
