class Hero extends Shape {
  constructor (color, x, y, width, height) {
    super(20, 20, 20, 20)
    this.color = 'white'
  }
  paint (context) {
    context.fillStyle = this.color
    context.fillRect(this.x, this.y, this.width, this.height)
  }
  move (x, y) {
    this.x = x
    this.y = y
  }
}
