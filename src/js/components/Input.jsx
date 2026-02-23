import React, {useState} from 'react'

function Input({agregarTarea}) {
  const[input, setInput] = useState("");

  const addTarea = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      agregarTarea(input);
      setInput("");
    }
  };
  
  return (
        <input 
            type="text" 
            placeholder="What needs to be done?" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={addTarea}
        />
  )
}

export default Input
