import React from 'react';
import { translate } from 'react-i18next';

const Button = function (props) {
    return (
        <div>
            <button>{ props.text }</button>
        </div>
    )
}

export default Button;