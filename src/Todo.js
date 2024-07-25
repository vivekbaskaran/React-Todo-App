import React,{useState} from 'react'

export const Todo = ({ todo, updateTodo, deleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(todo.name);
    const [description, setDescription] = useState(todo.description)
    const [status, setStatus] = useState(todo.status)
    
    const handleEdit = () => {
         setIsEditing(!isEditing)
    }
    const handleSave = () => {
        updateTodo({
            ...todo, name, description, status,
        });
        setIsEditing(false)
    }
    return (
        <div className='todo-card'>
            {isEditing ? <>
                <div>
                    <label for="name">Name : </label>
                    <input id="name" type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </div>    
                <div>
                    <label for="desc">Description : </label>
                    <input id="desc" type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                <label for="status">Status : </label>
                <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Not Completed">Not Completed</option>
                    <option value="Completed">Completed</option>
                    </select>
                 </div>   
                <button onClick={handleSave}>Save</button>
            </> : 
                <> 
                    <h3>Name: {todo.name}</h3>
                    <p>Description: {todo.description}</p>
                    <p>Status: {todo.status}</p>
                    <span>
                    <button className="editButton" onClick={handleEdit}>Edit</button>
                    <button className="deleteButton" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </span>       
                </>
            }
        </div>      
  )
}
