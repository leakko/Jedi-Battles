class JediOne {
    constructor(ctx, x, y) {
      this.ctx = ctx
  
      this.x = x
      this.minX = 0
      this.maxX = this.ctx.canvas.height + this.height
      this.vx = 0
  
      this.y = y
      //this.vy = 1
      //this.ay = 0.2

      this.vy = 0
      this.ay = 0


      this.drawCount = 0


      this.spriteAttackRight = new Image()
      this.spriteAttackRight.src = './assets/img/jedi-right/attack 1 and 2.png'
      this.spriteAttackRight.isReady = false
      this.spriteAttackRight.horizontalFrames = 1
      this.spriteAttackRight.verticalFrames = 19
      this.spriteAttackRight.horizontalFrameIndex = 0
      this.spriteAttackRight.verticalFrameIndex = 0
      this.spriteAttackRight.drawCount = 0
      this.spriteAttackRight.onload = () => {
        this.spriteAttackRight.isReady = true
        this.spriteAttackRight.frameWidth = Math.floor(this.spriteAttackRight.width / this.spriteAttackRight.horizontalFrames)
        this.spriteAttackRight.frameHeight = Math.floor(this.spriteAttackRight.height / this.spriteAttackRight.verticalFrames)
        this.width = this.spriteAttackRight.frameWidth
        this.height = this.spriteAttackRight.frameHeight
      }

      this.spriteRunRight = new Image()
      this.spriteRunRight.src = './assets/img/jedi-right/idle first frame and run centered.png'
      this.spriteRunRight.isReady = false
      this.spriteRunRight.width = 142
      this.spriteRunRight.height = 963;
      this.spriteRunRight.horizontalFrames = 1
      this.spriteRunRight.verticalFrames = 9
      this.spriteRunRight.horizontalFrameIndex = 0
      this.spriteRunRight.verticalFrameIndex = 0
      this.spriteRunRight.drawCount = 0
      this.spriteRunRight.onload = () => {
        this.spriteRunRight.isReady = true
        this.spriteRunRight.frameWidth = Math.floor(this.spriteRunRight.width / this.spriteRunRight.horizontalFrames)
        this.spriteRunRight.frameHeight = Math.floor(this.spriteRunRight.height / this.spriteRunRight.verticalFrames)
      }

      this.spriteTeleportRight = new Image()
      this.spriteTeleportRight.src = './assets/img/jedi-right/teleport slam.png'
      this.spriteTeleportRight.isReady = false
      this.spriteTeleportRight.horizontalFrames = 1
      this.spriteTeleportRight.verticalFrames = 9
      this.spriteTeleportRight.horizontalFrameIndex = 0
      this.spriteTeleportRight.verticalFrameIndex = 0
      this.spriteTeleportRight.drawCount = 0
      this.spriteTeleportRight.onload = () => {
        this.spriteTeleportRight.isReady = true
        this.spriteTeleportRight.frameWidth = Math.floor(this.spriteTeleportRight.width / this.spriteTeleportRight.horizontalFrames)
        this.spriteTeleportRight.frameHeight = Math.floor(this.spriteTeleportRight.height / this.spriteTeleportRight.verticalFrames)
        this.width = this.spriteTeleportRight.frameWidth
        this.height = this.spriteTeleportRight.frameHeight
      }

      this.spriteDeathRight = new Image()
      this.spriteDeathRight.src = './assets/img/jedi-right/hit and death.png'
      this.spriteDeathRight.isReady = false
      this.spriteDeathRight.horizontalFrames = 1
      this.spriteDeathRight.verticalFrames = 8
      this.spriteDeathRight.horizontalFrameIndex = 0
      this.spriteDeathRight.verticalFrameIndex = 0
      this.spriteDeathRight.drawCount = 0
      this.spriteDeathRight.onload = () => {
        this.spriteDeathRight.isReady = true
        this.spriteDeathRight.frameWidth = Math.floor(this.spriteDeathRight.width / this.spriteDeathRight.horizontalFrames)
        this.spriteDeathRight.frameHeight = Math.floor(this.spriteDeathRight.height / this.spriteDeathRight.verticalFrames)
        this.width = this.spriteDeathRight.frameWidth
        this.height = this.spriteDeathRight.frameHeight
      }

      this.spriteAttackLeft = new Image()
      this.spriteAttackLeft.src = './assets/img/jedi-left/attack 1 and 2.png'
      this.spriteAttackLeft.isReady = false
      this.spriteAttackLeft.horizontalFrames = 1
      this.spriteAttackLeft.verticalFrames = 19
      this.spriteAttackLeft.horizontalFrameIndex = 0
      this.spriteAttackLeft.verticalFrameIndex = 0
      this.spriteAttackLeft.drawCount = 0
      this.spriteAttackLeft.onload = () => {
        this.spriteAttackLeft.isReady = true
        this.spriteAttackLeft.frameWidth = Math.floor(this.spriteAttackLeft.width / this.spriteAttackLeft.horizontalFrames)
        this.spriteAttackLeft.frameHeight = Math.floor(this.spriteAttackLeft.height / this.spriteAttackLeft.verticalFrames)
        this.width = this.spriteAttackLeft.frameWidth
        this.height = this.spriteAttackLeft.frameHeight
      }

      this.spriteRunLeft = new Image()
      this.spriteRunLeft.src = './assets/img/jedi-left/idle first frame and run centered.png'
      this.spriteRunLeft.isReady = false
      this.spriteRunLeft.width = 142
      this.spriteRunLeft.height = 963;
      this.spriteRunLeft.horizontalFrames = 1
      this.spriteRunLeft.verticalFrames = 9
      this.spriteRunLeft.horizontalFrameIndex = 0
      this.spriteRunLeft.verticalFrameIndex = 0
      this.spriteRunLeft.drawCount = 0
      this.spriteRunLeft.onload = () => {
        this.spriteRunLeft.isReady = true
        this.spriteRunLeft.frameWidth = Math.floor(this.spriteRunLeft.width / this.spriteRunLeft.horizontalFrames)
        this.spriteRunLeft.frameHeight = Math.floor(this.spriteRunLeft.height / this.spriteRunLeft.verticalFrames)
      }

      this.spriteTeleportLeft = new Image()
      this.spriteTeleportLeft.src = './assets/img/jedi-left/teleport slam.png'
      this.spriteTeleportLeft.isReady = false
      this.spriteTeleportLeft.horizontalFrames = 1
      this.spriteTeleportLeft.verticalFrames = 9
      this.spriteTeleportLeft.horizontalFrameIndex = 0
      this.spriteTeleportLeft.verticalFrameIndex = 0
      this.spriteTeleportLeft.drawCount = 0
      this.spriteTeleportLeft.onload = () => {
        this.spriteTeleportLeft.isReady = true
        this.spriteTeleportLeft.frameWidth = Math.floor(this.spriteTeleportLeft.width / this.spriteTeleportLeft.horizontalFrames)
        this.spriteTeleportLeft.frameHeight = Math.floor(this.spriteTeleportLeft.height / this.spriteTeleportLeft.verticalFrames)
        this.width = this.spriteTeleportLeft.frameWidth
        this.height = this.spriteTeleportLeft.frameHeight
      }

      this.spriteDeathLeft = new Image()
      this.spriteDeathLeft.src = './assets/img/jedi-left/hit and death.png'
      this.spriteDeathLeft.isReady = false
      this.spriteDeathLeft.horizontalFrames = 1
      this.spriteDeathLeft.verticalFrames = 8
      this.spriteDeathLeft.horizontalFrameIndex = 0
      this.spriteDeathLeft.verticalFrameIndex = 0
      this.spriteDeathLeft.drawCount = 0
      this.spriteDeathLeft.onload = () => {
        this.spriteDeathLeft.isReady = true
        this.spriteDeathLeft.frameWidth = Math.floor(this.spriteDeathLeft.width / this.spriteDeathLeft.horizontalFrames)
        this.spriteDeathLeft.frameHeight = Math.floor(this.spriteDeathLeft.height / this.spriteDeathLeft.verticalFrames)
        this.width = this.spriteDeathLeft.frameWidth
        this.height = this.spriteDeathLeft.frameHeight
      }


      this.movements = {
        up: false,
        down: false,
        right: false,
        left: false,
      }

      this.isJumping = false;

      this.isAttacking = false;

      this.canAttack = true;

    }

      draw() {
        if(this.movements.right) {
          if (this.spriteRunRight.isReady) {
            this.ctx.drawImage(
              this.spriteRunRight,
              this.spriteRunRight.horizontalFrameIndex * this.spriteRunRight.frameWidth,
              this.spriteRunRight.verticalFrameIndex * this.spriteRunRight.frameHeight,
              this.spriteRunRight.frameWidth,
              this.spriteRunRight.frameHeight,
              this.x,
              this.y,
              this.spriteRunRight.frameWidth*2,
              this.spriteRunRight.frameHeight*2,
            )
    
            this.spriteRunRight.drawCount++;
            this.lastDirection = "right";
          }
        } else if (this.movements.left) {
          if (this.spriteRunLeft.isReady) {
            this.ctx.drawImage(
              this.spriteRunLeft,
              this.spriteRunLeft.horizontalFrameIndex * this.spriteRunLeft.frameWidth,
              this.spriteRunLeft.verticalFrameIndex * this.spriteRunLeft.frameHeight,
              this.spriteRunLeft.frameWidth,
              this.spriteRunLeft.frameHeight,
              this.x,
              this.y,
              this.spriteRunLeft.frameWidth*2,
              this.spriteRunLeft.frameHeight*2,
            )
            this.spriteRunLeft.drawCount++;this.lastDirection = "right";
            this.lastDirection = "left";
          }
        } else {
          if (this.lastDirection == "right") {
            if (this.spriteRunRight.isReady) {
              this.ctx.drawImage(
                this.spriteRunRight,
                this.spriteRunRight.horizontalFrameIndex * this.spriteRunRight.frameWidth,
                this.spriteRunRight.verticalFrameIndex * this.spriteRunRight.frameHeight,
                this.spriteRunRight.frameWidth,
                this.spriteRunRight.frameHeight,
                this.x,
                this.y,
                this.spriteRunRight.frameWidth*2,
                this.spriteRunRight.frameHeight*2,
              )
      
              this.spriteRunRight.drawCount++;
            }
          } else if (this.lastDirection == "left") {
            if (this.spriteRunLeft.isReady) {
              this.ctx.drawImage(
                this.spriteRunLeft,
                this.spriteRunLeft.horizontalFrameIndex * this.spriteRunLeft.frameWidth,
                this.spriteRunLeft.verticalFrameIndex * this.spriteRunLeft.frameHeight,
                this.spriteRunLeft.frameWidth,
                this.spriteRunLeft.frameHeight,
                this.x,
                this.y,
                this.spriteRunLeft.frameWidth*2,
                this.spriteRunLeft.frameHeight*2,
              )
              this.spriteRunLeft.drawCount++;
            }
          }  else {
            if (this.spriteRunRight.isReady) {
              this.ctx.drawImage(
                this.spriteRunRight,
                this.spriteRunRight.horizontalFrameIndex * this.spriteRunRight.frameWidth,
                this.spriteRunRight.verticalFrameIndex * this.spriteRunRight.frameHeight,
                this.spriteRunRight.frameWidth,
                this.spriteRunRight.frameHeight,
                this.x,
                this.y,
                this.spriteRunRight.frameWidth*2,
                this.spriteRunRight.frameHeight*2,
              )
              this.spriteRunRight.drawCount++;
            }
        }
        }
      }

      onKeyEvent(event) {
        const status = event.type === 'keydown'
        switch (event.keyCode) {
          case 87:
            this.movements.up = status
            break;
          case 68:
            this.movements.right = status
            break;
          case 65:
            this.movements.left = status
            break;
          case 83:
            this.movements.down = status
            break;
          case 69:
            this.isAttacking = status
            if (this.canAttack) {
              // this.animateJump()
              // this.bullets.push(new Fireball(this.ctx, this.x + this.width, this.y, this.maxY + this.height))
              // this.sounds.fire.currentTime = 0
              // this.sounds.fire.play()
              this.canAttack = false
              setTimeout(() => {
                this.canAttack = true
              }, 500);
            }
            break;
    
          default:
            break;
        }
      }

      move() {
        if (this.movements.up && !this.isJumping) {
          this.isJumping = true
          this.vy = -8
        } else if (this.isJumping) {
          this.vy += 2
        }
    
        if (this.movements.right) {
          this.vx = 4
        } else if (this.movements.left) {
          this.vx = -4
        } else {
          this.vx = 0
        }

        this.vy += this.ay;
        this.x += this.vx
        this.y += this.vy
    
        // if (this.x >= this.maxX) {
        //   this.x = this.maxX
        // } else if (this.x <= this.minX) {
        //   this.x = this.minX
        // }
    
        // if (this.y >= this.maxY) {
        //   this.isJumping = false
        //   this.y = this.maxY
        //   this.vy = 0
        // }
      }
}