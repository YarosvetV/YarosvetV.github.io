import {
    zmiy
} from "./ZmiyForZmiy.mjs"
import {
    checker
} from "./checkerForZmiy.mjs"
import {
    food
} from "./FoodForZmiy.mjs"
import {
    globalVariable
} from "./globalZmiy.mjs"


let canvas = document.getElementById("myCanvas");
//let ctx = canvas.getContext("2d");
let ctx = globalVariable.ctx
globalVariable.ctx = ctx
document.addEventListener("keydown", keyDownHandler, false);
let direction = 0

ctx.beginPath()
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#b8fffa"
ctx.fill();
ctx.closePath();
ctx.clearRect(160, 16, 1624, 768)

let layoutArrayX = new Array
let layoutArrayY = new Array
//width="1800" height="800"
let suX = Math.floor(1800 / globalVariable.zmiyWidth)
let suY = Math.floor(800 / globalVariable.zmiyWidth)
let layoutX = 0
let layoutY = 0

for (let i = 0; i <= suX; i++) {
    layoutArrayX.push(layoutX)
    layoutX += globalVariable.zmiyWidth
}
for (let w = 0; w <= suY; w++) {
    layoutArrayY.push(layoutX)
    layoutY += globalVariable.zmiyWidth
}


function isInteger(num) {
    return (num ^ 0) === num;
}
////////////////////// TIMER //////////////////////
let sec = 0, min = 0, hrs = 0

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}

function timer() {
    if (globalVariable.spawn) {
        tick()
        globalVariable.time = hrs+":"+min+":"+sec

        globalVariable.ctx.beginPath()
        globalVariable.ctx.rect(0, 125, 100, 25);
        globalVariable.ctx.fillStyle = "#b8fffa"
        globalVariable.ctx.fill();
        globalVariable.ctx.closePath();

        globalVariable.ctx.fillStyle = "#000000"
        globalVariable.ctx.font = "25px Arial";
        globalVariable.ctx.fillText(hrs+":"+min+":"+sec, 25, 150);    
    }
}



////////////////////// TIMER //////////////////////

/*
Если х или y не делится на глобалвайз, то мы создаём идём ДО ТОГО МОМЕНТА, пока не достигнем числа делящегося на глобалвайз 

*/
/* chek sussy baka
globalVariable.direction = 1
zmiy.go()
*/
let count = 1
function zmiyWalk() {
    if (globalVariable.spawn) {
        zmiy.go()
        checker.colorChecker()
        zmiy.removeLine()
    
        if (isInteger(count/25)) {
            food.create()

            
        }
    
        count = count + 1
    }
}
/*
let oo = 1
ctx.fillStyle = "#000000"  
globalVariable.ctx.font = "80px serif";
globalVariable.ctx.fillText(oo, 200, 95);
*/


function positionCheck(position) { //1 = Вертикальное положение; 2 = горизонтальное
    if (position === 2) {
        if (isInteger(globalVariable.x/globalVariable.zmiyWidth) === true) {
            return true
        } else {
            while (isInteger(globalVariable.x/globalVariable.zmiyWidth) === false) {
                zmiyWalk()
                if (isInteger(globalVariable.x/globalVariable.zmiyWidth) === true) {
                    return true
                }
            }
        }
    } 
    if (position === 1) {
        if (isInteger(globalVariable.y/globalVariable.zmiyWidth) === true) {
            return true
        } else {
            while (isInteger(globalVariable.y/globalVariable.zmiyWidth) === false) {
                zmiyWalk()
                if (isInteger(globalVariable.y/globalVariable.zmiyWidth) === true) {
                    return true
                }
            }
        }
    }

}
//globalVariable.direction = 1
//zmiy.go()
function keyDownHandler(e) {
    
    switch (e.keyCode) {
        case 38:
            if (positionCheck(2)) {
                direction = 1
                globalVariable.direction = direction
            }
            break
        case 39:
            if (positionCheck(1))  {
                direction = 2
                globalVariable.direction = direction
            }
            break
        case 40:
            if (positionCheck(2)) {
                direction = 3
                globalVariable.direction = direction
            }
            break
        case 37:
            if (positionCheck(1)) {
                direction = 4
                globalVariable.direction = direction 
            }
            break
        case 32:
            window.location.reload()
    }
}






setInterval(zmiyWalk, 15)
setInterval(timer, 1000)