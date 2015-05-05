//class Person {
//    constructor() {
//    }
//    //public methods
//    public saysHello() {
//        console.log("Hello World");
//    }
//}

var stage: createjs.Stage;
var canvas = document.getElementById("canvas");
function init() {
//    var myPerson = new Person();
  //  myPerson.saysHello();
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick",gameLoop);

    
} 
function gameLoop() {
    stage.update();
}
function main() {
    console.log("Game is running properly.........");
    var helloText: createjs.Text = new createjs.Text("Hello World", "40 px Consolas", "#000000");
    helloText.x = 30;
    helloText.y = 200;
    stage.addChild(helloText);
}