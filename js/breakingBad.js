window.onload = function(){
	//si el boton fuera un submit en vez de click pondriamos submit
	 document.getElementById('valida').addEventListener('click', validaForm);
	
}


//Validación de todos los campos a partir de las funciones individuales

function validaForm(){
	
var valF = validaFecha(); var valCoc = validaCocinero(); var valD = validaDestinatario();
var valG = validaGramos(); var valComp = validaComposicion();

if(valF == true && valCoc == true && valD == true && valG == true && valComp == true){
	creaColeccion();
	swal( "BUEN TRABAJO!!", "¡ Enviaste el formulario ! ");
	borraCampos();
	return true;

	
}else{
	swal("Tiene errores en el formulario","compruebe los campos en morado e intentelo de nuevo");
	return false;
	}
}

//restablece el value de los campos del formulario a vacios cuando hacemos click en en boton
function borraCampos(){
var fc =$("#fecha").val(''); 

var coc =  $("#cocinero").val('');
 
var loc = $("#destinatario").val('');
 
var gr = $("#gramos").val('');
 
var comp = $("#compo").val('');

}

//validación de campos

function validaFecha(){
	var f = $("#fecha");
	//ER tipo fecha con formato dd/mm/aaaa, HE RESTRINGIDO LOS DIAS A 31 Y NUM DE MES A 12, LOS AÑOS NO. 
	if(!(/^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/).test(f.val())){
		f.addClass("error");
		return false;
	}else{
		f.removeClass("error");
		return true;
		
	}
}

function validaCocinero(){
	var co = $("#cocinero");
	//ER del cocinero formato AA$5555
	if(!(/^[A-Z]{2}\W\S?\d{4}$/).test(co.val())){
		co.addClass("error");
		return false;
	}else{
		co.removeClass("error");
		return true;
		
	}
}

//dos o tres letras mayúsculas correspondientes al estado, un guión bajo,
// el nombre de la ciudad en minúsculas, dos puntos,
// y el código de distrito de 4 digitos(ej. NM_alburquerque:1234). 
function validaDestinatario(){
	var d = $("#destinatario");
	//ER destinatario formato AA_
	if(!(/^[A-Z]{2,3}[_]+[a-z]{2,50}[:]+\d{4}$/).test(d.val())){
		d.addClass("error");
		return false;
	}else{
		d.removeClass("error");
		return true;
		
	}
}
//num del 100-500
function validaGramos(){
	var g = $("#gramos");
	if(!(/^(1[0-9][0-9]|[2-9][0-9]{2}|1[0-9]{3}|2[0-9]{3}|3[0-9]{3}|4[0-9]{3}|5000)\b$/).test(g.val())){
		g.addClass("error");
		return false;
	}else{
		g.removeClass("error");
		return true;
		
	}
}
//cantidad de gramos seguida por dos conjuntos de una o dos
//letras seguidas o no de un numero (200gC3OH7)
function validaComposicion(){
	var c = $("#compo");
	
	if(!(/^(1[0-9][0-9]|[2-9][0-9]{2}|1[0-9]{3}|2[0-9]{3}|3[0-9]{3}|4[0-9]{3}|5000)?\w{1,2}\d{0,1}\w{1,2}\d{0,1}$/.test(c.val()))){
		c.addClass("error");
		return false;
	}else{
		c.removeClass("error");
		return true;
		
	}
}

//se crea un array para imprimir los campos del form
var coleccion = [];
//recogemos los valores de los inputs y los metemos en el array, llamamos a la funcion imprime 
function creaColeccion(){

var fc =$("#fecha").val();
var coc =  $("#cocinero").val();
var loc = $("#destinatario").val();
var gr = $("#gramos").val();
var comp = $("#compo").val();

coleccion.push(fc, coc, loc, gr, comp);

imprimeC(coleccion); //imprime en el text area, funcion mas abajo
coleccion  = [];
//restablece los valores a cero despues de haberlo imprimido en el textArea

}

//recorre el array y va acomulando los valores en una variable, se asigna el resultado a una etiqueta del html para mostrarlo
function imprimeC(a){
	var campo = ["Fecha: ", "Cocinero: ", "Destinatario: ", "Gramos: ", "Composición: " ];
	var muest = '';
	for(var i = 0; i < a.length; i++){
		
		 muest = muest + campo[i] + a[i] + "-";
	}
	

	$("#muestra").append('<li>' + muest);
	muest = '';
}	

