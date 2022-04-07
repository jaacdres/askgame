class VerificarRespuesta{
    constructor(){
    }

    respuesta(){
        let url= 'https://backend-juego-preguntas.herokuapp.com/respuesta/'
        fetch(url)
        .then(response => response.json())
        .then(data => {
            
            this.validarRespuesta(data)
        } )
        .catch(error => console.log(error))
    }
    validarRespuesta(respuestas){
        let seleccionada=0
        let verdadera
        for (let i=0; i<4;i++){
            if(document.formulario.respuesta[i].checked){
                seleccionada = document.formulario.respuesta[i].value
            }
        }
        
        for (let a of respuestas){
            if(a.id == seleccionada){
                
                verdadera= a.verdadera
            }
            
        }
        if(verdadera==true){
            let nivel = document.getElementById('nivel').innerHTML
            if(parseInt(nivel)<5){
                alert("Felicitaciones subes de nivel")
                let nivelAcual = document.getElementById('nivel').innerHTML
                document.getElementById('nivel').innerHTML = parseInt(nivelAcual) + 1
                this.subirNivel()
            }else{
                alert("Felicitaciones, ganaste el juego! te llevas: "+ document.getElementById('acumulado').innerHTML)

                this.subirNivel()
                this.guardarPremio()
                this.restablecerValores()
            }    
        }else{
            alert("Perdiste")
            this.guardarPremio()
            this.cargarApp()
            this.restablecerValores()

        }
    }
    pregunta1 = new Pregunta()
    respuesta1 = new Respuesta()

    cargarApp = () =>{
        mostrarPregunta();
        mostrarRespuesta();
    }
    mostrarPregunta = () => {
        pregunta1.pregunta()
    }
        
    mostrarRespuesta = () => {
        setTimeout(()=>respuesta1.respuesta(),1000)
    }
    subirNivel(){
        let premioActual  = document.getElementById('premio').innerHTML
        document.getElementById('premio').innerHTML = parseInt(premioActual) + 1000
        
        let acumulado = document.getElementById('acumulado').innerHTML
        document.getElementById('acumulado').innerHTML = parseInt(acumulado)+ parseInt(premioActual)

        cargarApp()
    }

    guardarPremio(){
        let premio = parseInt (document.getElementById('acumulado').innerHTML)
        let url = 'https://backend-juego-preguntas.herokuapp.com/jugador/'
        let datos={premioGanado: premio}
        
        
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
    }
    restablecerValores(){
        document.getElementById('nivel').innerHTML=1
        document.getElementById('premio').innerHTML=1000
        document.getElementById('acumulado').innerHTML=0
    }
}