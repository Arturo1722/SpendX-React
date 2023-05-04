
//Funcion para gegenerar un ID aleatorio
export const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return random + fecha;
}

//Funcion para darle formato a la fecha
export const  formatearFecha = fecha => {
    const fechaActual = new Date();

    //opciones de configuración
    const opciones = {
        year:'numeric',
        month:'long',
        day:'2-digit', 
    }

    return fechaActual.toLocaleDateString('es-Es', opciones)
}