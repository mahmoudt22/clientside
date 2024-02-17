const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const rating = document.getElementById("rating");
const brand = document.getElementById("brand");
const thumbnail = document.getElementById("thumbnail");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
////////////////////////////////////////////////////////////////
const remainginImages = document.querySelectorAll(".remaingin-images img");
const mainImage = document.getElementById("thumbnail");
remainginImages.forEach((image) => {
  image.parentElement.addEventListener("click", function () {
    mainImage.src = image.src;
  });
});
////////////////////////////////////////////////////////////////

// let productID = window.localStorage.id;
let productID = JSON.parse( localStorage.getItem("id"));
fetch(`https://dummyjson.com/products/${productID}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    title.innerText = data.title;
    description.innerText = data.description;
    price.innerText += data.price;
    rating.innerText = data.rating;
    brand.innerText = data.brand;
    thumbnail.src = data.thumbnail;
    image1.src = data.images[0];
    image2.src = data.images[1];
    image3.src = data.images[2];
    image4.src = data.images[3];
  });
