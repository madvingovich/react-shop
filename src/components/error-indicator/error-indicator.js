import React from 'react';

import './error-indicator.css';
import errorImage from './ErrorHorror.png';

const ErrorIndocator = () => {
    return (
        <div className="error-indicator py-3">
            <h2 className="text-center">Oooops, something happened...</h2>
            <img src={errorImage} alt="error" />
        </div>
    );
};

export default ErrorIndocator;