function contarTexto(campo, limite, container) {
  if (campo.value.length > limite) {
  campo.value = campo.value.substring(0, limite);
  } else {
  d = document.getElementById(container);
  d.innerHTML = 'Restam ' + (parseInt(limite) - parseInt(campo.value.length));
  }
 }
 document.getElementById("texto").addEventListener("keydown", function(){
  contarTexto(this, 250, "falta");
 });

 var campo = document.getElementById("texto")
var limite = 250;
if (campo.value.length > limite) {
 campo.value = campo.value.substring(0, limite);
} 

function toLimit(string = ""){
  string.value = string.value.substring(0,10);
}
<input type="text" onkeyup="toLimit(this)" />