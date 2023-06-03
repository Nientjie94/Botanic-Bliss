
// const cartItems = []; // ['snake', 'spider']
let cartItems = { // object to store cart items
   snake: {
      quantity: 0
   },
   spider: {
      quantity: 0
   },
    peachLily: {
        quantity: 0
    },
    aloeVera: {
        quantity: 0
    },
    rubberPlant: {
        quantity: 0
    },
}

loadCartFromLS()  //loads saved quantity cart

updateInputItems()  // updates and saves changes in quantities

function addToCart (productName) {
    console.log(productName, document.getElementById(productName), +'') // 'snake' | 'spider' | etc.. //

    if (+document.getElementById(productName).value >= 0) {  //ensures that you can't select negative values.  // use a plus to cast a string to a number

        if (productName === 'snake') {
            const inputValue = document.getElementById('snake').value || 0  //cart should not be less than 0
            console.log(inputValue)
            cartItems.snake.quantity = parseInt(inputValue)
        } else if (productName === 'spider') {

        } else if (productName === 'peachLily') {

        } else if (productName === 'aloeVera') {

        } else if (productName === 'rubberPlant') {

        }
    }
    //update and safe after action
    updateInputItems()
    saveCartToLS()
    console.log(cartItems, localStorage.getItem('cartItems'))
}

function loadCartFromLS() {
    const localStorageCartItems = localStorage.getItem('cartItems');
    if(localStorageCartItems) {
        cartItems = JSON.parse(localStorageCartItems)  //parse is opposite of parseInt
    }
}

function saveCartToLS() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

function updateInputItems() {
    document.getElementById('snake').value = cartItems.snake.quantity
    document.getElementById('spider').value = cartItems.spider.quantity
    document.getElementById('peachLily').value = cartItems.peachLily.quantity
    document.getElementById('aloeVera').value = cartItems.aloeVera.quantity
    document.getElementById('rubberPlant').value = cartItems.rubberPlant.quantity
}
