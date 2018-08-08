function alertajs(){
	$.getJSON('http://localhost/respuestaexamenmki.php', function(data){
	var ac=0;   var ric=[];
	var fan = [];


for (var i = 0; i < data.length; i++) {
if (data[i].respcorrecta == $("input[name='a" + data[i].id + "']:checked").val()){
	ac = ac+2;	
	respcorrecta[i] = data[i].pregunta;	
	}else{
		ric[i] = data[i].pregunta;
	}
	alert("Puntuación final: "+ac+"<br> Fallaste en: "+ric);
};
	}
	}

	
