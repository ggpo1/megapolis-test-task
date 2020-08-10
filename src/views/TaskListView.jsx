import React, { Component } from 'react';

import '../styles/TaskListView.css';
import ViewHeader from './../components/ViewHeader';
import GridView from './../components/GridView';


export default class TaskListView extends Component {
    constructor(props) {
        super(props);

        this.state = { ...props };
    }

    static getDerivedStateFromProps(props, state) {
        return { ...props }; // data lenth compaire
    }
    
    headerButtonAction = () => {
        console.log('add');
    };

    render() {
        const { data } = this.state;
        
        return (
            <div className={'tlv-wrapper'}>
                <ViewHeader
                    title={'Список задач'}
                    btData={{
                        title: 'Добавить',
                        style: 'btb-green',
                        action: this.headerButtonAction
                    }}
                    isButton
                />
                <div className={'tlv-content'}>
                    <GridView data={data} />
                </div>
            </div>
        )
    }
}