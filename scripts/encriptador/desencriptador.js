var textarea = document.getElementById("inputTexto")
var tituloTextoNoEncontrado = document.getElementById("tituloTextoNoEncontrado")
var parrafoIngresarTexto = document.getElementById("parrafoIngresarTexto")
var imagenTextoNoEncontrado = document.getElementById("imagenTextoNoEncontrado")
var contenedor = document.getElementById("contenedorElementosResultado");
var btnDesencriptar = document.getElementById("btnDesencriptar")
import { copiarTexto } from "../copiarTextoEncriptado.js";

btnDesencriptar.addEventListener("click", desencriptarTexto);

function desencriptarTexto() {
    var contenidoTexto = textarea.value;
    var elementoEliminar = document.getElementById("contenedeorTextoEncriptado");
    var botonAEliminar = document.getElementById("btnCopiar")
    var textoFinal = ""
    if(elementoEliminar){
        
        contenedor.removeChild(elementoEliminar)
        contenedor.removeChild(botonAEliminar)
    }
    if (contenidoTexto != ""){
        tituloTextoNoEncontrado.style.display = "none";
        parrafoIngresarTexto.style.display = "none";
        imagenTextoNoEncontrado.style.display = "none";
        var advertencia = false;
        var encriptaciones = {
            enter: 'e',
            imes: 'i',
            ai: 'a',
            ober: 'o',
            ufat: 'u'
        }
        
        for (var encriptada in encriptaciones) {
            if (encriptaciones.hasOwnProperty(encriptada)) {
              var regex = new RegExp(encriptada, 'g');
              contenidoTexto = contenidoTexto.replace(regex, encriptaciones[encriptada]);
              
            }
            textoFinal = contenidoTexto;
            
        }
        for (var i = 0; i<textoFinal.length; i++){
            var letra = textoFinal[i];
            if(letra === letra.toUpperCase()){
                advertencia = true;
            }
            var tieneAcento = /[áéíóúÁÉÍÓÚ]/.test(textoFinal[i]);
            if (tieneAcento) {
                advertencia = true;
            }
        }
        if(advertencia){
            textoFinal = "El texto contiene mayúsculas o acentos y no se puede desencriptar.";
        }  
        
        var contenedorTextoEncriptado = document.createElement("div")
        contenedorTextoEncriptado.id = "contenedeorTextoEncriptado"
        contenedor.appendChild(contenedorTextoEncriptado)
        var parrafo = document.createElement("p");
        var botonCopiar = document.createElement("button");
        botonCopiar.textContent = "Copiar";
        botonCopiar.id = "btnCopiar";
        parrafo.textContent = textoFinal;
        parrafo.id = "parrafoTextoEncriptado";
        contenedorTextoEncriptado.appendChild(parrafo);
        contenedor.appendChild(botonCopiar);
        botonCopiar.onclick = botonCopiar.onclick = function() {
            copiarTexto(textoFinal);
        };
        advertencia = false
    }
    
    
    
  }
  