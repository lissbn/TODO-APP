import React, { useState } from 'react'


function ToDoList(){

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]); // tareas iniciales por defecto
    const [newTask, setNewTask] = useState("");// constante de nuevas tareas

    function handleInputChange(event){ // funcion para mostrar cuando se escriba en el cuadro de texto
        setNewTask(event.target.value); 

    }
    function addTask(){ // funcion para crear tareas
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            // aqui spread the array of tasks and add a new task
            // t representa el antiguo arreglo dee tasks
            setNewTask(""); // para que no se quede la misma info escrita
        }
    }
    function deleteTask(index){ // funcion para borrar tareas
        const updatedTasks = tasks.filter((_, i) => i !== index); 
        // actualiza la lista cont todas las tareas que no son iguales al index
            // i se refiere a index, se puso asi para diferenciarlo del parametro 
            // _ es para ignorar ese parametro
            setTasks(updatedTasks);
    }
    function moveTaskUp(index){ // funcion para mover tarea hacia arriba
       
        if(index > 0){ // si el indice es mayor que 0, es decir si no es el primero en la lista
            const updatedTasks = [...tasks]; // se crea variable que guarda la nueva lista 
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){ // funcion para mover tarea hacia abajo
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(

        <div className='to-do-list'> 
{/* esta seccion tiene el nombre to-do-list */}
            <h1> To-Do-List </h1>
{/* escribe el titulo en h1 */}
            <div>
                <input
                // texto y formato de el espacio para escribir
                    type='text'
                    placeholder = "Enter a task..."
                    value = {newTask}
                    // lo ingresado sera de newTask
                    onChange={handleInputChange}
                    // aqui se usa esta funcion para que muestre a medida que se va escribiendo
                />
                <button
                // crea boton Add que use funcion AddTask
                    className = 'add-button'
                    onClick = {addTask}>
                    Add
                </button>
            </div>          
            <ol>
                {tasks.map((task, index) =>
                    <li key = {index}>
                        <span className='text'>{task} </span> 
                        <button className='delete-button' // crea boton delete y llama a la funcion deleteTask al hacer click
                        onClick={() => deleteTask(index)}>
                            {/* // callbavck function porque la funcion pide un parametro */}
                        Delete    
                        </button>
                        <button className='move-button'
                        onClick={() => moveTaskUp(index)}>
                        UP  ⬆️  
                        </button>
                        <button className='move-button'
                        onClick={() => moveTaskDown(index)}>
                        DOWN  ⬇️  
                        </button>
                    </li>
                )} 
            </ol>
        </div>
    );
}
export default ToDoList;