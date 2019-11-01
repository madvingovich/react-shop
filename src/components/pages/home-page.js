import React, { Fragment } from 'react';
import { BookListContainer } from '../../containers';

const HomePage = () => {
    return (
        <Fragment>
            <h2 className="my-4">Main</h2>
            <BookListContainer />
        </Fragment>
    );
}

export default HomePage;