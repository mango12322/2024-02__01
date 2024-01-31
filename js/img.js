const image = ["2.jpg"];

const choseimage = image[Math.floor(Math.random() *image.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choseimage}`;

document.body.appendChild(bgImage);
