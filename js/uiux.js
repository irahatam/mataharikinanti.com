let outputElement = document.getElementById("outputElement");
let outputParagraph = document.getElementById("outputParagraph");
let contentGridElement = document.getElementById("contentGrid");

let jsonDatabase = [
  {
    img: "img/ui/a.png",
    title: "<br>Product Page",
  },
  {
    img: "img/ui/b.png",
    title: "<br>App Landing Page",
  },
  {
    img: "img/ui/c.png",
    title: "<br>Onboarding Screens",
  },
  {
    img: "img/ui/d.png",
    title: "<br>Product Page and Shopping Cart",
  },
  {
    img: "img/ui/e.png",
    title: "<br>Product Page",
  },
  {
    img: "img/ui/f.png",
    title: "<br>Product Listing Page",
  },
  {
    img: "img/ui/g.png",
    title: "<br>Travel App",
  },
  {
    img: "img/ui/h.png",
    title: "<br>Travel App",
  },
  {
    img: "img/ui/i.png",
    title: "<br>Website Landing Page",
  },
  {
    img: "img/ui/j.png",
    title: "<br>Under Construction Page",
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
