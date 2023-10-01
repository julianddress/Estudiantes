import { estudianteService } from "../service/estudiante_service.js";

let cont = 0;
const idAleatorio = ()=>{
        cont++;
        return cont;
}
//backticks
const crearNuevaLinea = (nombre, apellido, email, id) => {

    const linea = document.createElement("tr");
    const contenido = `
        <td>${idAleatorio()}</td>
        <td class="td" data-td>
            ${nombre}
        </td>
        <td>${apellido}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
            <li>
                <a
                href="../screens/Editar_Estudiante.html"
                class="simple-button simple-button--edit"
                >
                Editar
                </a>
            </li>
            <li>
                <button class="simple-button simple-button--delete" type="button" id=${id}>
                Eliminar
                </button>
            </li>
            </ul>
        </td>
        `;
    linea.innerHTML = contenido
    
    const btn  = linea.querySelector("button")
    btn.addEventListener("click", (e) => {
        const id = btn.id;
        
        estudianteService.eliminarEstudiante(id).then( (respuesta) => {
            console.log(respuesta);
        }).catch(error => alert("Ocurrió un error"))
    })
    return linea
};

const table = document.querySelector("[data-table]")

// data toma el valor de nuestro response, asi que puede ser nombrado como queramos
estudianteService.listaEstudiantes().then( (data) => {
    
    // DESTRUCTURACIÓN
    data.forEach( ({ nombre, apellido, email, id}) => {
        const nuevaLinea = crearNuevaLinea(nombre, apellido, email, id)
        table.appendChild(nuevaLinea)
    });
}).catch((error) => alert("Ocurrió un problema"));