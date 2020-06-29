import React, { useState } from 'react';

const Todo = () => {
    const [task, updateTask] = useState('');
    const [tasks, updateTasks] = useState([]);

    const handleInputChange = (event) => updateTask(event.target.value);

    const handleFormSubmit = (event) => {
        if (task.trim()) {

        }
        event.preventDefault();
        updateTasks([...tasks, task]);
        updateTask('');
    }

    return (<>
        <form
            onSubmit={handleFormSubmit}
        >
            <input
                data-testid="form-field"
                onChange={handleInputChange}
                placeholder="new task here"
                value={task}
                type="text"
            />
            <button
                data-testid="form-btn"
                type="submit"
            >
                Add new todo
            </button>
        </form>
        <table data-testid="table">
            <thead>
                <tr>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((t, i) =>
                        <tr key={i}>
                            <td>{t}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </>
    )
}


export default Todo;