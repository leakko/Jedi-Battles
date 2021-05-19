class Jedi {
    constructor(ctx, x, y) {
      this.ctx = ctx
  
      this.x = x
      this.minX = 0
      this.maxX = this.ctx.canvas.height + this.height
      this.vx = 0
  
      this.y = y
      this.vy = 1
      this.ay = 2
  
      this.width = 0
      this.height = 0
  
      this.spriteAttack = new Image()
      this.sprite.src = './assets/img/assassin/attack 1 and 2.png'
      this.sprite.isReady = false
      this.sprite.horizontalFrames = 2
      this.sprite.verticalFrames = 2
      this.sprite.horizontalFrameIndex = 0
      this.sprite.verticalFrameIndex = 1
      this.sprite.drawCount = 0
      this.sprite.onload = () => {
        this.sprite.isReady = true
        this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.horizontalFrames)
        this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.verticalFrames)
        this.width = this.sprite.frameWidth
        this.height = this.sprite.frameHeight
      }