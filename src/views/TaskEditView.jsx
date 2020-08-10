import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import '../styles/TaskEditView.css';
import ViewHeader from './../components/ViewHeader';
import Api from './../api/Api';
import InputBox from './../components/InputBox';
import ButtonBox from './../components/ButtonBox';

function TaskEditView() {
    const [title, setTitle] = useState('');
    const [_id, setId] = useState(0);
    const [oldTitle, setOldTitle] = useState('');
    
    let { taskId } = useParams();

    if (_id !== taskId) setId(taskId);
    
    let history = useHistory();

    useEffect(() => {
        (async () => {
            let data = await Api.getTasks();
            let task = data.filter(el => el.id === parseInt(_id))[0];
            setTitle(task.title);
            setOldTitle(task.title);
        })();
    }, []);

    let removeAction = (id) => {
        (async () => {
            await Api.removeTask(id);
        })();
        history.push('/');
    }

    // if (title.length === 0) return null;

    let buttonTitle = 'Вернуться в список';
    let buttonAction = () => history.push('/');
    if (title !== oldTitle) {
        buttonTitle = 'Сохранить';
        buttonAction = async () => {
            await Api.editTask(_id, title);
            history.push('/');
        }
    }

    return (
        <div className={'tev-wrapper'}>
            <ViewHeader
                title={`Задача №${_id}`}
                btData={{
                    title: 'Удалить',
                    style: 'btb-green',
                    action: () => removeAction(_id)
                }}
                isButton
            />
            <div className={'tev-content'}>
                <div>Краткое описание</div>
                <div className={'input-control'}>
                    <InputBox value={title} change={(str) => setTitle(str)} />
                </div>
                <div>
                    <ButtonBox title={buttonTitle} btStyle={'btb-blue'} action={buttonAction}/>
                </div>
            </div>
        </div>
    );
}

export default TaskEditView;
