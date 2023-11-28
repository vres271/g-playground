export class Turtle {
    ctx = null;
    constructor(ctx) {
        this.ctx = ctx;
    }
    up() {
    };
    down() {
    };
    goto(x, y) {
        this.ctx.moveTo(x+500,500-y);
    };
    forward(x, y) {
        this.ctx.lineTo(+x+500,500-y);
        this.ctx.stroke();
    };
    circle(x, y, r) {
        this.ctx.beginPath();
        this.ctx.arc(+x+500,500-y, r, 0, 2 * Math.PI, false);
        this.ctx.strokeStyle = 'orange';        
        this.ctx.stroke();
    };
    clear() {
        this.ctx.clearRect(0,0,1000,1000);
    }
}