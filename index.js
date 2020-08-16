const node = document.createElement("H1");
const textnode = document.createTextNode("First task from Teachbase");

node.appendChild(textnode);
document.getElementById("root").appendChild(node);

import Rectangle from "./src/newModule";

const square = new Rectangle(20, 20);

console.log(square.calcArea())
