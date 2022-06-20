import {
    globalVariable
} from "./globalZmiy.mjs" 
let ctx = globalVariable.ctx 
class Rect {
    create(x, y, widthX, heightY) {
        ctx.beginPath()
        ctx.rect(x, y, widthX, heightY);
        ctx.fillStyle = "#b8fffa"
        ctx.fill();
        ctx.closePath(); 
    }
    remove(x, y, lineWidth, lineHeight) {
        ctx.clearRect(x, y, lineWidth, lineHeight)
    }
}
let rect = new Rect
export {
    rect
}