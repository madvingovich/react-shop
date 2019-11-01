import React from 'react';
import './loader.css';

const Loader = (props) => {
    return (
        <div className="w-100 d-flex justify-content-center py-3">
            <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    );
}

export default Loader;