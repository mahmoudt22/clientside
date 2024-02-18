const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const rating = document.getElementById("rating");
const brand = document.getElementById("brand");
const thumbnail = document.getElementById("thumbnail");

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// let productID = window.localStorage.id;
let productID = JSON.parse(localStorage.getItem("id"));
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
    let bigDiv = document.getElementsByClassName("remaingin-images")[0]
    for (let i = 0; i < data.images.length; i++) {
      console.log("here")
      let newDiv = document.createElement('div')
      let newImg = document.createElement('img')
      newImg.src = data.images[i]
      newDiv.appendChild(newImg)
      // newDiv.children[0].src
      newDiv.addEventListener("click", function () {
        thumbnail.src = this.children[0].src
      })
      bigDiv.appendChild(newDiv)
    }
  });

let cart = [];
let counter = new Array(30);
counter.fill(0);
function initialize(cart, counter) {
  if (localStorage.length) {
    window.addEventListener("load", function () {
      let fetchedItem = JSON.parse(localStorage.getItem("itemsId"));
      let fetchedcounter = JSON.parse(localStorage.getItem("itemsCounter"));
      for (let i = 0; i < fetchedItem.length; i++) {
        cart.push(fetchedItem[i]);
      }
      for (let i = 0; i < fetchedcounter.length; i++) {
        counter[i] = fetchedcounter[i];
      }
    });
  }
}
initialize(cart, counter);

// document.getElementById("addToCart").addEventListener("click", function () {
//   cart.push(add${productID - 1});
//   console.log(cart);
//   console.log(counter);
//   counter[productID - 1] = 1;
//   localStorage.setItem("itemsCounter", JSON.stringify(counter));
//   localStorage.setItem("itemsId", JSON.stringify(cart));
// });
let mmm = document.getElementById("addToCart");

mmm.addEventListener("click", function () {
  if (mmm.innerText === "ADD TO CART") {
    cart.push(`add${productID - 1}`)
    counter[productID - 1] = 1
    localStorage.setItem('itemsCounter', JSON.stringify(counter))
    localStorage.setItem('itemsId', JSON.stringify(cart))
    mmm.innerText = "REMOVE FROM CART"

  }
  else if (mmm.innerText == "REMOVE FROM CART") {
    let thisId = (`add${productID - 1}`)
    console.log(thisId)
    let afterDel = cart.filter(function (product) {
      return product != thisId
    })
    cart = [...afterDel]
    localStorage.setItem('itemsId', JSON.stringify(cart))
    this.innerText = "ADD TO CART"

  }
})

////////////////////////////////////////////////////////////////////

let logout = document.getElementById("logout");
logout.addEventListener("click", function () {
  localStorage.clear();
  location.replace("login.html");
});
