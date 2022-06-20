
import {
    rect
} from "./RectForZmiy.mjs"
import {
    globalVariable
} from "./globalZmiy.mjs"
import {
    food
} from "./FoodForZmiy.mjs"
import {
    score
} from "./scoreForZmiy.mjs"






class Checker {
    
    colorChecker() {
        if (globalVariable.direction == 1) {
            if (globalVariable.ctx.getImageData(globalVariable.x, globalVariable.y-1, 1, 1).data[0] == 255 || globalVariable.ctx.getImageData(globalVariable.x+globalVariable.zmiyWidth-1, globalVariable.y-1, 1, 1).data[0] == 255) {
                //deleteFood()
                //alert("sdf")
                food.delete()
                
                score.renovation()
            }
            if (globalVariable.ctx.getImageData(globalVariable.x, globalVariable.y-1, 1, 1).data[0] == 184 || globalVariable.ctx.getImageData(globalVariable.x+globalVariable.zmiyWidth-1, globalVariable.y-1, 1, 1).data[0] == 184) {
                
                score.death()

                
            }

        }
        if (globalVariable.direction == 2) { // x+6,y,1,6
            if (globalVariable.ctx.getImageData(globalVariable.x+globalVariable.zmiyWidth, globalVariable.y, 1, 1).data[0] == 255 || globalVariable.ctx.getImageData(globalVariable.x+globalVariable.zmiyWidth, globalVariable.y+globalVariable.zmiyWidth-1, 1, 1).data[0] == 255) {
                //deleteFood()
                //alert("sdf")
                food.delete()
                
                score.renovation()
            }    
            if (globalVariable.ctx.getImageData(globalVariable.x+globalVariable.zmiyWidth, globalVariable.y, 1, 1).data[0] == 184 || globalVariable.ctx.getImageData(globalVariable.x+globalVariable.zmiyWidth, globalVariable.y+globalVariable.zmiyWidth-1, 1, 1).data[0] == 184) {
                
                score.death()
            }
        
        }
        if (globalVariable.direction == 3) { // x+6,y,1,6
            if (globalVariable.ctx.getImageData(globalVariable.x, globalVariable.y+globalVariable.zmiyWidth, 1, 1).data[0] == 255 || globalVariable.ctx.getImageData(globalVariable.x+globalVariable.zmiyWidth-1, globalVariable.y+globalVariable.zmiyWidth, 1, 1).data[0] == 255) {
                //deleteFood()
                //alert("sdf")
                food.delete()
                
                score.renovation()
            }    
            if (globalVariable.ctx.getImageData(globalVariable.x, globalVariable.y+globalVariable.zmiyWidth, 1, 1).data[0] == 184 || globalVariable.ctx.getImageData(globalVariable.x+globalVariable.zmiyWidth-1, globalVariable.y+globalVariable.zmiyWidth, 1, 1).data[0] == 184) {
                
                score.death()
            }
        
        }
        if (globalVariable.direction == 4) { // x+6,y,1,6
            if (globalVariable.ctx.getImageData(globalVariable.x-1, globalVariable.y, 1, 1).data[0] == 255 || globalVariable.ctx.getImageData(globalVariable.x-1, globalVariable.y+globalVariable.zmiyWidth-1, 1, 1).data[0] == 255) {
                //deleteFood()
                //("sdf")
                food.delete()
                
                score.renovation()
            }    
            if (globalVariable.ctx.getImageData(globalVariable.x-1, globalVariable.y, 1, 1).data[0] == 184 || globalVariable.ctx.getImageData(globalVariable.x-1, globalVariable.y+globalVariable.zmiyWidth-1, 1, 1).data[0] == 184){
                
                score.death()
            }
        
        }
    }
}
let checker = new Checker
export {
    checker
}