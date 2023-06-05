
// const cartItems = []; // ['snake', 'spider']
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

loadCartFromLS()  //loads saved quantity cart

updateInputItems()  // updates and saves changes in quantities

updateCartCounter() // updates navbar cart badge

function addToCart (productName) {
    if (+document.getElementById(productName).value >= 0) {  //ensures that you can't select negative values.  // use a plus to cast a string to a number

        if (productName === 'snake') {
            const inputValue = document.getElementById('snake').value || 0  //cart should not be less than 0
            console.log(inputValue)
            cartItems.snake.quantity = parseInt(inputValue)
        } else if (productName === 'spider') {
            const inputValue = document.getElementById('spider').value || 0  //cart should not be less than 0
            console.log(inputValue)
            cartItems.spider.quantity = parseInt(inputValue)
        } else if (productName === 'peaceLily') {
            const inputValue = document.getElementById('peaceLily').value || 0  //cart should not be less than 0
            console.log(inputValue)
            cartItems.peaceLily.quantity = parseInt(inputValue)
        } else if (productName === 'aloeVera') {
            const inputValue = document.getElementById('aloeVera').value || 0  //cart should not be less than 0
            console.log(inputValue)
            cartItems.aloeVera.quantity = parseInt(inputValue)
        } else if (productName === 'rubberPlant') {
            const inputValue = document.getElementById('rubberPlant').value || 0  //cart should not be less than 0
            console.log(inputValue)
            cartItems.rubberPlant.quantity = parseInt(inputValue)
        }
    }
    //update and save after action
    updateInputItems()
    saveCartToLS()
    updateCartCounter()
    console.log(cartItems, localStorage.getItem('cartItems'))
}

function loadCartFromLS() {
    const localStorageCartItems = localStorage.getItem('cartItems');
    if(localStorageCartItems) {
        cartItems = {...cartItems, ...JSON.parse(localStorageCartItems)}
    }
}

function saveCartToLS() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

function updateCartCounter() {
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
