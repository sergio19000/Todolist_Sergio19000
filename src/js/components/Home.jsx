import React, { useState } from "react";
import Input from "./Input";
import ListaPendiente from "./ListaPendiente";
// include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// create your first component
const Home = () => {
	const[tareas, setTareas] = useState([]);

	const agregarTarea = (texto) => {
		setTareas([...tareas, texto]);
	};

	const eliminarTarea = (index) =>{
		const nuevasTareas = tareas.filter((_,i) => i !== index);
		setTareas(nuevasTareas)
	}; 

	return (
		<div className="text-center">
			<h1>Lista de Tareas</h1>

				<Input agregarTarea={agregarTarea} />

			<ul className="lista">
				{tareas.map((tarea,index) => (
					<ListaPendiente
						key={index}
						texto={tarea}
						index={index}
						eliminarTarea={eliminarTarea}
					/>
				))}
			</ul>
			<div className="contador">
				{tareas.length} {tareas.length === 1 ? "tarea pendiente" : "tareas pendientes"}
			</div>
		</div>
	);
}

export default Home;