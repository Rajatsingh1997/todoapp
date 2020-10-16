import React, { useState } from 'react'
import TodoForm from './TodoForm'
import './Todolist.css'




function Todolist() {
    const [todos, setTodos] = useState([])
    const [filters, setFilters] = useState('all')


    const addTodo = (todo, date) => {
        console.log(todo)

        const newTodos = [...todos, { title: todo, date: date, id: Math.random(), status: false }];


        setTodos(newTodos);
        //console.log( ...todos);


    }

    //Delete Function


    const dltTodo = (index) => {
        const newTodos = [...todos]
        const updatedTodos = newTodos.filter((todo) => todo.id !== index)
        setTodos(updatedTodos);
        console.log(updatedTodos);
        console.log(todos);
    }

    //function for Checkbox

    const changeStatus = (todoid) => {

        console.log(todoid)
        const newTodos = [...todos];
        for (let i = 0; i < newTodos.length; i++) {
            if (newTodos[i].id == todoid) {
                newTodos[i].status = !newTodos[i].status;
            }
        }
        setTodos(newTodos);
        console.log(newTodos);
        console.log(todos);



    }
    const completedTodo = () => {
        setFilters('completed')
    }
    const allTodo = () => {
        setFilters('all')
    }
    const activeTodo = () => {
        setFilters('active')
    }

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <div className='card'>
            {

                todos.filter(todo => {
                    if (filters === 'all') {
                        return todo
                    } else if (filters === 'completed') {
                        return todo.status === true
                    }
                    else if (filters === 'active') {
                        return todo.status === false
                    }
                }).map((todo) => {
                    return (
                        <>
                            <ul >
                                <li className='listitem'>
                                    <input type='checkbox' onChange={() => { changeStatus(todo.id) }} checked={todo.status} />
                                    <span className='forspace'>{todo.title} </span>
                                    
                                    <button className='btn2' onClick={() => { dltTodo(todo.id) }} >Delete</button>
                                    <span className='dat'>{todo.date}</span>
                                </li>

                            </ul>

                        </>
                    )
                })

            }
            </div>
            <div> <button className='btn3' onClick={allTodo}> All</button>
                <button className='btn3' onClick={activeTodo}>Active</button>
                <button className='btn3' onClick={completedTodo}>Completed</button></div>

        </div>
    )
}

export default Todolist;