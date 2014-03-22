/**
 * Created by can you dig it on 11/15/13.
 */

/**
 * @projectDescription Simple block drawing web application created using
 * colorPicker and blockCanvas
 */
function main(){

var firstDiv = document.createElement("div");
    firstDiv.setAttribute("id","colorDiv");
    var secondDiv = document.createElement("div");
    secondDiv.setAttribute("id","canvasDiv");


   var colorBar = new ColorPicker(document.getElementById("colorDiv"));
    var blockCanvas = new BlockCanvas(colorBar,colorBar.getColor,document.getElementById("canvasDiv"));

    colorBar.draw();
    blockCanvas.draw();

}


//Register the main function to run on window loading
window.addEventListener("load",main,false);