import React from 'react';

import '../styles/ViewHeader.css';
import ButtonBox from './ButtonBox';

function ViewHeader({ title, isButton, btData }) {
    
    let button;
    if (isButton) {
        button = (
            <div className={'vh-button'}>
                <ButtonBox
                    title={btData.title}
                    btStyle={btData.style}
                    action={btData.action}
                />
            </div>
        );
    }
    
    return (
        <div className={'vh-header'}>
            <span>{title}</span>
            {button}
        </div>
    );
}

export default ViewHeader;