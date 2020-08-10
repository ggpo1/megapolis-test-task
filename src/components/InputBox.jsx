import React, { useState } from 'react';

import '../styles/InputBox.css';

function InputBox({ value, change }) {
    const [prevValue, setPrevValue] = useState(null);

    if (value !== prevValue) {
        // Row изменился с прошлого рендера. Обновляем
        setPrevValue(value);
    }

    return (
        <input value={value} onChange={(e) => change(e.target.value)} className={'input-box'} type="text" />
    );
}

export default InputBox;