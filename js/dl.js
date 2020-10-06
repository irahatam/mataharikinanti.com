let outputElement = document.getElementById("outputElement");
let outputParagraph = document.getElementById("outputParagraph");
let contentGridElement = document.getElementById("contentGrid");

let jsonDatabase = [
  {
    img: "img/dl/w1.png",
    title: "<br>Money Spending Tracker App",
  },
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementMessy(incomingJSON) {
  var incompleteHTML =
    '<div class="contentItem"><h3 class="contentTitle">' +
    incomingJSON["title"];
}

function createElementProper(incomingJSON) {
  let newContentElement = document.createElement("DIV");

  let newImage = document.createElement("IMG");
  newImage.classList.add("productPhoto");
  newImage.src = incomingJSON["img"];
  newContentElement.appendChild(newImage);
  contentGridElement.appendChild(newContentElement);

  let newContentHeading = document.createElement("h6");
  newContentHeading.innerHTML = incomingJSON["title"];
  newContentElement.appendChild(newContentHeading);
}
