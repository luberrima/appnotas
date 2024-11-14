"use strict"
// const input = document.forms[0]
// input.value = "Barrer"
// console.log(input.value)

//esto está en construcction jajajajajaa
const valorInput = FormData(input).nuevaTarea.value



// AGREGAR TAREA (no esta bien aun)
let listaTareas = []
let tarea = {}

function agregarTarea(nuevatarea) {
    nuevatarea = document.getElementById("nuevaTarea").value
    listaTareas.push(tarea)
    console.log(listaTareas)
    console.log(`Tarea añadida: ${nuevatarea}`)
}


console.log(listaTareas)

// ELIMINAR TAREA (no esta bien aun)
function eliminarTarea(idTarea) {

    try {
        const index = listaTareas.findIndex((tarea) => tarea.id === idTarea)
        if (index === -1) {
            throw new Error(`La tarea con ID ${idTarea} no fue encontrada.`)
        } else {
            listaTareas.splice(index, 1);
        }
    } catch (error) {
        console.log(error.message)
    }
}


function listarTareas() {
    listaTareas.forEach((tarea) => {
        console.log(`Id tarea: ${tarea.id}, Nombre tarea: ${tarea.task}`)
    })
}