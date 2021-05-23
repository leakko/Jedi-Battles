class Sun {
    constructor (ctx) {
        this.ctx = ctx;
        this.x = -10;
        this.y = this.ctx.canvas.height - 400;
    }

    draw () {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 100, 0, 2 * Math.PI, true);
        this.ctx.fillStyle = 'white';
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.restore();
    }

    move () {
        this.x += 0.2
        this.y -= 0.1
    }

}