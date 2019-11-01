import React from 'react';
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from '../../actions';

import './cart-table.css';

const CartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

    const itemsView = items.map((item, idx) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>₴{total}</td>
                <td>
                    <button
                        onClick={() => {onIncrease(id)}}
                        className="btn btn-outline-success">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button 
                        onClick={() => {onDecrease(id)}}
                        className="btn btn-outline-warning mx-2">
                        <i className="fa fa-minus-circle" />
                    </button>
                    <button 
                        onClick={() => {onDelete(id)}}
                        className="btn btn-outline-danger">
                        <i className="fa fa-trash-o" />
                    </button>
                </td>
            </tr>
        );
    })

    return (
        <div className="cart-table">
            <p>Your Order:</p>
            <table className="w-100">
                <thead>
                    <tr>
                        <th>#</th> 
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsView}
                </tbody>
            </table>

            <p className="total mt-4 mr-3 text-right">Total: <b>${total}</b></p>
        </div>
    );
};

const mapStateToProps = ({ shoppingCart }) => { 
    return {
        items: shoppingCart.cartItems,
        total: shoppingCart.orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
}



export default connect(mapStateToProps, mapDispatchToProps)(CartTable);