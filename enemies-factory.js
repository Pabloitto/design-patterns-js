class EnemyFactory {
  constructor (context, width, height) {
    this.width = width
    this.height = height
    this.enemies = []
    this.timer = 3000
  }
  initialize () {
    setInterval(() => {
      this.enemies.push(this.resolveEnemy())
    }, this.timer)
  }
  paintEnemies (context) {
    this.enemies.forEach(enemy => enemy.paint(context))
  }
  resolveEnemy () {
    const x = Math.floor(Math.random() * this.width)
    const y = Math.floor(Math.random() * this.height)
    return new Enemy('red', x, y)
  }
}
