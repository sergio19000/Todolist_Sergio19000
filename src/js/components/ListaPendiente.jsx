import React, { useState } from 'react'

function ListaPendiente({ texto, index, eliminarTarea}) {

  return (
    <li className='tarea'>
        <span>{texto}</span>
        <span onClick={() => eliminarTarea(index)}>X</span>
    </li>
  );
}

export default ListaPendiente
