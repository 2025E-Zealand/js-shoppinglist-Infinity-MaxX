//Write your Javascript code here
console.log("Shoppinglist")

// Functions
function createNode(idAtt, classAtt, textAtt) {
    const newNode = document.createElement("li");
    newNode.setAttribute("id", idAtt);
    newNode.setAttribute("class", classAtt);
    const textNode = document.createTextNode(textAtt);
    newNode.appendChild(textNode);

    return newNode;
}

function appendToList(id, node) {
    return document.getElementById(id).appendChild(node);
}

function changeClass(element, value) {
    element.setAttribute("class", value);
    return element;
}

function deleteListElement(nodeId, tagName, elementId) {
    // get the parent node from which the element belongs to
    const node = document.getElementById(nodeId);
    // get a list of all children within the parent with a specific tag name
    const liElement = node.getElementsByTagName(tagName);
    // select the child at the specific position
    const element = liElement[elementId];
    // remove the child
    node.removeChild(element);

    return node;
}

// Test functions
const newNode = createNode("list", "healthy", "Pears");
//console.log(newNode);

const addToList = appendToList("list", newNode);
//console.log(addToList);

//const newClass = changeClass(newNode, "unhealthy");
//console.log(newClass);

//const removeMarshmallows = deleteListElement("list", "li", "0");
//console.log(removeMarshmallows);
