import React from 'react';

const input = (props) => {
    return (
        <div>
            <label> {props.label}: </label>
            <input {...props} />
        </div>
    )
}

export default input;
