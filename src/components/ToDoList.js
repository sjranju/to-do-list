let i = 1
const handleClick = () => {
    const input1 = document.getElementById('input1')
    const textNode = document.createTextNode(input1.value)
    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    if (input1.value !== '') {
        let j = 'inp' + i
        input.setAttribute('id', j)
        input.setAttribute('value', input1.value)

        const label = document.createElement('label')
        label.setAttribute('for', j)
        label.appendChild(textNode)
        const myListH2 = document.getElementById('myListH2')
        myListH2.appendChild(input)
        myListH2.appendChild(label)
        const mybr = document.createElement('br')
        myListH2.appendChild(mybr)
        input1.value = ''
        input1.focus()
        i++
    }

}


function ToDoList() {
    return (
        <div>
            <h1>My To Do List</h1>
            <input placeholder='Add new' id='input1'></input>
            <button onClick={handleClick}>Add</button>
            <h2 id='myListH2'></h2>
        </div>
    )
}

export default ToDoList