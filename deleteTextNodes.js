// deleteTextNodes(element[, deepCleaning]). Deleting all text nodes into 'element'.
// 'deepCleaning' is boolean argument. If it's 'true' text nodes will be deleted into all 'element's' children.
// If it's 'false' text nodes will be deleted into 'element' only. Default value is false.

let deleteTextNodes = function(element, deepCleaning) {
	let buffer, currentElement = element.firstChild;
	while(currentElement) {
		if(currentElement.nodeType === 1 && deepCleaning) {
			deleteTextNodes(currentElement, true);
		}
		buffer = currentElement.nextSibling;
		if(currentElement.nodeType === 3) element.removeChild(currentElement);
		currentElement = buffer;
	}
};

module.exports = deleteTextNodes;
