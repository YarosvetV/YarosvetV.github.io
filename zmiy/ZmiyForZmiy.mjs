
import {
    rect
} from "./RectForZmiy.mjs"
import {
    globalVariable
} from "./globalZmiy.mjs"



//let direction = globalVariable.direction




class Zmiy {
    
    go() {
        let zmiyWidth = globalVariable.zmiyWidth
        let x = globalVariable.x
        let y = globalVariable.y
        if (globalVariable.direction == 4)  {
            rect.create(x-1,y,1,zmiyWidth)
            globalVariable.lineArray.unshift({
                lineX: x-1,
                lineY: y, 
                lineWidth: 1,
                lineHeight: zmiyWidth,
            })              
            globalVariable.x = x-1
        } else if (globalVariable.direction == 1) {
            rect.create(x,y-1,zmiyWidth,1)
            globalVariable.lineArray.unshift({
                lineX: x,
                lineY: y-1,
                lineWidth: zmiyWidth,
                lineHeight: 1,
            })   
            globalVariable.y = y-1
        } else if (globalVariable.direction == 2) { 
            rect.create(x+zmiyWidth,y,1,zmiyWidth)
            globalVariable.lineArray.unshift({
                lineX: x+zmiyWidth,
                lineY: y,
                lineWidth: 1,
                lineHeight: zmiyWidth,
            })  
            globalVariable.x = x+1
        } else if (globalVariable.direction == 3) {   
            rect.create(x,y+zmiyWidth,zmiyWidth,1)
            globalVariable.lineArray.unshift({
                lineX: x,
                lineY: y+zmiyWidth,
                lineWidth: zmiyWidth,
                lineHeight: 1,
            })  
            globalVariable.y = y+1
        }
    }
    
    removeLine() {
        
        if (globalVariable.lineArray.length != 0 && globalVariable.lineArray.length > globalVariable.zmiyLength) {
            let thisLine = globalVariable.lineArray[globalVariable.lineArray.length-1]
            rect.remove(thisLine.lineX, thisLine.lineY, thisLine.lineWidth, thisLine.lineHeight)
            globalVariable.lineArray.pop()
        }
    }
}
let zmiy = new Zmiy
export {
    zmiy
}