
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


console.log(cartItems)

loadCartFromLS()  //loads saved quantity cart

updateCartCounter()

hideEmptyItems()

updateInputItems()


qTotal()

calculateTotal()


function loadCartFromLS() {
    const localStorageCartItems = localStorage.getItem('cartItems');
    if(localStorageCartItems) {
        cartItems = {...cartItems, ...JSON.parse(localStorageCartItems)}  //parse is opposite of stringify
    }
}

function saveCartToLS() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

function hideEmptyItems() {
    Object.keys(cartItems).forEach(
        (key) => {
            const cartItem = document.getElementById(key + '-row')
            if (cartItem) {
                if (cartItems[key].quantity === 0) {
                    cartItem.setAttribute('style', 'display: none')
                    console.log(key, 'is empty', cartItem)
                } else if (cartItems[key].quantity > 0) {
                    cartItem.setAttribute('style', 'display: table-row')
                }
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
            total = total + +cartItems[key].quantity
        }
    )
    const badgeSpan = document.getElementById('cart-counter')
    badgeSpan.innerText = total
}

function updateInputItems() {
    document.getElementById('snake-input').value = cartItems.snake.quantity
    document.getElementById('spider-input').value = cartItems.spider.quantity
    document.getElementById('peaceLily-input').value = cartItems.peaceLily.quantity
    document.getElementById('aloeVera-input').value = cartItems.aloeVera.quantity
    document.getElementById('rubberPlant-input').value = cartItems.rubberPlant.quantity
}

// Calculate the grandTotal for each object based on price and quantity
function qTotal()  {
    Object.keys(cartItems).forEach(
        (key) => {
            console.log(key)

            if(cartItems[key]) {
               const itemTotal =  (cartItems[key].quantity * cartItems[key].price)
                const ele = document.getElementById(key + '-pr')
                ele.innerText = 'R ' + itemTotal
            }
        }
    )
}

function handleInputOnChange(id) {
    console.log(id);
    cartItems[id].quantity = document.getElementById(id + '-input').value
    saveCartToLS()
    calculateTotal()
    qTotal()
    updateCartCounter()
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


