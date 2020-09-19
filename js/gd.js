let outputElement = document.getElementById("outputElement");
let outputParagraph = document.getElementById("outputParagraph");
let contentGridElement = document.getElementById("contentGrid");

let jsonDatabase = [
  {
    img: "img/gd/z.jpg",
    title: "NYU Tandon Career Services",
    desc: "<br>",
  },
  {
    img: "img/gd/l.jpg",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/m.jpg",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/n.jpg",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/o.jpg",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/p.png",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/q.png",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/r.png",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/s.png",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/t.png",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/u.png",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/v.png",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/w.png",
    title: "<br> Junior's Restaurant",
    desc: "<br>",
  },
  {
    img: "img/gd/i.png",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/j.png",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/k.png",
    title: "<br>Miscellaneous",
    desc: "<br>",
  },
  {
    img: "img/gd/a.jpg",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/b.jpg",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/c.jpg",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/d.png",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/e.png",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/f.gif",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/g.png",
    title: " ",
    desc: "<br>",
  },
  {
    img: "img/gd/h.png",
    title: " ",
    desc: "<br>",
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

  let newContentHeading = document.createElement("H2");
  newContentHeading.innerHTML = incomingJSON["title"];
  newContentElement.appendChild(newContentHeading);

  let newContentSubheading2 = document.createElement("H6");
  newContentSubheading2.innerHTML = incomingJSON["desc"];
  newContentElement.appendChild(newContentSubheading2);
}
