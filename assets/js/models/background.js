class Background {
    constructor (ctx) {
        this.ctx = ctx;
        this.height = this.ctx.canvas.height;
        this.width = this.ctx.canvas.width;
        
        this.img = new Image();
        this.img.src = "./assets/img/background.jpg"
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
                0,
                0,
                this.width,
                this.height
            )
        }
    }
}