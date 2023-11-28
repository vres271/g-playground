import { createCanvas } from "../core/canvas";
import { Turtle } from "../core/turtle";

export function example1(parentElem) {
    const [canvas, ctx] = createCanvas(parentElem);
    const turtle = new Turtle(ctx);


    // --------------------------------------------------
    
    ctx.strokeStyle = 'silver';
    ctx.moveTo(500,0);
    ctx.lineTo(500,1000);
    ctx.stroke();
    
    
    ctx.moveTo(0,500);
    ctx.lineTo(1000,500);
    ctx.stroke();
    ctx.closePath();
    
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    
    // ------------------------------------------------------
    
       
    let x = 0;
    let y = 0;
    
    
    
    setInterval(() => {
        if (x < 300) {
            turtle.clear()
            y = y + 1;
            x = x + 1;
            turtle.circle(x, y, 10);    
            }
       
    },10);

}