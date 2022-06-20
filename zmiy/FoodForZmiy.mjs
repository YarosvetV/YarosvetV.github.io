import {
    rect
} from "./RectForZmiy.mjs"
import {
    globalVariable
} from "./globalZmiy.mjs"

class Food {
    create() {
        let ctx = globalVariable.ctx
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; 
        }
        let xFood = getRandomIntInclusive(164/4, 1776/4)
        let yFood = getRandomIntInclusive(20/4, 776/4)
        yFood = yFood*4
        xFood = xFood*4

        globalVariable.foodArray.push({
            xCoord: xFood,
            yCoord: yFood,
        })
        ctx.beginPath()
        ctx.rect(xFood, yFood, globalVariable.zmiyWidth, globalVariable.zmiyWidth);
        ctx.fillStyle = "#FF0000"
        ctx.fill();
        ctx.closePath();        

    }
    delete() {
        let upBorder = globalVariable.y - 4
        let downBorder = globalVariable.y + 4
        let rightBorder = globalVariable.x + 4
        let leftBorder = globalVariable.x - 4
        for (let arrayCounter = 0; arrayCounter < globalVariable.foodArray.length; arrayCounter++) { 
            let thisFood = globalVariable.foodArray[arrayCounter]
            if (thisFood.xCoord < rightBorder && thisFood.xCoord > leftBorder) {
                if (thisFood.yCoord < downBorder && thisFood.yCoord > upBorder) {
                    globalVariable.ctx.clearRect(thisFood.xCoord, thisFood.yCoord, globalVariable.zmiyWidth, globalVariable.zmiyWidth);
                    globalVariable.foodArray.splice(arrayCounter, 1)

                    globalVariable.zmiyLength = globalVariable.zmiyLength + 75
                    globalVariable.score++
                }
            }
        }
    }
}

let food = new Food
export {
    food
}

/*
if 
*/