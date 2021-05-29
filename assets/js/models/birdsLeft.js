class BirdLeft {
    constructor(ctx) {
        
        this.ctx = ctx;
        this.x = this.ctx.canvas.width + 100;
        this.y = Math.round(Math.random() * 250);
        this.height = 50;
        this.width = 50;

        this.drawCount = 0;

        this.isDead = false;

        this.deadBird = new Image();
        this.deadBird.src = "./assets/img/birdRight/deadBird.png";
        this.deadBird.isReady = false;
        this.deadBird.onload = () => {
            this.deadBird.isReady = true;
        }

        
        this.birdSprite = new Image()
        this.birdSprite.src = './assets/img/birdLeft/birdFly.png'
        this.birdSprite.isReady = false
        this.birdSprite.horizontalFrames = 2
        this.birdSprite.verticalFrames = 1
        this.birdSprite.horizontalFrameIndex = 0
        this.birdSprite.verticalFrameIndex = 0
        this.birdSprite.drawCount = 0
        this.birdSprite.onload = () => {
        this.birdSprite.isReady = true
        this.birdSprite.frameWidth = Math.floor(this.birdSprite.width / this.birdSprite.horizontalFrames)
        this.birdSprite.frameHeight = Math.floor(this.birdSprite.height / this.birdSprite.verticalFrames)
      }
    }

    draw() {
        this.drawCount++;

        if (!this.isDead) {
            if (this.birdSprite.isReady) {
                this.ctx.drawImage (
                    this.birdSprite,
                    this.birdSprite.horizontalFrameIndex * this.birdSprite.frameWidth,
                    this.birdSprite.verticalFrameIndex * this.birdSprite.frameHeight,
                    this.birdSprite.frameWidth,
                    this.birdSprite.frameHeight,
                    this.x,
                    this.y,
                    this.birdSprite.frameWidth,
                    this.birdSprite.frameHeight,
                )
            }
        } else {
            if (this.deadBird.isReady) {
                this.ctx.drawImage (
                    this.deadBird,
                    this.x,
                    this.y,
                    this.width - 30,
                    this.height - 30
                )
            }
        }
    }

    animateFly() {
        if(this.drawCount % 8 == 0) {
            if(this.birdSprite.horizontalFrameIndex == 0) {
                this.birdSprite.horizontalFrameIndex = 1;
            } else {
                this.birdSprite.horizontalFrameIndex = 0;
            }
        }
    }

    move () {
        if (!this.isDead) {
            this.x -= 2;
          let height = Math.round(Math.random());
          if (height == 0) {
              this.y -= 0.3;
            } else {
              this.y += 0.3;
            }
        } else {
            this.y += 5;
            let width = Math.round(Math.random());
            if (width == 0) {
                this.x -= 0.6;
              } else {
                this.x += 0.6;
              }
        }
    }
}