const btn = document.querySelector('.button')

btn.addEventListener("click", (e) => {
        e.preventDefault()

        let inputs = document.getElementsByClassName('input')
        const datos = Array.from(inputs)

        // OBTENER EL VALOR DE CADA INPUT
        const datosFormulario = datos.map( (item) => {
            return  {
                        [item.name]: item.value
                    }
        })

        // LIMPIAR LOS INPUTS
        const limpiarInputs = datos.map( (item) => {
            return  item.value = "";
                    
        })

        console.log(datosFormulario)

        const tbody = document.querySelector('tbody[data-row]');
        const fila = document.createElement('tr');
        fila.classList.add('id')

        const celdaId = document.createElement('td');
        celdaId.classList.add('item-col')
        const celdaNombre = document.createElement('td');
        celdaNombre.classList.add('item-col')
        const celdaApellido = document.createElement('td');
        celdaApellido.classList.add('item-col')
        const celdaCorreo = document.createElement('td');
        celdaCorreo.classList.add('item-col')

        celdaId.textContent = idAleatorio();
        celdaNombre.textContent = datosFormulario[0].nombre; 
        celdaApellido.textContent = datosFormulario[1].apellido;
        celdaCorreo.textContent = datosFormulario[2].correo;

        // INSERTAMOS LAS CELDAS A LAS FILAS
        fila.appendChild(celdaId);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaApellido);
        fila.appendChild(celdaCorreo);

        tbody.appendChild(fila)

        // DEJAMOS VACIOS LOS INPUTS LUEGO DE CREAR LAS FILAS 
        limpiarInputs()

    })

    let cont = 0;

    const idAleatorio = () => {
        cont = cont + 1;
        return cont; 
    }

