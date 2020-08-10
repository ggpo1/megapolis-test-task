import React from 'react';

import '../styles/ButtonBox.css';
import * as EditPNG from '../images/edit.png';
import * as RemovePNG from '../images/remove.png';
import * as ClosePNG from '../images/close.png';

function ButtonBox({ title, btStyle, action }) {

    let buttonContent = title;

    if (btStyle.includes('btb-edit')) buttonContent = <img src={EditPNG} alt={title} />;

    if (btStyle.includes('btb-remove')) buttonContent = <img src={RemovePNG} alt={title} />;

    if (btStyle.includes('btb-close')) buttonContent = <img src={ClosePNG} alt={title} />;

    return (
        <div onClick={(e) => action(e)} className={`btb-wrapper ${btStyle}`}>
            {buttonContent}
        </div>
    );
}

export default ButtonBox;