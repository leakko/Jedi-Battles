class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.ctx = this.canvas.getContext('2d');

        this.fps = 1000 / 60;
        this.drawInterval = undefined;

        this.background = new Background(this.ctx);
        this.sun = new Sun(this.ctx);
        this.title = new Title(this.ctx);
        this.tiles = [
            new Tile(this.ctx, 200, 500),
            new Tile(this.ctx, 300, 500),
            new Tile(this.ctx, 400, 500),
            new Tile(this.ctx, 500, 500),
            new Tile(this.ctx, 600, 500),
            new Tile(this.ctx, 700, 500),
            new Tile(this.ctx, 800, 500),
            new Tile(this.ctx, 900, 500),
            new Tile(this.ctx, 400, 300),
            new Tile(this.ctx, 500, 300),
            new Tile(this.ctx, 600, 300),
        ]

        this.portals = [
            new Portal(this.ctx, 375, 325),
            new Portal(this.ctx, 475, 325),
            new Portal(this.ctx, 575, 325),
            new Portal(this.ctx, 675, 325),
        ]

        this.jediOne = new JediOne(this.ctx, 150, 286);
        this.jediTwo = new JediTWo(this.ctx, 865, 286);

        this.player1 = new Player1 (this.ctx, 1);
        this.player2 = new Player2 (this.ctx, 2);

        this.life1 = new LifeBar (this.ctx);
        this.life2 = new LifeBar (this.ctx);

        this.lifeFrame1 = new LifeFrame (this.ctx);
        this.lifeFrame2 = new LifeFrame (this.ctx);

        this.extraTiles = [
            new Tile(this.ctx, 1000, 500),
            new Tile(this.ctx, 700, 300),
        ]

        this.isGameOver = false;

        this.gameOverImg = new Image();
            this.gameOverImg.src = "./assets/img/gameOver/gameOver.jpg"
            this.gameOverImg.isReady = false;

            this.gameOverImg.onload = () => {
                this.gameOverImg.isReady = true;
            }
        
        this.win1Img = new Image();
            this.win1Img.src = "./assets/img/win/player1.png"
            this.win1Img.isReady = false;
            this.win1Img.onload = () => {
                this.win1Img.isReady = true;
            } 

        this.win2Img = new Image();
            this.win2Img.src = "./assets/img/win/player2.png"
            this.win2Img.isReady = false;
            this.win2Img.onload = () => {
                this.win2Img.isReady = true;
            }
    
        this.isRestartCalled = false;
        this.isPlaying = false;

        this.theme = new Audio("./assets/audio/music.mp3")
        this.theme.volume = 0.1;

    } 

    start () {
        this.isPlaying = true;
        this.isRestartCalled = false;
        this.jediOne.x = 150;
        this.jediOne.y = 286;
        this.jediOne.health = 100;
        this.jediOne.lastDirection = "right";
        this.jediTwo.x = 865;
        this.jediTwo.y = 286;
        this.jediTwo.health = 100;
        this.jediTwo.lastDirection = "left";

        if (!this.drawInterval) {
          this.drawInterval = setInterval (() => {
            this.clear();
            this.move();
            this.combat();
            this.draw();
            this.checkGameOver();
          }, this.fps)
        }
    }

    draw () {
        this.background.draw();
        this.sun.draw();
        this.title.draw();
        this.tiles.forEach (tile => tile.draw());
        this.extraTiles.forEach (tile => tile.draw());
        this.portals.forEach (portal => portal.draw());
        this.jediOne.animateRun()
        this.jediOne.animateAttack()
        this.jediOne.draw();
        this.player1.draw(this.jediOne.x, this.jediOne.y);
        this.life1.draw(this.jediOne.x, this.jediOne.y, this.jediOne.health);
        this.lifeFrame1.draw(this.jediOne.x, this.jediOne.y, this.jediOne.health)
        this.jediTwo.animateRun();
        this.jediTwo.animateAttack();
        this.jediTwo.draw();
        this.player2.draw(this.jediTwo.x, this.jediTwo.y)
        this.life2.draw(this.jediTwo.x, this.jediTwo.y, this.jediTwo.health);
        this.lifeFrame2.draw(this.jediTwo.x, this.jediTwo.y, this.jediTwo.health)

    }

    move() {
        this.sun.move();
        this.tiles.forEach ((tile) => {
            if(this.jediOne.collidesWith(tile)) {
                this.jediOne.y = tile.y - this.jediOne.spriteRunRight.height/this.jediOne.spriteRunRight.verticalFrames -107;
                this.jediOne.vy = 0;
                this.jediOne.canJump = true;
        }})
        this.tiles.forEach ((tile) => {
            if(this.jediTwo.collidesWith(tile)) {
                this.jediTwo.y = tile.y - this.jediTwo.spriteRunRight.height/this.jediTwo.spriteRunRight.verticalFrames -107;
                this.jediTwo.vy = 0;
                this.jediTwo.canJump = true;
        }})
        this.jediOne.move();
        this.jediTwo.move();
    }

    combat () {
        let firstJedi = this.jediOne;
        let secondJedi = this.jediTwo;
        if (!firstJedi.canAttack && firstJedi.hitWith(secondJedi)) {
            secondJedi.health -= Math.round((firstJedi.spriteAttackRight.drawCount/50) + (firstJedi.spriteAttackLeft.drawCount/50));
            if (secondJedi.health < 0) {
                secondJedi.health = 0;
            }
            secondJedi.x += (secondJedi.x - firstJedi.x)*0.05;
            secondJedi.y += 25*0.2;
            if (secondJedi.health <= 0) {
                secondJedi.death();
            }
        }
        if (!secondJedi.canAttack && secondJedi.hitWith(firstJedi)) {
            firstJedi.health -= Math.round((secondJedi.spriteAttackRight.drawCount/50) + (secondJedi.spriteAttackLeft.drawCount/50));
            if (firstJedi.health < 0) {
                firstJedi.health = 0;
            }
            firstJedi.x += (firstJedi.x - secondJedi.x)*0.05;
            firstJedi.y += 25*0.2;
            if (firstJedi.health <= 0) {
                firstJedi.death();
            }
        }
    }

    clear () {
        this.ctx.clearRect (0, 0, this.canvas.width, this.canvas.height);
    }

    onKeyEvent(event) {
        this.jediOne.onKeyEvent(event);
        this.jediTwo.onKeyEvent(event);
    }
    
    checkGameOver() {
        if (this.jediOne.health <= 0 || this.jediOne.y > this.canvas.height) {

            this.ctx.save();

            setTimeout (() => {

              if (this.gameOverImg.isReady) {
                  clearInterval(this.drawInterval);
                  this.clear();
                  this.ctx.drawImage (
                      this.gameOverImg,
                      0,
                      0,
                      this.canvas.width,
                      this.canvas.height
                  )
                }
              if (this.win2Img.isReady) {
                  this.ctx.drawImage (
                      this.win2Img,
                      this.canvas.width/2 - 300,
                      this.canvas.height * 5/6 - 75,
                      600,
                      100,
                  )
                }
                this.ctx.restore();
                this.restart();
                this.theme.pause();

            }, 1500)

        }

        if (this.jediTwo.health <= 0 || this.jediTwo.y > this.canvas.height) {

            this.ctx.save();

            setTimeout (() => {

              if (this.gameOverImg.isReady) {
                  clearInterval(this.drawInterval);
                  this.clear();
                  this.ctx.drawImage (
                      this.gameOverImg,
                      0,
                      0,
                      this.canvas.width,
                      this.canvas.height
                  )
                }
              if (this.win2Img.isReady) {
                  this.ctx.drawImage (
                      this.win1Img,
                      this.canvas.width/2 - 300,
                      this.canvas.height * 5/6 - 75,
                      600,
                      100,
                  )
                }
                this.ctx.restore();
                this.restart();
                this.theme.pause();
            }, 1500)
        }
    }

    restart () {
        this.restartTimeout = setTimeout (() => {
            this.clear();
            clearInterval(this.drawInterval);
            this.drawInterval = undefined;
            this.jediOne.dead = false;
            this.jediTwo.dead = false;
            document.getElementById("canvas").style.display = "none";
            document.getElementById("info").style.display = "block";
        }, 2000)
    }
}