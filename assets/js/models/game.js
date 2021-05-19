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
            new Tile(this.ctx, 1000, 500),
            new Tile(this.ctx, 400, 300),
            new Tile(this.ctx, 500, 300),
            new Tile(this.ctx, 600, 300),
            new Tile(this.ctx, 700, 300),
        ]
        this.jedis = [
            new Jedi(this.ctx, 200, 500);
            new Jedi(this.ctx, 1000, 500);
        ]
    } 

    start () {
        this.draw();

    }

    draw () {
        if (!this.drawInterval) {
            this.drawInterval = setInterval (() => {
                this.background.draw();
                this.tiles.forEach (tile => tile.draw());
                this.jedis.forEach (jedi => jedi.draw());
            }, this.fps)
        }
    }
}