/**
 * Created by can you dig it on 11/15/13.
 */

/*
 * @classDescription: BlockCanvas A simple "class" that acts as a grid of set-able color blocks
 *                    it associates an event listener with each "block" that when clicked uses the
 *                    passed getColor function to retrieve a color and assign it to the clicked block.
 * @param {Object} colorObj: the object that has getColor as a member (necessary for proper invocation of getColor).
 * @param {Function} getColor the function used to get the current color.
 * @param {HTMLElement} element the element in which to draw the block canvas
 * @constructor
 */
function BlockCanvas(colorPickerObj,getColor,element) {

    //"Private" Members
    this._colorPickerObj = colorPickerObj;
    this._getColorFunc = getColor;
    this._container = element;




}
BlockCanvas.prototype = {};
BlockCanvas.prototype.constructor = BlockCanvas;

/**
 * Draw the canvas by creating a Table HTML Element and appending it to the _container
 * @method
 */

BlockCanvas.prototype.draw = function(){
    var rows = 60;
    var cols = 60;
    var canvasTable = document.createElement("table");

    //set the id of table element
    canvasTable.id = "blockCanvas";

    for(var r = 0; r < rows; r++) {
        //Create tr element for row
        var row = document.createElement("tr");

        //set the tr id
        row.id = "canvasRow" + r;

        //create columns
        for(var i = 0; i < cols; i++) {
            //create td element
            var tdElement = document.createElement("td");

            //set td id
            tdElement.id = "canvasTD" + r + i;

            //set the td class to the color
            tdElement.className = "canvasBlock";

            tdElement.addEventListener("click", this.blockClick.bind(this), false);

            //Append td to the row
            row.appendChild(tdElement);

            //append the row to the table
            canvasTable.appendChild(row);
        }
    }
    //append the table to the document - it is only at this point that any of this becomes visible
   this._container.appendChild(canvasTable);

}

/**
 * Handles the click event by setting the color of the clicked element to the
 * return value of the passed getColor function
 * @param {Event} eventObj
 * @method
 * @private
 */
BlockCanvas.prototype.blockClick = function (eventObj){
    //here you use the getColor Function by `call`ing it with "this" set to colorPickerObj
    eventObj.target.className = this._getColorFunc.call(this._colorPickerObj);
    this._getColorFunc.call(this._colorPickerObj).toggle(className);
}