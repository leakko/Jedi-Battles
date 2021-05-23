class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.ctx = this.canvas.getContext('2d');

        this.fps = 1000 / 60;
        this.drawInterval = undefined;

        this.background = new Background(this.ctx);
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
        this.jediOne = new JediOne(this.ctx, 150, 286);
        this.jediTwo = new JediTWo(this.ctx, 865, 286);

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
            this.draw();
          }, this.fps)
        }
    }

    draw () {
        this.background.draw();
        this.tiles.forEach (tile => tile.draw());
        this.extraTiles.forEach (tile => tile.draw());
        this.jediOne.animateRun()
        this.jediOne.draw();
        this.jediTwo.animateRun();
        this.jediTwo.draw();
    }

    move() {
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

    clear () {
        this.ctx.clearRect (0, 0, this.canvas.width, this.canvas.height);
    }

    onKeyEvent(event) {
        this.jediOne.onKeyEvent(event);
        this.jediTwo.onKeyEvent(event);
      }
}