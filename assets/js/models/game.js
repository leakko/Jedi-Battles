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

        this.player1 = new PlayerNumber (this.ctx, 1);
        this.player2 = new PlayerNumber (this.ctx, 2);

        this.life1 = new LifeBar (this.ctx);
        this.life2 = new LifeBar (this.ctx);

        this.lifeFrame1 = new LifeFrame (this.ctx);
        this.lifeFrame2 = new LifeFrame (this.ctx);

        this.extraTiles = [
            new Tile(this.ctx, 1000, 500),
            new Tile(this.ctx, 700, 300),
        ]
    } 

    start () {
        if (!this.drawInterval) {
          this.drawInterval = setInterval (() => {
            this.clear();
            this.move();
            this.combat();
            this.draw();
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
            secondJedi.health -= Math.round((firstJedi.spriteAttackRight.drawCount/100) + (firstJedi.spriteAttackLeft.drawCount/100));
        }
        if (!secondJedi.canAttack && secondJedi.hitWith(firstJedi)) {
            firstJedi.health -= Math.round((secondJedi.spriteAttackRight.drawCount/100) + (secondJedi.spriteAttackLeft.drawCount/100));
        }
    }

    clear () {
        this.ctx.clearRect (0, 0, this.canvas.width, this.canvas.height);
    }

    onKeyEvent(event) {
        this.jediOne.onKeyEvent(event);
        this.jediTwo.onKeyEvent(event);
      }
}