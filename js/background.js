const images = [
    "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg",
    "15.jpeg","16.jpeg","17.jpeg","18.jpeg","19.jpeg","20.jpeg",
    "21.jpeg","22.jpeg","23.jpeg","24.jpeg","25.jpeg","26.jpeg",
]

const choseImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${choseImage}`;
document.body.appendChild(bgImage);
 