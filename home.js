// ? import functions from module file 
import * as all from "./module.js"

let searchI = document.getElementById("search")
searchI.addEventListener("input", e => {
    let value = e.target.value
    let products = document.querySelectorAll(".products")
    products.forEach(prod => {
        const isvisible = prod.id.toLowerCase().includes(value)
        prod.classList.toggle("hide", !isvisible)
    })
})


document.addEventListener("click",function(e){
    if(e.target.className=="prods"){
        e.preventDefault();
    localStorage.setItem("id",JSON.stringify(e.target.id))
    location.assign("signleProduct.html")
    
    }
    })

//? initialize cart and counter from local storage 
let cart = []
let counter = new Array(30)
counter.fill(0)
all.initialize(cart, counter)

// =================  display all product =======================//
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        console.log(data)

        if (!Array.isArray(data)) {
            if (data && Array.isArray(data.products)) {
                data = data.products;
            }
            else {
                console.log(data)
            }
        }

        const productcontainer = document.getElementById('product-container');

        const detailcontainer = document.getElementById('moredetails');
        data.forEach((product, id) => {
            const cardDiv = document.createElement('div');
            // ? check if product in local storage or not 
            // ? if exists change the inner text to remove 
            let addOrRemove
            if (cart.indexOf(`add${id}`) != -1) {
                addOrRemove = "Remove From Cart"
            } else {
                addOrRemove = "Add to Cart"
            }

            // console.log(product);

            cardDiv.id = `${product.title}`
            cardDiv.className = "products"
            cardDiv.innerHTML = `
        <div class="box">
        <img src="${product.images[0]}" alt="${product.title}" />
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <span id="price">Price:  $${product.price}</span>
        <div class="rate">
            <i class="filled fas fa-star">${product.rating}</i>
        </div>
        <div class="options">
        <a href="" class="prods"  id=${product.id} >More Details</a>
            <a href="" id="add${id}">${addOrRemove}</a>
        </div>
         </div>
        `;

            productcontainer.appendChild(cardDiv);
            let addToCart = document.getElementById(`add${id}`)
            addToCart.addEventListener("click", function () {
                if (this.innerText == "Add to Cart") {
                    cart.push(this.id)
                    
                    localStorage.setItem('itemsId', JSON.stringify(cart))
                    this.innerText = "Remove From Cart"
                }
                else if (this.innerText == "Remove From Cart") {
                    let thisId = this.id
                    let afterDel = cart.filter(function (product) {
                        return product != thisId
                    })
                    cart = [...afterDel]
                    localStorage.setItem('itemsId', JSON.stringify(cart))
                    this.innerText = "Add to Cart"

                }
            }
            )
        })

    });


 //========================= category logic ========================= //
const productcontainer = document.getElementById('product-container');
document.addEventListener("click", catagory)

function catagory(e) {



    if (e.target.className == "category") {

        productcontainer.innerHTML = " ";

        fetch(`https://dummyjson.com/products/category/${e.target.id}`)
            .then(res => res.json())
            .then(res => {
                let prod = res.products
                // console.log(prod);

                prod.forEach((product, id) => {
                    let addOrRemove
                    if (cart.indexOf(`add${+product.id - 1}`) != -1) {
                        addOrRemove = "Remove From Cart"
                    } else {
                        addOrRemove = "Add to Cart"
                    }
                    const cardDiv = document.createElement('div');
                    console.log(product);
                    cardDiv.id = `${product.title}`
                    cardDiv.className = "products"
                    cardDiv.innerHTML = `
        <div class="box">
        <img src="${product.images[0]}" alt="${product.title}" />
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <span id="price">Price:  $${product.price}$</span>
        <div class="rate">
            <i class="filled fas fa-star">${product.rating}</i>
        </div>
        <div class="options">
            <a href="" class="prods"  id=${product.id} >More Details</a>
            <a href="" id="add${+product.id - 1}">${addOrRemove}</a>
        </div>
         </div>
        `;
                    // ==================== cart logic =========================//
                     productcontainer.appendChild(cardDiv);
                    let addToCart = document.getElementById(`add${+product.id - 1}`)
                    addToCart.addEventListener("click", function () {
                        if (this.innerText == "Add to Cart") {
                            cart.push(this.id)
                            
                            localStorage.setItem('itemsId', JSON.stringify(cart))
                            this.innerText = "Remove From Cart"
                        }
                        else if (this.innerText == "Remove From Cart") {
                            let thisId = this.id
                            let afterDel = cart.filter(function (product) {
                                return product != thisId
                            })
                            cart = [...afterDel]
                            localStorage.setItem('itemsId', JSON.stringify(cart))
                            this.innerText = "Add to Cart"
                           

                        }
                    }
                    )
                });


            });
    }

}

/*============== log out buttom =============*/

let logout = document.getElementById("logout");
logout.addEventListener("click", function () {
    localStorage.clear();
    location.replace("login.html")
})