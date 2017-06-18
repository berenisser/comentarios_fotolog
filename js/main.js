/*aquí va tu código*/

function init(){
	var button = document.getElementById("btn-guardar");
	button.addEventListener("click", guardar);
	guardar();	
}

function guardar(){
	var clave = document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;

	sessionStorage.setItem(clave, valor);

	var contenedor = document.getElementById("ale");
	contenedor.innerHTML = "";
	for(var i = 0; i < sessionStorage.length; i++){
		var kei = sessionStorage.key(i);
		var valuee = sessionStorage.getItem(kei);

		var comentarCaja = document.createElement("div");
		contenedor.appendChild(comentarCaja);
		var titulo = document.createElement("h3");
		var tituloText = document.createTextNode(kei);
		titulo.appendChild(tituloText);
		comentarCaja.appendChild(titulo);

		var parrafo = document.createElement("p");
		var parrafoText = document.createTextNode(valuee);
		parrafo.appendChild(parrafoText);
		comentarCaja.appendChild(parrafo);

/*
		contenedor.innerHTML += "<p>" + kei + " " + 
		valuee + "</p>";*/
	}
}

init();

