function irPerfil(nick) {
}

function idMensaje(numero) {
}

function cargar(param) {
	var myDiv = document.getElementById("content");
	 $('#content').load(param);
}

function primera() {
	var primera = document.getElementById('primera').value;
	cargar(primera);
}

function anterior() {
	var anterior = document.getElementById('anterior').value;
	cargar(anterior);
}

function siguiente() {
	var siguiente = document.getElementById('siguiente').value;
	cargar(siguiente);
}

function ultima() {
	var ultima = document.getElementById('ultima').value;
	cargar(ultima);
}