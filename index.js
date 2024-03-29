"use strict";

const container = document.querySelector("#container");

const content = document.createElement("div");

content.classList.add("content");
content.textContent = "This is the glorious text-content!";
var pElement = document.createElement("p");
pElement.textContent = "Hey I'm red!";

var h3Element = document.createElement("h3");
h3Element.textContent = "I'm a blue h3!";

var divElement = document.createElement("div");
divElement.className = "b_border"; 

var h1Element = document.createElement("h1");
h1Element.textContent = "I'm in a div";

var pElementInsideDiv = document.createElement("p");
pElementInsideDiv.textContent = "ME TOO!";

divElement.appendChild(h1Element);
divElement.appendChild(pElementInsideDiv);
container.appendChild(pElement);
container.appendChild(h3Element);
container.appendChild(divElement);
container.appendChild(content);




