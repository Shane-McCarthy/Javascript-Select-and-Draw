Javascript-Select-and-Draw
==========================
Simple block drawing web application created using
 * colorPicker and blockCanvas
 
 
 * @classDescription: BlockCanvas A simple "class" that acts as a grid of set-able color blocks
 *                    it associates an event listener with each "block" that when clicked uses the
 *                    passed getColor function to retrieve a color and assign it to the clicked block.
 * @param {Object} colorObj: the object that has getColor as a member (necessary for proper invocation of getColor).
 * @param {Function} getColor the function used to get the current color.
 * @param {HTMLElement} element the element in which to draw the block canvas
