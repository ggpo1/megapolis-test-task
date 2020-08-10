import React, { Component } from 'react';

import '../styles/TaskListView.css';
import ViewHeader from './../components/ViewHeader';
import GridView from './../components/GridView';
import Api from './../api/Api';


export default class TaskListView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...{
                data: []
            }, ...props
        };
    }

    static getDerivedStateFromProps(props, state) {
        return { ...props }; // data lenth compaire
    }

    componentDidMount() {
        this.updateTasks();
    }

    updateTasks = async () => {
        this.setState({ data: await Api.getTasks() })
    }

    headerButtonAction = () => {
        console.log('add');
    };

    removeAction = ({ id }) => {
        (async () => {
            await Api.removeTask(id);
            this.updateTasks();
        })();
    }

    editAction = ({ id }) => {
        this.state.history.push(`/items/${id}`);
    }

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
                    <GridView
                        data={data}
                        editAction={this.editAction}
                        removeAction={this.removeAction}
                    />
                </div>
            </div>
        )
    }
}