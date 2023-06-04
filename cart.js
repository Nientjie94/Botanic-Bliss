
let cartItems = { // object to store cart items
    snake: {
        quantity: 0
    },
    spider: {
        quantity: 0
    },
    peaceLily: {
        quantity: 0
    },
    aloeVera: {
        quantity: 0
    },
    rubberPlant: {
        quantity: 0
    },
}

console.log(cartItems)

loadCartFromLS()  //loads saved quantity cart

updateCartCounter()

hideEmptyItems()

const logChange = (x) => {
   console,log(x)
}


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



