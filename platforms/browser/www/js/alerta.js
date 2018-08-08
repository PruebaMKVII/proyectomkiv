function alertajs(){
	$.getJSON('http://localhost/respuestaexamenmki.php', function(data){
	var ac=0;   var ric=[];
	var fan;


for (var i = 0; i < data.length; i++) {
if (data[i].respcorrecta == $("input[name='a" + data[i].id + "']:checked").val()){
	ac = ac+2;
	  fan=ac;

 
	respcorrecta[i] = data[i].pregunta;	
	}else{
		ric[i] = data[i].pregunta;
	}
	alert("Puntuación final: "+ac+"<br> Fallaste en: "+ric);
	
};
	}
	}

function fan(){
	 if (fan>=8)
  {
    document.write('Eres super fan! el cap esta orgulloso de ti');
  }
  else
  {
    if (pro>=6)
    {
      document.write('Tienes un poco de heroe en ti');
    }
    else
    {
      document.write('No eres nada fan');
    }
  }


	}
