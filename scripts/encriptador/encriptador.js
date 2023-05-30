var textarea = document.getElementById("inputTexto")
var tituloTextoNoEncontrado = document.getElementById("tituloTextoNoEncontrado")
var parrafoIngresarTexto = document.getElementById("parrafoIngresarTexto")
var imagenTextoNoEncontrado = document.getElementById("imagenTextoNoEncontrado")
var contenedor = document.getElementById("contenedorElementosResultado");
var btnEncriptar = document.getElementById("btnEncriptar")
import { copiarTexto } from "../copiarTextoEncriptado.js";

btnEncriptar.addEventListener("click", encriptarTexto);


function encriptarTexto(){
    var advertencia = false;
    var contenidoTexto = textarea.value;
    var elementoEliminar = document.getElementById("contenedeorTextoEncriptado");
    var botonAEliminar = document.getElementById("btnCopiar")
    if(elementoEliminar){
        contenedor.removeChild(elementoEliminar)
        contenedor.removeChild(botonAEliminar)
    }
    if (contenidoTexto != ""){
        tituloTextoNoEncontrado.style.display = "none";
        parrafoIngresarTexto.style.display = "none";
        imagenTextoNoEncontrado.style.display = "none";
        
        var textoEncriptado = '';        
        for (var i = 0; i<contenidoTexto.length; i++){
            var letra = contenidoTexto[i];
            var encriptada = letra
            if(esVocal(letra)){
                encriptada = encriptarVocal(letra);
            }
            textoEncriptado += encriptada;
        }
        for (var i = 0; i<textoEncriptado.length; i++){
            var letra = textoEncriptado[i];
            if(letra === letra.toUpperCase()){
                advertencia = true
            }
        }
        if(advertencia){
            textoEncriptado = "El texto contiene mayúsculas y no se puede encriptar."
        }
        var contenedorTextoEncriptado = document.createElement("div")
        contenedorTextoEncriptado.id = "contenedeorTextoEncriptado"
        contenedor.appendChild(contenedorTextoEncriptado)
        var parrafo = document.createElement("p");
        var botonCopiar = document.createElement("button");
        botonCopiar.textContent = "Copiar";
        botonCopiar.id = "btnCopiar";
        parrafo.textContent = textoEncriptado;
        parrafo.id = "parrafoTextoEncriptado";
        contenedorTextoEncriptado.appendChild(parrafo);
        contenedor.appendChild(botonCopiar);
        botonCopiar.onclick = botonCopiar.onclick = function() {
            copiarTexto(textoEncriptado);
        };
          
        advertencia = false
        
    }
}

function esVocal(letra){
    var vocales = ['a', 'e', 'i', 'o', 'u'];
    return vocales.includes(letra)
}

function encriptarVocal(vocal) {
    var encriptada = '';
  
    switch (vocal.toLowerCase()) {
      case 'e':
        encriptada = 'enter';
        break;
      case 'i':
        encriptada = 'imes';
        break;
      case 'a':
        encriptada = 'ai';
        break;
      case 'o':
        encriptada = 'ober';
        break;
      case 'u':
        encriptada = 'ufat';
        break;
      default:
        encriptada = vocal;
        break;
    }
  
    return encriptada;
  }
  