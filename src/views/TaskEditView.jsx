import React from 'react';
import { useParams } from 'react-router-dom';


function TaskEditView() {
    let { taskId } = useParams();

    return (<div>{taskId}</div>);
}

export default TaskEditView;
