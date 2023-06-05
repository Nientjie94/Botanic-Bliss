
let cartItems = { // object to store cart items
    snake: {
        quantity: 0,
        price:  380
    },
    spider: {
        quantity: 0,
        price:  260
    },
    peaceLily: {
        quantity: 0,
        price:  440
    },
    aloeVera: {
        quantity: 0,
        price:  300
    },
    rubberPlant: {
        quantity: 0,
        price:  400
    },
}

/* todo add ids on rows html
    todo update html inputs to reflect ls


*
* */

console.log(cartItems)

loadCartFromLS()  //loads saved quantity cart

updateCartCounter()

hideEmptyItems()

updateInputItems()

calculateTotal()


function loadCartFromLS() {
    const localStorageCartItems = localStorage.getItem('cartItems');
    if(localStorageCartItems) {
        cartItems = {...cartItems, ...JSON.parse(localStorageCartItems)}  //parse is opposite of parseInt
    }
}

function hideEmptyItems() {
    Object.keys(cartItems).forEach(
        (key) => {
            const cartItem = document.getElementById(key)
            if (cartItem) {
                if (cartItems[key].quantity === 0) {
                    cartItem.setAttribute('style', 'display: none')
                    console.log(key, 'is empty', cartItem)
                }
            } else if (cartItems[key].quantity > 0) {
                cartItem.setAttribute('style', 'display: initial')
            }
        }
    )
}

function updateCartCounter() {
    console.log('running');
    let total = 0
    Object.keys(cartItems).forEach(
        (key) => {
            console.log(key)
            total = total + cartItems[key].quantity
        }
    )
    const badgeSpan = document.getElementById('cart-counter')
    badgeSpan.innerText = total
}

function updateInputItems() {
    document.getElementById('snake').value = cartItems.snake.quantity
    document.getElementById('spider').value = cartItems.spider.quantity
    document.getElementById('peaceLily').value = cartItems.peaceLily.quantity
    document.getElementById('aloeVera').value = cartItems.aloeVera.quantity
    document.getElementById('rubberPlant').value = cartItems.rubberPlant.quantity
}

// calculate total
function calculateTotal() {

    let grandTotal = 0
    Object.keys(cartItems).forEach(
        (key) => {
            console.log(key)

            if(cartItems[key]) {
                grandTotal = grandTotal + (cartItems[key].quantity * cartItems[key].price)
            }

            const el = document.getElementById('total')
            el.innerText = 'R ' + grandTotal

        console.log(grandTotal)
        }
    )
}

