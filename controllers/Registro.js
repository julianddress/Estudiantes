import { estudianteService } from "../service/estudiante_service.js"

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const nombre = document.querySelector("[data-nombre]").value;
    const apellido = document.querySelector("[data-apellido]").value;
    const email = document.querySelector("[data-email]").value;

    console.log(nombre, apellido, email)

    estudianteService.registrarEstudiante(nombre, apellido, email).then( () => {
        window.location.href = "/screens/Registro_completado.html";
    }).catch( err => console.log(err))
})

