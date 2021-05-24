class LifeFrame {
    constructor(ctx) {
        
        this.ctx = ctx;
        this.height = 80;
        this.width = 110;

        
        this.img = new Image();
        this.img.src = "./assets/img/lifeFrame/lifeFrame.png";
        this.img.isReady = false;
        this.img.onload = () => {
            this.img.isReady = true;
        }
    }

    isReady() {
        return this.img.isReady;
    }

    draw(x, y) {
        if (this.isReady()) {
            this.ctx.drawImage (
                this.img,
                x + 85,
                y + 60,
                this.width,
                this.height
            )
        }
    }
}