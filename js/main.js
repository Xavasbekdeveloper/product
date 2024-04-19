import { PRODUCTS } from "./data.js";
import { PRODUCTDATA } from "./const.js";
import { Product } from "./classes.js";

const cards = document.querySelector(".products__cards")
const addBtn = document.querySelector('.products__add-product');
const addFormBtn = document.querySelector('.products__add')
const CloseBtn = document.querySelector('.products__close')
const modal = document.querySelector('.modal')

const form = document.querySelector('.form')
const inputs = document.querySelectorAll('.input')
const name = document.querySelector('.input__name')
const quantity = document.querySelector('.input__quantity')
const img = document.querySelector('.input__img')
const select = document.querySelector('.input__select')
const price = document.querySelector('.input__price')

addBtn.addEventListener('click', () => {
    modal.classList.toggle('show__modal');
})

function close() {
    modal.classList.remove('show__modal')
}

CloseBtn.addEventListener('click', () => {
    close()
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let product = {}

    inputs.forEach((inp) => {
        product[inp.name] = inp.value
    })

    // let product = new Product(
    //     quantity.value,
    //     price.value,
    //     img.value,
    //     name.value,
    //     select.value,
    // )

    PRODUCTS.push(product)
    localStorage.setItem(PRODUCTDATA, JSON.stringify(PRODUCTS))
    mapProducts(PRODUCTS)

    inputs.forEach((inp) => {
        inp.value = ""
    })

    close()
});


function mapProducts(productData) {
    while (cards.firstChild) {
        cards.firstChild.remove()
    }

    let fragment = document.createDocumentFragment()
    productData.forEach((product) => {
        let card = document.createElement("div")
        card.classList.add('products__card')
        card.innerHTML = `
            <div class="products__card__img">
                <img src="${product.img}" alt="${product.img} img">
            </div>

            <div class="products__card__info">
                <h2 class="products__card__title">
                    Name: ${product.name}
                </h2>
                <h2 class="products__card__desc">Unit: ${product.unit}</h2>
                <p class="products__card__desc">Quantity: ${product.quantity}</p>
                <p class="products__card__desc">Price: ${product.price} $</p>
                <button class="delete__btn" data-id="${product.id}" name="delete">Delete</button>

                </div>
        `

        fragment.appendChild(card)
        cards.appendChild(fragment)
    })

    // let productCards = ""


    // productData.forEach((product) => {
    //     productCards += `
    //         <div class="products__card">
    //             <div class="products__card__img">
    //                 <img src="${product.img}" alt="${product.img} img">
    //             </div>

    //             <div class="products__card__info">
    //                 <h2 class="products__card__title">
    //                     Name: ${product.name}
    //                 </h2>
    //                 <h2 class="products__card__desc">Unit: ${product.unit}</h2>
    //                 <p class="products__card__desc">Quantity: ${product.quantity}</p>
    //                 <p class="products__card__desc">Price: ${product.price} $</p>
    //                 <button class="delete__btn" name="Delete">Delete</button>
    //             </div>
    //         </div>
    //     `

    //     cards.innerHTML = productCards
    // })
}

mapProducts(PRODUCTS)

const deleteProduct = (id) => {
    let index = PRODUCTS.findIndex(u => u.id === id)
    PRODUCTS.splice(index, 1);

    mapProducts(PRODUCTS)
}

cards.addEventListener('click', e => {
    if (e.target.name === "delete") {
        deleteProduct(e.target.dataset.id)
    }
})

console.log(PRODUCTS);