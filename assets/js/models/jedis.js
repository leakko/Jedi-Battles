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


      this.drawCount = 0

  
      this.spriteAttack = new Image()
      this.spriteAttack.src = './assets/img/assassin/attack 1 and 2.png'
      this.spriteAttack.isReady = false
      this.spriteAttack.horizontalFrames = 1
      this.spriteAttack.verticalFrames = 19
      this.spriteAttack.horizontalFrameIndex = 0
      this.spriteAttack.verticalFrameIndex = 0
      this.spriteAttack.drawCount = 0
      this.spriteAttack.onload = () => {
        this.spriteAttack.isReady = true
        this.spriteAttack.frameWidth = Math.floor(this.spriteAttack.width / this.spriteAttack.horizontalFrames)
        this.spriteAttack.frameHeight = Math.floor(this.spriteAttack.height / this.spriteAttack.verticalFrames)
        this.width = this.spriteAttack.frameWidth
        this.height = this.spriteAttack.frameHeight
      }

      this.spriteRun = new Image()
      this.spriteRun.src = './assets/img/assassin/idle first frame and run.png'
      this.spriteRun.isReady = false
      this.spriteRun.width = 142
      this.spriteRun.height = 963;
      this.spriteRun.horizontalFrames = 1
      this.spriteRun.verticalFrames = 9
      this.spriteRun.horizontalFrameIndex = 0
      this.spriteRun.verticalFrameIndex = 0
      this.spriteRun.drawCount = 0
      this.spriteRun.onload = () => {
        this.spriteRun.isReady = true
        this.spriteRun.frameWidth = Math.floor(this.spriteRun.width / this.spriteRun.horizontalFrames)
        this.spriteRun.frameHeight = Math.floor(this.spriteRun.height / this.spriteRun.verticalFrames)
      }

      this.spriteTeleport = new Image()
      this.spriteTeleport.src = './assets/img/assassin/teleport slam.png'
      this.spriteTeleport.isReady = false
      this.spriteTeleport.horizontalFrames = 1
      this.spriteTeleport.verticalFrames = 9
      this.spriteTeleport.horizontalFrameIndex = 0
      this.spriteTeleport.verticalFrameIndex = 0
      this.spriteTeleport.drawCount = 0
      this.spriteTeleport.onload = () => {
        this.spriteTeleport.isReady = true
        this.spriteTeleport.frameWidth = Math.floor(this.spriteTeleport.width / this.spriteTeleport.horizontalFrames)
        this.spriteTeleport.frameHeight = Math.floor(this.spriteTeleport.height / this.spriteTeleport.verticalFrames)
        this.width = this.spriteTeleport.frameWidth
        this.height = this.spriteTeleport.frameHeight
      }

      this.spriteDeath = new Image()
      this.spriteDeath.src = './assets/img/assassin/hit and death.png'
      this.spriteDeath.isReady = false
      this.spriteDeath.horizontalFrames = 1
      this.spriteDeath.verticalFrames = 8
      this.spriteDeath.horizontalFrameIndex = 0
      this.spriteDeath.verticalFrameIndex = 0
      this.spriteDeath.drawCount = 0
      this.spriteDeath.onload = () => {
        this.spriteDeath.isReady = true
        this.spriteDeath.frameWidth = Math.floor(this.spriteDeath.width / this.spriteDeath.horizontalFrames)
        this.spriteDeath.frameHeight = Math.floor(this.spriteDeath.height / this.spriteDeath.verticalFrames)
        this.width = this.spriteDeath.frameWidth
        this.height = this.spriteDeath.frameHeight
      }

      draw() {
        if (this.spriteRun.isReady()) {
          this.ctx.drawImage(
            this.spriteRun,
            this.spriteRun.horizontalFrameIndex * this.spriteRun.frameWidth,
            this.spriteRun.verticalFrameIndex * this.spriteRun.frameHeight,
            this.spriteRun.frameWidth,
            this.spriteRun.frameHeight,
            this.x,
            this.y,
            this.spriteRun.frameWidth,
            this.spriteRun.frameHeight
          )
    
          this.spriteRun.drawCount++
          this.bullets.forEach(bullet => bullet.draw())
          this.animate()
        }
      }
