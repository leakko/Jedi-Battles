class Title {
    constructor (ctx) {
        this.ctx = ctx;
        this.x = 850;
        this.y = 10;
        this.height = 100;
        this.width = 400;
        
        this.img = new Image();
        this.img.src = "./assets/img/title/title.png"
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