// Primer boton

function cambiarParrafo1(){
   const inputUno = document.getElementById("inputUno") 
    if(inputUno.style.display === "block"){
        inputUno.style.display = "none"
    }else{
        inputUno.style.display = "block"
    }
}

function textoIngresado1(newText){
    document.getElementById("texto1").innerText=newText;
}

function ocultarSeccion1(){
    document.getElementById("presentacion").style.display ="none";
    
}


// Segundo boton

function cambiarParrafo2(){
    const inputDos = document.getElementById("inputDos") 
    if(inputDos.style.display === "block"){
        inputDos.style.display = "none"
    }else{
        inputDos.style.display = "block"
    }
}


function textoIngresado2(newText){
    document.getElementById("texto2").innerText=newText;
}

function ocultarSeccion2(){
    document.getElementById("experiencia").style.display ="none";
    
}

const teclas1 = document.getElementById("inputUno")

teclas1.addEventListener('keydown', e =>{
    console.log(e)
    if(e.code === "Enter"){
        teclas1.style.display = "none"
    }
})

const teclas2 = document.getElementById("inputDos")

teclas2.addEventListener('keydown', e =>{
    console.log(e)
    if(e.code === "Enter"){
        teclas2.style.display = "none"
    }
})

