import {
    globalVariable
} from "./globalZmiy.mjs"

class Score { 
    renovation() {
        globalVariable.ctx.beginPath()
        globalVariable.ctx.rect(3, 55, 145, 50);
        globalVariable.ctx.fillStyle = "#b8fffa"
        globalVariable.ctx.fill();
        globalVariable.ctx.closePath();

        globalVariable.ctx.fillStyle = "#000000"
        globalVariable.ctx.font = "48px Arial";
        globalVariable.ctx.fillText(globalVariable.score, 25, 100);
    }
    
    death() {
        globalVariable.direction = 0
        //globalVariable.zmiyWidth = 0
        globalVariable.spawn = false

        globalVariable.ctx.beginPath()
        globalVariable.ctx.rect(625, 100, 600, 600);
        globalVariable.ctx.fillStyle = "#b8fffa"
        globalVariable.ctx.fill();
        globalVariable.ctx.closePath();

        globalVariable.ctx.beginPath()
        globalVariable.ctx.rect(640, 115, 570, 570);
        globalVariable.ctx.fillStyle = "#000000"
        globalVariable.ctx.fill();
        globalVariable.ctx.closePath();

        globalVariable.ctx.fillStyle = "#b8fffa"
        globalVariable.ctx.font = "70px Arial";
        globalVariable.ctx.fillText("Вы проиграли!", 690, 200);

        globalVariable.ctx.font = "20px Arial";
        globalVariable.ctx.fillText("Чтобы продолжить играть заплатите 1000000 рублей", 675, 300);

        globalVariable.ctx.font = "50px Arial";
        globalVariable.ctx.fillText("ИЛИ", 865, 360);

        globalVariable.ctx.font = "35px Arial";
        globalVariable.ctx.fillText("Нажмите пробел", 790, 400);

        globalVariable.ctx.font = "70px Arial";
        globalVariable.ctx.fillText("Время: "+ globalVariable.time, 725, 535);
        globalVariable.ctx.fillText("Счёт: " + globalVariable.score, 790, 635);
    }
}

let score = new Score
export {
    score
}