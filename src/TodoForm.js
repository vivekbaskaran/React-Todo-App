import React,{useState} from 'react'

export const TodoForm = ({ addTodo }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (name && description) {
            addTodo({
                id: Date.now(),
                name,
                description,
                status: 'Not Completed'
            });
            setName('');
            setDescription('');
            
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input className="addForm" type='text' placeholder='Todo name' value={name} onChange={(e) => setName(e.target.value)} />
            <input className="addForm" type='text' placeholder='Todo description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className="addTodo" type='submit'>Add Todo</button>
        </form>
    
    );
};
