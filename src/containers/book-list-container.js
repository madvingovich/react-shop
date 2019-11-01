import React, { Component } from 'react';
import BookList from '../components/book-list';
import Loader from '../components/loader'
import ErrorIndicator from '../components/error-indicator';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withBookstoreService } from '../components/hoc';
import { fetchBooks, bookAddedToCart } from '../actions';
import { compose } from '../utils'


class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {                
        const { books, loading, error, onAddedToCart } = this.props;

        if(loading) return <Loader />;

        if(error) {
            console.log('Error: ' + error);
            return <ErrorIndicator />;
        }

        return <BookList onAddedToCart={onAddedToCart} books={books} />
    }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return { books, loading, error };
};

// const mapDispatchToprops = (dispatch) => {
//     return {
//         booksLoaded: (newBooks) => {
//             return dispatch({
//                 type: 'BOOKS_LOADED',
//                 payload: newBooks
//             });
//         },
//         booksRequested: () => {
//             return dispatch({
//                 type: 'BOOKS_REQUESTED'
//             });
//         }
//         // ...
//     };
// };

// const mapDispatchToprops2 = (dispatch) => {
//     return bindActionCreators({
//         booksLoaded
//         // ...
//     }, dispatch);
// };

// const mapDispatchToprops3 = {
//     booksLoaded,
//     booksRequested,
//     booksError
// }

const mapDispatchToprops4 = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),  
        onAddedToCart: bookAddedToCart
    }, dispatch);
};


//actions or mapDispatchToprops

// export default withBookstoreService()(connect(mapStateToProps, mapDispatchToprops3)(BookList));

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToprops4)
)(BookListContainer);