const updateCartItems = (cartItems, item, idx) => {
    if(idx === -1) {
        return [
            ...cartItems,
            item
        ];
    } else {
        return [
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx + 1)
        ];
    }
};

const updateCartItem = (book, cartBook = {}, quantity) => {

    const { id = book.id, title = book.title, count = 0, total = 0 } = cartBook;

    if(count + quantity === 0) quantity = 0;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity*book.price
    }
}

const updateOrder = (state, id, quantity) => {

    const { bookList: { books }, shoppingCart: { cartItems } } = state;    

    const book = books.find(book => book.id === id);

    const cartItemIndex = cartItems.findIndex(item => item.id === id);

    const newItem = updateCartItem(book, cartItems[cartItemIndex], quantity);

    return {
        cartItems: updateCartItems(cartItems, newItem, cartItemIndex),
        orderTotal: 0,
    };

}

const updateShoppingCart = (state, action) => {

    if(state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        };
    }

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART': 
            return updateOrder(state, action.payload, 1);

        case 'BOOK_REMOVED_FROM_CART' : 
            return updateOrder(state, action.payload, -1);

        case 'ALL_BOOKS_REMOVED_FROM_CART' : 
            return {
                cartItems: state.shoppingCart.cartItems.filter(item => item.id !== action.payload),
                orderTotal: 0
            };

        default:
            return state.shoppingCart;
    }
};

export default updateShoppingCart;