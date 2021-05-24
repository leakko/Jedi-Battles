class LifeBar {
    constructor (ctx) {
        this.ctx = ctx;
    }

    draw (x, y, health) {
        this.ctx.save();
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(x + 90, y + 90, health, 10);
        this.ctx.restore();
    }
}