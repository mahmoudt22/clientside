fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data=>{
    console.log(data)

    if(!Array.isArray(data)){
        if(data && Array.isArray(data.products)){
            data = data.products;
        }
        else{
            console.log(data)
        }
    }

    const productcontainer = document.getElementById('product-container');

 const detailcontainer =document.getElementById('moredetails');
    data.forEach(product => {
        const cardDiv =document.createElement('div');
        console.log(product);

        cardDiv.innerHTML = `
        <div class="box">
        <img src="${product.images[0]}" alt="${product.title}" />
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <span>${product.price}$</span>
        <div class="rate">
            <i class="filled fas fa-star"></i>
            <i class="filled fas fa-star"></i>
            <i class="filled fas fa-star"></i>
            <i class="filled fas fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>
        <div class="options">
            <a href="#">Buy It Now</a>
            <a href="#">Add to Cart</a>
        </div>
         </div>
        `;

        productcontainer.appendChild(cardDiv);  

        // cardDiv.addEventListener('click' , function(){
        //     const carddetail =document.createElement('div');

        //     carddetail.innerHTML=`
        //     <div class="box">
        //     <img src="${e.target.images[0]}" alt="${e.target.title}" />
        //     <h2>${e.target.title}</h2>
        //     <p>${e.target.description}</p>
        //     <span>${e.target.price}$</span>
        //     <div class="rate">
        //         <i class="filled fas fa-star"></i>
        //         <i class="filled fas fa-star"></i>
        //         <i class="filled fas fa-star"></i>
        //         <i class="filled fas fa-star"></i>
        //         <i class="fa-regular fa-star"></i>
        //     </div>
        //     <div class="options">
        //         <a href="#">Buy It Now</a>
        //         <a href="#">Add to Cart</a>
        //     </div>
        //      </div>
        //     `;

        //     detailcontainer.appendChild(carddetail);

        })

});


const productcontainer = document.getElementById('product-container');


document.addEventListener("click",catagory)

function catagory(e){

   

    if(e.target.className=="category"){

        productcontainer.innerHTML=" ";

        fetch(`https://dummyjson.com/products/category/${e.target.id}`)
.then(res => res.json())
.then(res=>{
    let prod= res.products
    console.log(prod);

    prod.forEach(product => {
        const cardDiv =document.createElement('div');
        console.log(product);

        cardDiv.innerHTML = `
        <div class="box">
        <img src="${product.images[0]}" alt="${product.title}" />
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <span>${product.price}$</span>
        <div class="rate">
            <i class="filled fas fa-star"></i>
            <i class="filled fas fa-star"></i>
            <i class="filled fas fa-star"></i>
            <i class="filled fas fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>
        <div class="options">
            <a href="#">Buy It Now</a>
            <a href="#">Add to Cart</a>
        </div>
         </div>
        `;

        productcontainer.appendChild(cardDiv);        
    });
    
    
});
    }

}