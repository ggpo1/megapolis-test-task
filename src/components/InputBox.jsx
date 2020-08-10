import React from 'react';

import '../styles/InputBox.css';

function InputBox({ change }) {
    return (
        <input onChange={(e) => change(e.target.value)} className={'input-box'} type="text" />
    );
}

export default InputBox;