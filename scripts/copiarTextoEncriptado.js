export function copiarTexto(texto) {
  
    
    var textareaTemp = document.createElement("textarea");
    textareaTemp.value = texto;
  
    
    document.body.appendChild(textareaTemp);
  
    
    textareaTemp.select();
    textareaTemp.setSelectionRange(0, textareaTemp.value.length);
  
   
    document.execCommand("copy");
  
    
    document.body.removeChild(textareaTemp);
  
  }

