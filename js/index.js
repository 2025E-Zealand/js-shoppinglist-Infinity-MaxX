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
    const list = node.getElementsByTagName(tagName);
    // select the child at the specific position
    const element = list[elementId];
    // remove the child
    node.removeChild(element);

    return node;
}

// extra exercises
function changeElementTextSimple(tagName, elementId, newText) {
    const list = document.getElementsByTagName(tagName);
    const element = list[elementId];
    element.innerText = newText;
}

function changeElementTextPosterity(nodeId, tagName, elementId, newText) {
    const node = document.getElementById(nodeId);
    const list = document.getElementsByTagName(tagName);
    const element = list[elementId];
    element.innerText = newText;
    return node;
}

function countListElementsSimple(tagName) {
    const list = document.getElementsByTagName(tagName);
    return list.length;
}

function countListElementsPosterity(nodeId, tagName) {
    const node = document.getElementById(nodeId);
    const list = node.getElementsByTagName(tagName);
    return list.length;
}

function moveNodesIntoNewList(className, moveTo) {
    const newParent = document.getElementById(moveTo);
    let classes = document.getElementsByClassName(className);
    
    // backward iteration; does not cause slowdown or timeout
    for (let i = classes.length - 1; i >= 0; i--) { 
        newParent.appendChild(classes[i]); 
    }
    // incredibly slow, causes a timeout. correct result after resetting itself
    // most intutive countersolution to the initial attempt below
    //while (classes.length > 0) {
    //    newParent.appendChild(classes[0])
    //}

    // can move one element. throws an error at the second
    //for (let i = 0; i < classes.length; i++) {
    //    newParent.appendChild(classes[i]);
    //}
    return newParent;
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

const newText = changeElementTextSimple("li", "0", "Sour candy")
console.log(newText);

const count = countListElementsSimple("li");
console.log(count);

const moveUnhealthyItems = moveNodesIntoNewList("unhealthy", "listUnhealthy");
console.log(moveUnhealthyItems);