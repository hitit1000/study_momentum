const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg"]

const choseImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.className = "bgImage";
bgImage.src = `img/${choseImage}`;
document.body.appendChild(bgImage);
 