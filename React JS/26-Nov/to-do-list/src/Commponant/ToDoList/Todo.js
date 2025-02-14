import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    //Event
    const deleteHandler = () => {

        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    // const editeHandler = (e) => {
    //     this.setTodos({
    //         [e.target.id]: e.target.value
    //     });
    //     // setTodos(todos.((el) => el.id !== todo.id));

    // };

    const completeHandler = () => {

        setTodos(todos.map((item) => {
            if (item.id == todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }));

    };
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""} `}> {text} </li>
            <button onClick={completeHandler} className="complete-btn" >
                <i className=" fas fa-check"> </i>
            </button>
            <button onClick={deleteHandler} className="trash-btn "  >
                <i className=" fas fa-trash"> </i>
            </button>
            <button className="edit-btn "  >
                <i class="far fa-edit"></i>
            </button>
        </div>
    );
}
export default Todo;
