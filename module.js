
export function initialize(cart, counter) {
    if (localStorage.length) {
        window.addEventListener('load', function () {
            let fetchedItem = JSON.parse(localStorage.getItem('itemsId'))
            let fetchedcounter = JSON.parse(localStorage.getItem('itemsCounter'))
            for (let i = 0; i < fetchedItem.length; i++) {
                cart.push(fetchedItem[i])
            }
            for (let i = 0; i < fetchedcounter.length; i++) {
                counter[i] = fetchedcounter[i]
            }
        })
    }
}
export function addNewPro(id, product, counter, cart) {
    let allPro = document.getElementById('cart-container')
    let newPro = document.createElement('div')
    newPro.setAttribute('class', `Ptr${id} product`)
    newPro.innerHTML = newProinnerText(product, id, counter)
    let rmButton = document.createElement('a')
    rmButton.setAttribute('class', `Ptr${id}`)
    console.log(id)
    rmButton.innerText = 'Remove From Cart'
    rmButton.addEventListener("click", function () {
        let thisClass = this.classList[0]
        let divDel = document.getElementsByClassName(this.classList)[0]
        divDel.remove()
        let afterDel = cart.filter(function (pro) {
            console.log(`pro=${pro} ,class=${thisClass.slice(3)}`)
            return pro != `add${thisClass.slice(3)}`
        })
        while (cart.length != 0)
            cart.pop()
        let i = 0
        while (i != afterDel.length) {
            cart.push(afterDel[i])
            i++
        }
        localStorage.setItem('itemsId', JSON.stringify(cart))

    })
    newPro.appendChild(rmButton)
    allPro.appendChild(newPro)
   
}

function newProinnerText(product, id, counter) {
    let inner = `<img class ="propic" src="${product.images[0]}">
    <div class ="info">
    <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>${product.price}$</p>
        <div class="rate">
        <i class="filled fas fa-star"></i>
        <i class="filled fas fa-star"></i>
        <i class="filled fas fa-star"></i>
        <i class="filled fas fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>
        </div>
        <div class = "counter">
        <button class="add">+</button>
        <span class="quantity">${counter[id]}</span>
        <button class="minus">-</button>
        </div>
    `
    return inner
}