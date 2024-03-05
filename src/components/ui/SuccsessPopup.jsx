import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SuccsessPopup = () => {
    return (
        <div className="success">
            <FontAwesomeIcon icon={faCircleCheck}/>
            <span>Item added to cart</span>
        </div>
    );
}

export default SuccsessPopup;
