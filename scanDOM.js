// function scanDOM(); Return to console DOM statistic

let scanDOM = function(node) {
  let DOMNodes = {};
  let DOMClasses = {};
  let textElementCount = 0;

  scanElement(document);
  printStat();

//support functions implementation:

function scanElement(element) {
    let nodesList = element.childNodes;

    for (node in nodesList) {
      if(nodesList[node].nodeType === 1) {
        addToStatList(DOMNodes, nodesList[node].tagName);
        addToDOMClasses(nodesList[node]);
        scanElement(nodesList[node]);
      }
      nodesList[node].nodeType === 3 && textElementCount++;
    }
  };

  function addToStatList(statList, property) {
    statList[property] ? statList[property]++ : statList[property] = 1;
  };

  function addToDOMClasses(element) {
    if(element.hasAttribute('class')) {
      for(let i = 0; i < element.classList.length; i++) {
        addToStatList(DOMClasses, element.classList[i]);
      }
    }
  };

  function printStat() {
    for( let tag in DOMNodes) {
      console.log(`Тегов ${tag}: ${DOMNodes[tag]}`);
    }
    console.log(`Текстовых узлов: ${textElementCount}`);
    for( let classAttr in DOMClasses) {
      console.log(`Элементов с классом ${classAttr}: ${DOMClasses[classAttr]}`);
    }
  };
};

module.exports = scanDOM;
