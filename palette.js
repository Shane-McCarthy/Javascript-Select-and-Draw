/**
 * Created by can you dig it on 11/15/13.
 */


/*
 * @classDescription ColorPicker A simple "class" encapsulating a color picker toolbar
 * @param {HTMLElement} element, acts as a container for the the ColorPicker
 * @return {ColorPicker}
 * @constructor
 */


function ColorPicker(element) {

    //"Private" Members
    this._container = element;
    this._activeColor;
}

ColorPicker.prototype = {};
ColorPicker.prototype.constructor = ColorPicker;

/**
 * Draw the tool bar by creating a Table HTML Element and appending it as a child
 * to the parentElement.  Also associates an event handler with each color td
 * @method
 */
ColorPicker.prototype.draw = function() {
    var colorBar = document.createElement("table");
    var colors = ["blank","red","blue","green","black","yellow"];

    //set the id of table element
    colorBar.id = "palette";

    //Create tr element for row
    var row = document.createElement("tr");

    //set the tr id
    row.id = "colorRow";

    //create columns
    for( var i = 0; i < colors.length; i++) {
        //create td element
        var tdElement = document.createElement("td");

        //set td id
        tdElement.id = colors[i];

        //set the td class to the color
        tdElement.className = colors[i];



        //Append td to the row
        row.appendChild(tdElement);
        tdElement.addEventListener("click",this.storeColor.bind(this),false);
        //append the row to the table
        colorBar.appendChild(row);
    }

    //append the table to the document - it is only at this point that any of this becomes visible
    this._container.appendChild(colorBar);


}

/**
 * Handles the click event by saving the color class of the clicked element
 * and setting the color block to active
 * @param {Event} eventObj
 * @method
 */
ColorPicker.prototype.storeColor = function (){
    this._activeColor = arguments[0].target.className;
};

/**
 * Returns the current color of the color bar as a string
 * @method
 * @return {string} current active color of colorPicker
 */
ColorPicker.prototype.getColor = function(eventObj) {
    return this._activeColor;
};
