
let pregunta1 = new Pregunta()

let respuesta1 = new Respuesta()

let seleccionarRespuesta = new VerificarRespuesta()

let cargarApp = () =>{
    mostrarPregunta();
    mostrarRespuesta();    
}

let mostrarPregunta = () => {
    pregunta1.pregunta()
}

let mostrarRespuesta = () => {
    setTimeout(()=>respuesta1.respuesta(),1000) 
}

let evaluarRespuesta = ()=>{
    seleccionarRespuesta.respuesta()
}

let retirarse = ()=>{
    alert("Te retiras, te llevas: "+ document.getElementById('acumulado').innerHTML)
    seleccionarRespuesta.guardarPremio()
    seleccionarRespuesta.restablecerValores()
    seleccionarRespuesta.cargarApp()
}

/*
fetch(url, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(function(response){
    return response.text()
}).then(function(text){
    console.log(text)
}).catch(function (error){
    console.error(error)
})

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data[0].premioGanado))
    .catch(error => console.log(error))
    */