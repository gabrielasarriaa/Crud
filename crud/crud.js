// // SELECCIONAR ETIQUETAS DEL FORMULARIO
// let campoTexto = document.querySelector("#input-tareas");
// let botonCrear = document.querySelector("#boton-crear");
// let tabla = document.querySelector(".table tbody");
// let con = 1;

// // agregar un evento al boton
// botonCrear.addEventListener("click", ()=>{
//     // alert(campoTexto.value);
//     nuevaTarea();
// })

// // funcion para crear tarea
// function nuevaTarea(){
//     if (campoTexto.value) {
//         // alert(campoTexto.value);
//         let fila = document.createElement("tr"); //->eqta. de fila
//         fila.innerHTML = `
//         <td>${ con++ }</td>
//         <td>${ campoTexto.value }</td>
//         <td>
//             <button class="btn btn-warning">🖊</button> -
//             <button onclick="eliminarTarea()" class="btn btn-danger">🗑</button>
//         </td>
//         `;
//         campoTexto.value = ""; //borrar lo que se escribe en el campo de texto
//         tabla.appendChild(fila); //agragra la tarea a la tabla
//     }else{
//         alert("No escribiste ninguna tarea");
//     }
// }
// //funcion para eliminar tareas
// function eliminarTarea(){
//     //confirmar antes de borrar
//    let confirmar= confirm("¿Deseas eliminar esta tarea?");
//    let etiqueta = event.target;
//    //confirmar si desea eliminar la tarea 
//    if (confirmar) {
//     etiqueta.parentElement.parentElement.remove();
//    }
//    console.log(etiqueta)
// }

// // función para editar tareas
// function editarTarea(event) {
//     // confirmar antes de editar
//     let confirmar = confirm("¿Deseas editar esta tarea?");
//     let etiqueta = event.target;

//     if (confirmar) {
     
//         let tarea = etiqueta.parentElement.parentElement;
//         let contenidoActual = tarea.cells[1].textContent.trim();

        
//         let nuevoContenido = prompt("Edita el contenido de la tarea:", contenidoActual);

       
//         if (nuevoContenido !== null && nuevoContenido !== "") {
//             tarea.cells[1].textContent = nuevoContenido;
//         }
//     }
//     console.log(etiqueta);
// }

// SELECCIONAR ETIQUETAS DEL FORMULARIO
let campoTexto = document.querySelector("#input-tareas");
let botonCrear = document.querySelector("#boton-crear");
let tabla = document.querySelector(".table tbody");
let con = 1;

// agregar un evento al boton
botonCrear.addEventListener("click", () => {
    // alert(campoTexto.value);
    nuevaTarea();
})

// función para crear tarea
function nuevaTarea() {
    if (campoTexto.value) {
        // alert(campoTexto.value);
        let fila = document.createElement("tr"); //->eqta. de fila
        fila.innerHTML = `
        <td>${ con++ }</td>
        <td>${ campoTexto.value }</td>
        <td>
            <button onclick="editarTarea(event)" class="btn btn-warning">🖊</button> -
            <button onclick="eliminarTarea(event)" class="btn btn-danger">🗑</button>
        </td>
        `;
        campoTexto.value = ""; // borrar lo que se escribe en el campo de texto
        tabla.appendChild(fila); // agragra la tarea a la tabla
    } else {
        alert("No escribiste ninguna tarea");
    }
}

// función para eliminar tareas
function eliminarTarea(event) {
    // confirmar antes de borrar
    let confirmar = confirm("¿Deseas eliminar esta tarea?");
    let etiqueta = event.target;
    // confirmar si desea eliminar la tarea 
    if (confirmar) {
        etiqueta.parentElement.parentElement.remove();
    }
    console.log(etiqueta);
}

// función para editar tareas
function editarTarea(event) {
    let confirmar = confirm("¿Deseas editar esta tarea?");
    if (confirmar) {
        let tarea = event.target.closest("tr").cells[1];
        let nuevoContenido = prompt("Edita el contenido de la tarea:", tarea.textContent.trim());
        if (nuevoContenido) {
            tarea.textContent = nuevoContenido;
        }
    }
}




















// // función para editar tareas
// function editarTarea(event) {
//     // confirmar antes de editar
//     let confirmar = confirm("¿Deseas editar esta tarea?");
//     let etiqueta = event.target;

//     if (confirmar) {
//         // obtener el contenido actual de la tarea
//         let tarea = etiqueta.parentElement.parentElement;
//         let contenidoActual = tarea.cells[1].textContent.trim();

//         // solicitar al usuario que ingrese el nuevo contenido de la tarea que se edita
//         let nuevoContenido = prompt("Edita el contenido de la tarea:", contenidoActual);

//         // si el usuario ingresa un nuevo contenido, actualizar la tarea
//         if (nuevoContenido !== null && nuevoContenido !== "") {
//             tarea.cells[1].textContent = nuevoContenido;
//         }
//     }
//     console.log(etiqueta);
// }