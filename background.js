class Background extends Shape {
  constructor (color, width, height) {
    super(0, 0, width, height)
    this.color = color
  }
  paint (context) {
    context.fillStyle = this.color
    context.fillRect(this.x, this.y, this.width, this.height)
  }
}
