var textarea = document.getElementById("inputTexto")
var tituloTextoNoEncontrado = document.getElementById("tituloTextoNoEncontrado")
var parrafoIngresarTexto = document.getElementById("parrafoIngresarTexto")
var imagenTextoNoEncontrado = document.getElementById("imagenTextoNoEncontrado")
var contenedorTextoEncriptado = document.getElementById("contenedeorTextoEncriptados")
var contenedor = document.getElementById("contenedorElementosResultado");



textarea.addEventListener("input", function(){
    var elementoEliminar = document.getElementById("contenedeorTextoEncriptado");
    var botonAEliminar = document.getElementById("btnCopiar")
    if (this.value === ""){
        if(elementoEliminar){
            contenedor.removeChild(elementoEliminar)
            contenedor.removeChild(botonAEliminar)
        }
        tituloTextoNoEncontrado.style.display = "block";
        parrafoIngresarTexto.style.display = "block";
        imagenTextoNoEncontrado.style.display = "block";
        
    }
});