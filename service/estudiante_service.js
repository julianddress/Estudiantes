// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise#par%C3%A1metro. 


// POR DEFECTO TOMA EL METODO GET
const listaEstudiantes = () => 
        fetch("http://localhost:3000/estudiante").then((respuesta) => respuesta.json());

const registrarEstudiante = (nombre, apellido, email) => {

    return fetch("http://localhost:3000/estudiante", {
            method: "POST",
            // ESTANDAR DEL TIPO DE ARCHIVO QUE EL SERVIDOR VA A RECIBIR
            headers: {
                "Content-Type": "application/json"
            },
            // OBJETO FORMATEADO A TEXT PARA HTTP
            body: JSON.stringify({nombre, apellido, email})
        })
}

// NO NOS IMPORTA EL CONTENIDO
const eliminarEstudiante = (id) => {
    return fetch(`http://localhost:3000/estudiante/${id}`, {
                method: "DELETE",
            });
};



export const estudianteService = {

    // listaEstudiantes: listaEstudiantes 
    listaEstudiantes,
    registrarEstudiante,
    eliminarEstudiante,
};


// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D.