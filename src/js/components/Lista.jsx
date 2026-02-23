import React from "react";

const Lista = () => {
    return  (
    
        <div className="tarea-conteiner">
            <input 
                type="text" 
                placeholder="What needs to be done?" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={addTarea}
            />

            <ul>
                {tareas.map(tarea => (
                    <li key={tarea.id}>            
                        <span>{tarea.text}</span>
                        <button onClick={() => deleteTarea(tarea.id)}>X</button>
                    </li>
                ))}
            </ul>
            <div className="footer">
                {itemsLeft} item{itemsLeft !== 1 && "s"} left 
            </div>
        </div>
    );
}

export default Lista