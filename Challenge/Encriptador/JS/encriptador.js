
    function method(number,text){
        var texto1 = String(text);
        if (number === 1){
            texto1 = texto1.replace(/e/gm,"enter");
            texto1 = texto1.replace(/i/gm,"imes");
            texto1 = texto1.replace(/a/gm,"ai");
            texto1 = texto1.replace(/o/gm,"ober");
            texto1 = texto1.replace(/u/gm,"ufat");
            console.log(texto1);
            return texto1;
        }
        else if (number === 2){
            var texto2 = text;
            texto2 = texto2.replace(/enter/gm,"e");
            texto2 = texto2.replace(/imes/gm,"i");
            texto2 = texto2.replace(/ai/gm,"a");
            texto2 = texto2.replace(/ober/gm,"o");
            texto2 = texto2.replace(/ufat/gm,"u");
            return texto2;
        }
    }

    function accion(forma) {
        let texto = document.getElementById('texto');
        const regexCE = /([A-Z0-9áéíóúÁÉÍÓÚñ@$!%*?&])/gm.test(texto.value);
        if (texto.value.length != 0 && !regexCE) {
            document.querySelector(".parte-pedido").style.display = "none";
            var texto1 = method(forma,texto.value);
            document.getElementById("mensajeresultado").innerHTML = texto1;  
            document.querySelector(".parte-encriptado").style.display="block";
            document.querySelector(".mensaje1").style =  'border: 2px solid #E5E5E5';
            document.querySelector(".mensaje-validador").style = 'color: #0A3871;';
        }
        else{
            document.querySelector(".mensaje1").style =  'border: 2px solid red';
            document.querySelector(".mensaje-validador").style = 'color: red;';
            texto.value = '';
        }
        document.getElementById('texto').focus(); 
    }
    /*
    function encriptar() {
        let texto = document.getElementById('texto');
        const regexCE = /([A-Z0-9áéíóúÁÉÍÓÚñ@$!%*?&])/gm.test(texto.value);
        console.log(document.getElementById('texto').value);
        if (texto.value.length != 0 && !regexCE) {
            document.querySelector(".parte-pedido").style.display = "none";
            var texto1 = method(1,texto.value);
            document.getElementById("mensajeresultado").innerHTML = texto1;  
            document.querySelector(".parte-encriptado").style.display="block";
            document.querySelector(".mensaje1").style =  'border: 2px solid #E5E5E5';
            document.querySelector(".mensaje-validador").style = 'color: #0A3871;';
        }
        else{
            document.querySelector(".mensaje1").style =  'border: 2px solid red';
            document.querySelector(".mensaje-validador").style = 'color: red;';
            texto.value = '';
        }
        document.getElementById('texto').focus();      
    }

    function desencriptar() {
        let texto = document.getElementById('texto');
        const regexCE = /([A-Z0-9áéíóúÁÉÍÓÚñ@$!%*?&])/gm.test(texto.value);
        if (texto.value.length != 0 && !regexCE) {
            document.querySelector(".parte-pedido").style.display = "none";
            var texto2 = method(2,texto.value);
            document.getElementById("mensajeresultado").innerHTML = texto2; 
            document.querySelector(".parte-encriptado").style.display="block"; 
            document.querySelector(".mensaje1").style =  'border: 2px solid #E5E5E5';
            document.querySelector(".mensaje-validador").style = 'color: #0A3871;';
        }
        else{
            document.querySelector(".mensaje1").style =  'border: 2px solid red';
            document.querySelector(".mensaje-validador").style = 'color: red;';
            texto.value = '';
        }
        document.getElementById('texto').focus();     
        }
        */
    function copiarTexto(){
        var texto = document.getElementById("mensajeresultado");
        var seleccion = document.createRange();
        seleccion.selectNodeContents(texto);    
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);
        var res = document.execCommand('copy');
        window.getSelection().removeRange(seleccion);
        document.getElementById('texto').value='';    
        document.getElementById('texto').focus();
        document.querySelector(".parte-encriptado").style.display="none"; 
        document.querySelector(".parte-pedido").style.display = "block";
        
    }
       