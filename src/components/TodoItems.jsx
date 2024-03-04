import React from 'react';

function TodoItems({ todos,  ondelete }) {



    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => ondelete(index)}>Delete</button>
                       
              
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoItems;