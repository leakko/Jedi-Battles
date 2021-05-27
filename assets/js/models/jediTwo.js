class JediTWo {
  constructor(ctx, x, y) {
    this.ctx = ctx

    this.x = x
    this.minX = 0
    this.maxX = this.ctx.canvas.height + this.height
    this.vx = 0

    this.y = y
    this.vy = 2;
    this.ay = 0.3;

    this.health = 100;
    this.damage = 20;

    this.dead = false;

    this.drawCount = 0

    this.sword = new Audio("./assets/audio/finalSword.mp3");
    this.sword.volume = 0.1;
    this.sword.status = false;

    this.deathIntervalRight = undefined;
    this.deathIntervalLeft = undefined;



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
    }

    this.movements = {
      up: false,
      down: false,
      right: false,
      left: false,
    }

    this.isJumping = false;

    this.isAttacking = false;

    this.AttackId = undefined;

    this.canAttack = true;

    this.canJump = true;

  }

  draw() {
    if(!this.dead) {
      if (this.canAttack) {
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
            this.spriteRunLeft.drawCount++;
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
              this.spriteRunRight.drawCount = 0;
              this.spriteRunLeft.drawCount = 0;
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
              this.spriteRunRight.drawCount = 0;
              this.spriteRunLeft.drawCount = 0;
            }
          }  else {
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
              this.spriteRunLeft.drawCount = 0;
              this.spriteRunLeft.drawCount = 0;
            }
        }
        }
      } else {
        if (this.lastDirection == "right") {
          if (this.spriteAttackRight.isReady) {
            this.ctx.drawImage(
              this.spriteAttackRight,
              this.spriteAttackRight.horizontalFrameIndex * this.spriteAttackRight.frameWidth,
              this.spriteAttackRight.verticalFrameIndex * this.spriteAttackRight.frameHeight,
              this.spriteAttackRight.frameWidth,
              this.spriteAttackRight.frameHeight,
              this.x,
              this.y,
              this.spriteAttackRight.frameWidth*2,
              this.spriteAttackRight.frameHeight*2,
            )
            if(this.spriteAttackRight.drawCount++ > 56) {
              this.spriteAttackRight.drawCount = 0;
            }
            if(this.spriteAttackLeft.drawCount++ > 56) {
              this.spriteAttackLeft.drawCount = 0;
            }
            this.spriteAttackRight.drawCount++;
          }
        } else if (this.lastDirection == "left") {
          if (this.spriteAttackLeft.isReady) {
            this.ctx.drawImage(
              this.spriteAttackLeft,
              this.spriteAttackLeft.horizontalFrameIndex * this.spriteAttackLeft.frameWidth,
              this.spriteAttackLeft.verticalFrameIndex * this.spriteAttackLeft.frameHeight,
              this.spriteAttackLeft.frameWidth,
              this.spriteAttackLeft.frameHeight,
              this.x,
              this.y,
              this.spriteAttackLeft.frameWidth*2,
              this.spriteAttackLeft.frameHeight*2,
            )
            if(this.spriteAttackRight.drawCount++ > 56) {
              this.spriteAttackRight.drawCount = 0;
            }
            if(this.spriteAttackLeft.drawCount++ > 56) {
              this.spriteAttackLeft.drawCount = 0;
            }
            this.spriteAttackLeft.drawCount++;
          }
        } else {
          if (this.spriteAttackLeft.isReady) {
            this.ctx.drawImage(
              this.spriteAttackLeft,
              this.spriteAttackLeft.horizontalFrameIndex * this.spriteAttackLeft.frameWidth,
              this.spriteAttackLeft.verticalFrameIndex * this.spriteAttackLeft.frameHeight,
              this.spriteAttackLeft.frameWidth,
              this.spriteAttackLeft.frameHeight,
              this.x,
              this.y,
              this.spriteAttackLeft.frameWidth*2,
              this.spriteAttackLeft.frameHeight*2,
            )
            if(this.spriteAttackRight.drawCount++ > 56) {
              this.spriteAttackRight.drawCount = 0;
            }
            if(this.spriteAttackLeft.drawCount++ > 56) {
              this.spriteAttackLeft.drawCount = 0;
            }
            this.spriteAttackLeft.drawCount++;
          }
        }
      }
    } else {
      if (this.lastDirection == "right") {
        if (this.spriteDeathRight.isReady) {
          this.ctx.drawImage(
            this.spriteDeathRight,
            this.spriteDeathRight.horizontalFrameIndex * this.spriteDeathRight.frameWidth,
            this.spriteDeathRight.verticalFrameIndex * this.spriteDeathRight.frameHeight,
            this.spriteDeathRight.frameWidth,
            this.spriteDeathRight.frameHeight,
            this.x,
            this.y,
            this.spriteDeathRight.frameWidth*2,
            this.spriteDeathRight.frameHeight*2,
          )
          if(this.spriteDeathRight.drawCount++ > 56) {
            this.spriteDeathRight.drawCount = 0;
          }
          if(this.spriteDeathLeft.drawCount++ > 56) {
            this.spriteDeathLeft.drawCount = 0;
          }
          this.spriteDeathRight.drawCount++;
        }
      } else if (this.lastDirection == "left") {
        if (this.spriteDeathLeft.isReady) {
          this.ctx.drawImage(
            this.spriteDeathLeft,
            this.spriteDeathLeft.horizontalFrameIndex * this.spriteDeathLeft.frameWidth,
            this.spriteDeathLeft.verticalFrameIndex * this.spriteDeathLeft.frameHeight,
            this.spriteDeathLeft.frameWidth,
            this.spriteDeathLeft.frameHeight,
            this.x,
            this.y,
            this.spriteDeathLeft.frameWidth*2,
            this.spriteDeathLeft.frameHeight*2,
          )
          if(this.spriteDeathRight.drawCount++ > 56) {
            this.spriteDeathRight.drawCount = 0;
          }
          if(this.spriteDeathLeft.drawCount++ > 56) {
            this.spriteDeathLeft.drawCount = 0;
          }
          this.spriteDeathLeft.drawCount++;
        }
      } else {
        if (this.spriteDeathLeft.isReady) {
          this.ctx.drawImage(
            this.spriteDeathLeft,
            this.spriteDeathLeft.horizontalFrameIndex * this.spriteDeathLeft.frameWidth,
            this.spriteDeathLeft.verticalFrameIndex * this.spriteDeathLeft.frameHeight,
            this.spriteDeathLeft.frameWidth,
            this.spriteDeathLeft.frameHeight,
            this.x,
            this.y,
            this.spriteDeathLeft.frameWidth*2,
            this.spriteDeathLeft.frameHeight*2,
          )
          if(this.spriteDeathLeft.drawCount++ > 56) {
            this.spriteDeathLeft.drawCount = 0;
          }
          if(this.spriteDeathRight.drawCount++ > 56) {
            this.spriteDeathRight.drawCount = 0;
          }
          this.spriteDeathLeft.drawCount++;
        }
      }
    }
  }

    onKeyEvent(event) {
      const status = event.type === 'keydown'
        const eventCode = event.keyCode;

        if (eventCode == 38) {
          if (this.canJump) {
            this.movements.up = status;
          }
          if (!this.canJump) {
            this.movements.up = false;
          }
        } else if (eventCode == 39) {
          this.movements.right = status
        } else if (eventCode == 37) {
          this.movements.left = status
        } else if (eventCode == 40) {
          this.movements.down = status
        } else if (eventCode == 191) {
          this.sword.play();
          if (this.canAttack) {
            this.isAttacking = status;
            this.canAttack = false;
            this.AttackId = setTimeout (() => {
              this.canAttack = true;
            }, 875)
          }
        }
    }

    move() {
      if (!this.dead) {
        if (this.movements.up && !this.isJumping && this.canJump) {
          this.isJumping = true;
          this.canJump = false;
  
          setTimeout(() => {
            this.isJumping = false;
          }, 200);
        }
  
        if (!this.isJumping) {
          if (this.movements.right) {
            this.vx = 4
  
          } else if (this.movements.left) {
            this.vx = -4
          } else {
            this.vx = 0
          }
  
          this.ay = 0.3;
          if (this.vy < 20) {
            this.vy += this.ay;
          }
          this.vy += this.ay;
          this.y += this.vy;
          this.x += this.vx
        }
  
        if (this.isJumping) {
            this.vx = 0;
            this.vy = -12
            this.ay = 2
          if (this.vy < 20) {
            this.vy += this.ay;
          }
          this.y += this.vy;
          this.x += this.vx
        }
      }
    }

    animateRun () {
      if (!this.isJumping) {
        if (this.spriteRunRight.drawCount % 3 == 0) {
          if (this.spriteRunRight.verticalFrameIndex >= this.spriteRunRight.verticalFrames - 1) {
            this.spriteRunRight.verticalFrameIndex = 0
          } else {
            this.spriteRunRight.verticalFrameIndex++;
          }
        }
        if (this.spriteRunRight.drawCount == 0) {
          this.spriteRunRight.verticalFrameIndex = 0;
        }

        if (this.spriteRunLeft.drawCount % 3 == 0) {
          if (this.spriteRunLeft.verticalFrameIndex >= this.spriteRunLeft.verticalFrames - 1) {
            this.spriteRunLeft.verticalFrameIndex = 0
          } else {
            this.spriteRunLeft.verticalFrameIndex++;
          }
        }
        if (this.spriteRunLeft.drawCount == 0) {
          this.spriteRunLeft.verticalFrameIndex = 0;
        }
      }
    }

    animateAttack () {
      if (!this.canAttack) {
        if (this.spriteAttackRight.drawCount % 3 == 0) {
          if (this.spriteAttackRight.verticalFrameIndex >= this.spriteAttackRight.verticalFrames - 1) {
            this.spriteAttackRight.verticalFrameIndex = 0
          } else {
            this.spriteAttackRight.verticalFrameIndex++;
          }
        }

        if (this.spriteAttackLeft.drawCount % 3 == 0) {
          if (this.spriteAttackLeft.verticalFrameIndex >= this.spriteAttackLeft.verticalFrames - 1) {
            this.spriteAttackLeft.verticalFrameIndex = 0
          } else {
            this.spriteAttackLeft.verticalFrameIndex++;
          }
        }
      }
    }

    animateDeath () {
      if (this.dead) {
        if (this.spriteDeathRight.verticalFrameIndex < this.spriteDeathRight.verticalFrames) {
          this.deathIntervalRight = setInterval (() => {
            this.spriteDeathRight.verticalFrameIndex++
          }, 400)
        } else {
          clearInterval(this.deathIntervalRight)
        }

        if (this.spriteDeathLeft.verticalFrameIndex < this.spriteDeathLeft.verticalFrames) {
          this.deathIntervalLeft = setInterval (() => {
            this.spriteDeathLeft.verticalFrameIndex++
          }, 400)
        } else {
          clearInterval(this.deathIntervalLeft)
        }
      }
    }


    collidesWith (tile) {
      return this.x +20 + Math.floor(this.spriteRunLeft.width / this.spriteRunLeft.horizontalFrames) >= tile.x && 
      this.x + 20 <= tile.x + tile.width &&
      this.y + Math.floor(this.spriteRunRight.height / this.spriteRunRight.verticalFrames) + 107 >= tile.y &&
      this.y + Math.floor(this.spriteRunRight.height / this.spriteRunRight.verticalFrames) + 107 <= tile.y + tile.height
    }
    
    hitWith (otherJedi) {
        if (this.lastDirection == "left") {
          return this.x + 50 <= otherJedi.x + 20 + Math.floor(this.spriteRunLeft.width / this.spriteRunLeft.horizontalFrames) && 
        this.x + 50 >= otherJedi.x + 20 &&
        this.y + 107 >= otherJedi.y + 107 &&
        this.y + 107 <= otherJedi.y + Math.floor(this.spriteRunRight.height / this.spriteRunRight.verticalFrames) + 107;
        } else {
          return this.x + Math.floor(this.spriteRunLeft.width / this.spriteRunLeft.horizontalFrames) - 30 >= otherJedi.x && 
        this.x + Math.floor(this.spriteRunLeft.width / this.spriteRunLeft.horizontalFrames) -30 <= otherJedi.x + Math.floor(this.spriteRunLeft.width / this.spriteRunLeft.horizontalFrames) &&
        this.y + 107 >= otherJedi.y + 107 &&
        this.y + 107 <= otherJedi.y + Math.floor(this.spriteRunRight.height / this.spriteRunRight.verticalFrames) + 107;
        }
      }

   death () {
        this.dead = true;
        this.animateDeath();
      }
}