class Game {
  constructor (canvas) {
    this.seconds = 0
    this.canvas = canvas
    this.context = canvas.context
    this.background = new Background('black', this.canvas.width, this.canvas.height)
    this.board = new Board('green', '0', this.canvas.width)
    this.hero = new Hero()
    this.enemyFactory = new EnemyFactory(this.context, this.canvas.width, this.canvas.height)
  }
  initialize () {
    this.startGame()
    this.countTime()
    this.enemyFactory.initialize()
  }
  repaint () {
    this.background.paint(this.context)
    this.board.setText(this.seconds)
    this.board.paint(this.context)
    this.hero.paint(this.context)
    this.enemyFactory.paintEnemies(this.context)
    requestAnimationFrame(this.repaint.bind(this))
  }
  startGame () {
    this.repaint()
  }
  countTime () {
    setInterval(() => this.seconds++, 1000)
  }
}
