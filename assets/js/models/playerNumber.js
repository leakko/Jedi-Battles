class PlayerNumber {
    constructor (ctx, playerNumber, x, y) {
        this.player = playerNumber;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
    }

    draw () {
        this.ctx.save();
        ctx.font = '48px serif';
        ctx.fillText(`Player ${this.playerNumber}`, this.x, this.y);
        this.ctx.restore();
    }
}