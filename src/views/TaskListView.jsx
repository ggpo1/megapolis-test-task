import React, { Component } from 'react';

import '../styles/TaskListView.css';
import Modal from 'react-modal';
import ViewHeader from './../components/ViewHeader';
import GridView from './../components/GridView';
import Api from './../api/Api';
import ButtonBox from './../components/ButtonBox';
import InputBox from './../components/InputBox';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        height: 'auto',
        transform: 'translate(-50%, -50%)'
    }
};

export default class TaskListView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...{
                data: [],
                isAddModal: false,
                isTitleEmpty: false,
                newTask: '',
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

    headerButtonAction = () => this.setState({ isAddModal: true });

    addTaskInputChange = (str) => this.setState({ newTask: str });

    createButtonAction = () => {
        const { newTask } = this.state;
        if (newTask.length === 0) {
            this.setState({ isTitleEmpty: true });
        } else {
            (async () => {
                await Api.addTask(newTask);
                this.updateTasks();
            })();
            this.setState({ isTitleEmpty: false, newTask: '', isAddModal: false });
        }
    }

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
        const { data, isAddModal, isTitleEmpty } = this.state;

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
                <Modal
                    isOpen={isAddModal}
                    // onAfterOpen={afterOpenModal}
                    // onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className={'tlv-add-modal'}>
                        <div className={'tvl-am-title'}>
                            <div className={'title'}>Краткое описание</div>
                            <div className={'close'}>
                                <ButtonBox title={'close'} btStyle={'btb-close'} action={() => this.setState({ isAddModal: false })} />
                            </div>
                        </div>
                        <div className={'tvl-am-control'}>
                            <InputBox change={this.addTaskInputChange} />
                            {isTitleEmpty && <div className={'error'}>Заголовок не может быть пустым</div>}
                        </div>
                        <div>
                            <div><ButtonBox title={'Создать'} btStyle={'btb-green'} action={this.createButtonAction} /></div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}