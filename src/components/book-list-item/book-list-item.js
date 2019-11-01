import React from 'react';
import { Link } from 'react-router-dom';

import './book-list-item.css'

const BookListItem = ( { book, onAddedToCart }) => {
    const { imageUrl, title, author, price } = book;

    return (
        <div className="book-list-item d-flex py-2 pl-0 pr-2 my-3">
            <div className="book-cover">
                <img src={imageUrl}  alt={title}/>
            </div>
            <div className="book-details ml-4 d-flex flex-column justify-content-between">
                <div>
                    <h3><Link to="/" className="book-title">{title}</Link></h3>
                    <p className="book-author mb-0">{author}</p>
                </div>
                <div>
                    <p className="book-price"><b>{price}</b> грн</p>
                    <button 
                        onClick={onAddedToCart}
                        className="btn btn-info">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookListItem;