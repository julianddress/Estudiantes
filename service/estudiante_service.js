//backticks
const crearNuevaLinea = (nombre, apellido, email) => {
    const linea = document.createElement("tr");
    const contenido = `
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
                <button class="simple-button simple-button--delete" type="button">
                Eliminar
                </button>
            </li>
            </ul>
        </td>
        `;
    linea.innerHTML = contenido
    return linea
}

const table = document.querySelector("[data-table]")

// CRUD   --> METODOS HTTP
// CREATE   = POST
// READ     = GET
// UPDATE   = PUT / PATCH
// DELETE   = DELETE

const http = new XMLHttpRequest;
http.open("GET", "http://localhost:3000/estudiante")
http.send()


// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise#par%C3%A1metro. 

const listaEstudiantes = () => {
    const promise = new Promise( (resolve, reject) => {
        http.onload = () => {

            // LEEMOS LOS DATOS EN FORMATO JAVASCRIPT Y NO EN FORMA DE TEXTO
            const response = JSON.parse(http.response)
            console.log(response)
            
            if(http.status >= 400){
                reject(response)
            }else{
                resolve(response)
            }
            // FUNCIONES ANIDADAS - CALLBACK HELL JS
            // http.open("GET", "http://localhost:3000/estudiante/hoy")
        
            // PROMISES
        }
    })
    return promise;
}

// data toma el valor de nuestro response, asi que puede ser nombrado como queramos
listaEstudiantes().then( (data) => {
    console.log(data)
    data.forEach( estudiante => {
        const nuevaLinea = crearNuevaLinea(estudiante.nombre, estudiante.apellido, estudiante.email)
        table.appendChild(nuevaLinea)
    });
})