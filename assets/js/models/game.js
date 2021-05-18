class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.ctx = this.canvas.getContext('2d');

        this.fps = 1000 / 60;
        this.drawInterval = undefined;

        this.background = new Background(this.ctx);
    }

    start () {
        this.draw();
    }

    draw () {
    //    if (!this.drawInterval) {
    //        this.drawInterval = setInterval (() => {
                this.background.draw();
    //        }, this.fps)
    //    }
    }
}