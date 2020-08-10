import React, { Component } from 'react';

import '../styles/GridView.css';
import ButtonBox from './ButtonBox';

export default class GridView extends Component {
    constructor(props) {
        super(props);

        this.state = { ...props };
    }

    static getDerivedStateFromProps(props, state) {
        return { ...props }; // data lenth compaire
    }

    render() {
        const { data, editAction, removeAction } = this.state;
        if (data.length === 0) return null;

        let headers = Object.keys(data[0]);
        let rows = [];

        data.forEach((el, i) => {
            let cells = [];
            headers.forEach(header => cells.push(<div key={`${el[header]}_${i}`} className={`gv-cell ${header === 'id' && 'gv-id'}`}>{el[header]}</div>));
            cells.push(<div key={`buttons_${i}`} className={'gv-cell gv-buttons-cell'}>
                <ButtonBox
                    title={'редактировать'}
                    btStyle={'btb-edit btb-padding'}
                    action={() => editAction(el)}
                />
                <ButtonBox
                    title={'удалить'}
                    btStyle={'btb-remove btb-padding'}
                    action={() => removeAction(el)}
                />
            </div>);
            rows.push(<div key={`row_${i}`} className={'gv-row'}>{cells}</div>);
        });

        return (
            <div className={'gv-wrapper'}>
                {rows}
            </div>
        );
    }
}