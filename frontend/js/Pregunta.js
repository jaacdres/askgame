class Pregunta{
    constructor(){
    }

    pregunta(params) {
        let url= 'https://backend-juego-preguntas.herokuapp.com/pregunta/'
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            this.seleccionarPregunta(data);
        })
        .catch(error => console.log(error))
        
    }
    //función generar numero aleatorio 
    random (min, max){
        let rdn = Math.floor(Math.random() *(max + 1 - min) + min)
        //console.log("valor rdn: " + rdn)
        return rdn
    }

    seleccionarPregunta(pregunta){
        let arrayId = []
        let arrayPregunta = []
        let nivel = parseInt(document.getElementById('nivel').innerHTML)
        //for para seleccionar preguntas de nivel requerido
        for(let a of pregunta){
            if (a.nivel == nivel){
                arrayId.push(a.id)
                arrayPregunta.push(a.pregunta)
            }
        }

        //console.log(arrayId)

        //se selecciona pregunta de forma aleatoria
        let id = arrayId[this.random(1,5)-1]
        //console.log("id de la pregunta: "+id)//id de la pregunta 
        //identificar pregunta segun id
        //document.getElementById('pregunta').innerHTML=''
        let preguntaTexto
        let texto = '' 
        if(nivel != 1){
            preguntaTexto = arrayPregunta[id-1-(5*(nivel-1))]
            
            
        }else{
            preguntaTexto = arrayPregunta[id-1]
        }
        //console.log(preguntaTexto)
        texto = `<li> ${preguntaTexto} </li>`
        document.getElementById('numero_pregunta').innerHTML=id
        document.getElementById('pregunta').innerHTML=texto

        //console.log('contenido variable texto: ' + texto)

    }
}