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



// Test functions
const textElem = createNode("list", "healthy", "Pears");
//console.log(textElem);

const addToList = appendToList("list", textElem);
//console.log(addToList);

