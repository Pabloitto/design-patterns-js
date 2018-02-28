class Main {
  static start () {
    const canvasElementRef = document.getElementById('canvas')
    const canvas = new Canvas(canvasElementRef)
    const game = new Game(canvas)
    game.initialize()
  }
}
