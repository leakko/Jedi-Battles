class Tile {
    constructor(ctx, x, y) {
        
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 100;

        
        this.img = new Image();
        this.img.src = "./assets/img/FreeSciFiPlatform/png/Tiles/tile-15.png";
        this.img.isReady = false;
        this.img.onload = () => {
            this.img.isReady = true;
        }
    }

    isReady() {
        return this.img.isReady;
    }

    draw() {
        if (this.isReady()) {
            this.ctx.drawImage (
                this.img,
                this.x,
                this.y,
                this.width,
                this.height
            )
        }
    }
}