// prepend(container, insertingElement). return inserted element.

let prepend = function(container, insertingElement) {
	return container.insertBefore(insertingElement, container.firstChild);
};

export default {prepend};
