/*aquí va tu código*/

function init(){
	var button = document.getElementById("btn-guardar");
	button.addEventListener("click", guardar);
	guardar();	
}

function guardar(){
	var clave = document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;
	
	localStorage.setItem(clave, valor);

	document.getElementById("clave").value= ""; //limpia los campos
	document.getElementById("valor").value = ""; //limpia los campos

	var contenedor = document.getElementById("ale");
	contenedor.innerHTML = "";
	for(var i = 0; i < localStorage.length; i++){
		var kei = localStorage.key(i);
		var valuee = localStorage.getItem(kei);

		var comentarCaja = document.createElement("div");
		comentarCaja.classList.add("parrafCaja");
		//contenedor.appendChild(comentarCaja);
		var titulo = document.createElement("h3");
		titulo.classList.add("h-3");
		var tituloText = document.createTextNode(kei);
		titulo.appendChild(tituloText);
		comentarCaja.appendChild(titulo);

		var parrafo = document.createElement("p");
		parrafo.classList.add("mb-15");
		var parrafoText = document.createTextNode(valuee);
		parrafo.appendChild(parrafoText);
		comentarCaja.appendChild(parrafo);
		contenedor.appendChild(comentarCaja);

/*
		contenedor.innerHTML += "<p>" + kei + " " + 
		valuee + "</p>";*/
	}
}

init();

document.getElementById("btn-limpiar").addEventListener("click",function(){
	window.localStorage.clear();
	guardar();
});