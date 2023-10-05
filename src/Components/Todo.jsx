import React from 'react'
import { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import './Todo.css'

function Todo() {
    const [val, setVal] = useState('');
    const [todo, setTodo] = useState([]);


    // console.log(val);
    console.log(todo);




    let handleSubmit = (e) => {

        e.preventDefault()

        setVal(e.target[0].value)




        if (e.target[0].value === '') {
            alert('input should not be empty')
        }
        else {
            setVal(e.target[0].value)
        }
        e.target[0].value = ''

    }

    useEffect(() => {
        if (val !== '') {
            setTodo([...todo, val])
        }

    }, [val])


    let data = todo.map((value, index, update) => {


        let handleUpdate = (e) => {
            let updatingValue = prompt(`update ${value}`)
            if (updatingValue === '' && updatingValue === null) {
                alert('input should not be empty')
            }
            else {
                update.splice(index, 1, updatingValue)
                setTodo([...todo])
            }
        }

        let handleDelete = (e) => {
            update.splice(index, 1)
            setTodo([...todo])
        }



        return (
            <div className='tP'>
                {/* <span style={{marginTop:'10px'}}><input type="checkbox" name="checkbox" id="checkbox"  /></span> */}
                <div>
                    <li className='th5'>{value}</li>
                </div>
                <div>
                    <button className='eB' type="button" onClick={handleUpdate}>{<FaEdit />}</button>
                    <button className='dB' type="button" onClick={handleDelete} >{<MdDelete />}</button>
                </div>
            </div>
        )

    })

    return (
        <div className='parent'>
            <div className='hT'>
                <h1 className='h1'>Todo-List</h1>
            </div>
            <div className='child1'>
                <form className='tF' onSubmit={handleSubmit}>
                    <input type="text" name="text" id="text" className='tI' placeholder='Type Your Task...' />
                    <input className='btn' type="submit" value="Add" />
                </form>
                
            </div>
            <div className='child2'>
                {data}
            </div>
            
        </div>
    )
}

export default Todo