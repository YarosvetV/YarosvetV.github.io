let canvas = document.getElementById("myCanvas");
let globalVariable = {
    time: "",
    score: 0,
    foodArray: new Array,
    x: 900,
    y: 400,
    zmiyWidth: 4,
    direction: 0,
    ctx: canvas.getContext("2d"),
    lineArray: new Array,
    zmiyLength: 250,
    spawn: true,
}

export {
    globalVariable
}