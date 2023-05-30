var textarea = document.getElementById("inputTexto");
textarea.addEventListener("input", function(){
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
    
    var maxHeight = window.innerHeight * 0.7;
    if (this.scrollHeight > maxHeight) {
        this.style.overflowY = "scroll";
        this.style.height = maxHeight + "px";
    } else {
        this.style.overflowY = "hidden"; 
    }
});

