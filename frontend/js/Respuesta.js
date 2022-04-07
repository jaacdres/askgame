class Respuesta{
    constructor(){
    }

    respuesta(){
        let url= 'https://backend-juego-preguntas.herokuapp.com/respuesta/'
        fetch(url)
        .then(response => response.json())
        .then(data => {            
            this.seleccionarRespuestas(data)
        } )
        .catch(error => console.log(error))
    }

    seleccionarRespuestas(respuestas){
        
        let numeroPregunta = setTimeout(this.buscarNumeroRespuesta(),1000)
        
        let arrayId=[]
        let arrayRespuesta=[]
        let arrayPreguntaId=[]
        let texto=''
        let idPregunta= 0
        
        for(let a of respuestas){
            
            if(a.pregunta != numeroPregunta){
                numeroPregunta = this.buscarNumeroRespuesta()
            }else{
                arrayRespuesta.push(a.respuesta)
                arrayId.push(a.id)
                arrayPreguntaId.push(a.pregunta)
            }
        }
        if(arrayRespuesta.length==0){
            this.respuesta()
        }else{
            for(let i=0; i<arrayRespuesta.length; i++){
                texto +=`<label><input type="radio" id="${arrayPreguntaId[i]}" name="respuesta" value="${arrayId[i]}">${arrayRespuesta[i]}</label><br>`
            }
            document.getElementById('respuesta').innerHTML=texto
            idPregunta = document.formulario.respuesta[0].id
        }
        let tiempo= setTimeout(this.buscarNumeroRespuesta(),1000)
        
        idPregunta = document.formulario.respuesta[0].id
        
        arrayRespuesta.splice(0,arrayRespuesta.length)
        arrayId.splice(0,arrayId.length)
        
        texto=''
        
        numeroPregunta=0
    }

    buscarNumeroRespuesta(){
        let numeroPregunta = document.getElementById('numero_pregunta').innerHTML

        return numeroPregunta
    }
}