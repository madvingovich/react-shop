import React from 'react';
import BookListItem from '../book-list-item';

import './book-list.css';


const BookList = ({ books, onAddedToCart }) => {

    const bookList = books.map(book => {
        return (
            <li key={book.id}>
                <BookListItem 
                    onAddedToCart={() => onAddedToCart(book.id)}
                    book={book}/>
            </li>
        );
    });

    return (
        <ul className="book-list pl-0">
            { bookList }
        </ul>
    );
}

export default BookList;