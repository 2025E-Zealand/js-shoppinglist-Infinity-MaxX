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

// Test functions
const newNode = createNode("list", "healthy", "Pears");
//console.log(newNode);

const addToList = appendToList("list", newNode);
//console.log(addToList);

//const newClass = changeClass(newNode, "unhealthy");
//console.log(newClass);

