import React, { useState } from 'react'

const ToDoListReact = () => {
    const [list, setList] = useState<string[]>([])
    const [item, setItem] = useState('')
    const [check, setCheck] = useState<string[]>([])
    const [tickedList, settickedList] = useState<string[]>([])
    const [editFlag, setEditFlag] = useState<string>('')
    const [editText, setEditText] = useState<string>('')

    const AddItem = (e) => {
        e.preventDefault()
        if (list.includes(item))
            alert(`${item} already exists`)
        else if (tickedList.includes(item))
            alert('This task is already completed')
        else
            if (item !== '')
                setList([...list].concat(item))
            else
                alert('Please enter task before submitting')

        setItem('')

    }

    const handleEdit = (editFlagItem) => {
        setEditFlag(editFlagItem)
    }

    const handleCheck = (e) => {
        var checkedList = [...check]
        if (e.target.checked) {
            checkedList = [...check].concat(e.target.value)

        }
        else {
            checkedList.splice((check.indexOf(e.target.value)), 1)
        }
        setCheck(checkedList)
        console.log(`Check list ${checkedList}`);

    }

    const onDelete = (tickedListItem) => {

        const updatedMainList = list.filter(filteredList => filteredList !== tickedListItem);
        setList(updatedMainList)

        const updatedCheckList = check.filter(checkedList => checkedList !== tickedListItem)
        setCheck(updatedCheckList)

        const updatedTickList = [...tickedList].concat(tickedListItem)
        settickedList(updatedTickList)

    }

    const handleEditUpdate = (listItem, index) => {
        if (editText === '')
            alert('Please provide a valid task before updating')
        else if (editText === listItem)
            alert('Edited text is same as previous task')
        else if (tickedList.includes(editText))
            alert('This task is already completed')
        else if(list.includes(editText))
            alert('This task already exists')
        else {
            listItem = editText
            list.splice(index, 1, listItem)
            setEditText('')
            setEditFlag('')
            setList([...list])
        }
    }

    let tickedItems = tickedList.length ? 
    <div>
        <h2>Completed tasks <br /></h2>
        <div id='tickedItems'>
            {tickedList.map((mapList, index) =>
                <p key={index} id='myTickedItems'>{mapList}</p>
            )}
        </div>
    </div> 
    : undefined

    return (
        <div>
            <form onSubmit={AddItem}>
                <h1>My ToDo List</h1><br />
                <input id='taskInput' autoFocus placeholder='Enter task' value={item}
                    onChange={e => setItem(e.target.value)} />
                <button id='submit' type='submit'>Add</button>
            </form>

            {
                list.map((listItem, index) => (
                    <div key={index}>
                        <input id='myCheckbox' type='checkbox' checked={check.includes(listItem)} value={listItem} onChange={handleCheck} />
                        <label id='itemLabel' htmlFor={'' + index}>{listItem}</label>
                        {
                            check.includes(listItem) ?

                                <div className='myButtons'>
                                    {
                                        editFlag === listItem ?

                                            <div id='editButton'>
                                                <input id='editInput' type='text' autoFocus value={editText} onChange={e => setEditText(e.target.value)} />
                                                <button id='update' type='button' onClick={() => handleEditUpdate(listItem, index)}> Update</button>
                                            </div>
                                            :
                                            <div>
                                                <button id='delete' type='button' onClick={() => onDelete(listItem)}>
                                                    Done
                                                </button>
                                                <button id='edit' type='button' onClick={() => handleEdit(listItem)}>
                                                    Edit
                                                </button>
                                            </div>
                                    }
                                </div>
                                : ''
                        }
                    </div>)
                )
            }

            {tickedItems}
        </div>
    )
}

export default ToDoListReact